#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const REQUIRED_FILES = ["SKILL.md", path.join("agents", "openai.yaml")];
const REQUIRED_DIRS = [
  "runtime",
  "categories",
  "specialists",
  "flows",
  "references",
  "registries",
  "validation",
  "updates"
];

const FORBIDDEN_PATH_PARTS = [
  "node_modules",
  ".git",
  ".env",
  "config.toml",
  "backup",
  "backups",
  "logs",
  "tmp",
  "temp"
];

const ABSOLUTE_PATTERNS = [
  /D:\\OneDrive/i,
  /C:\\Users\\Admin/i,
  /\.codex local/i,
  /\.agents local/i,
  /ctx7sk-/i,
  /CONTEXT7_API_KEY/i
];

function parseArgs(args) {
  const out = { target: null, json: false };
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--target") out.target = args[++i];
    else if (arg === "--json") out.json = true;
  }
  return out;
}

function walk(dir) {
  const entries = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    entries.push(full);
    if (item.isDirectory()) entries.push(...walk(full));
  }
  return entries;
}

function isTextFile(file) {
  return /\.(md|txt|json|yaml|yml|toml|mjs|js|ts|css|html)$/i.test(file);
}

export function validateSkill(target) {
  const errors = [];
  const warnings = [];
  const root = path.resolve(target);

  if (!fs.existsSync(root)) {
    return { ok: false, root, errors: [`Target does not exist: ${root}`], warnings };
  }

  for (const file of REQUIRED_FILES) {
    const full = path.join(root, file);
    if (!fs.existsSync(full) || !fs.statSync(full).isFile()) errors.push(`Missing required file: ${file}`);
  }

  for (const dir of REQUIRED_DIRS) {
    const full = path.join(root, dir);
    if (!fs.existsSync(full) || !fs.statSync(full).isDirectory()) errors.push(`Missing required directory: ${dir}`);
  }

  const skillPath = path.join(root, "SKILL.md");
  if (fs.existsSync(skillPath)) {
    const lines = fs.readFileSync(skillPath, "utf8").split(/\r?\n/).length;
    if (lines > 120) errors.push(`SKILL.md is too long for this runtime: ${lines} lines`);
  }

  const entries = walk(root);
  for (const entry of entries) {
    const rel = path.relative(root, entry);
    const lowerParts = rel.split(path.sep).map((part) => part.toLowerCase());
    if (lowerParts.some((part) => FORBIDDEN_PATH_PARTS.includes(part))) {
      errors.push(`Forbidden path in payload: ${rel}`);
    }
    if (fs.statSync(entry).isFile() && isTextFile(entry)) {
      const text = fs.readFileSync(entry, "utf8");
      for (const pattern of ABSOLUTE_PATTERNS) {
        if (pattern.test(text)) errors.push(`Forbidden local/secret pattern in ${rel}: ${pattern}`);
      }
    }
  }

  return { ok: errors.length === 0, root, errors, warnings };
}

export async function main(args = process.argv.slice(2)) {
  const parsed = parseArgs(args);
  const target = parsed.target || path.join(repoRoot, "payload", "gpt55-runtime");
  const result = validateSkill(target);
  if (parsed.json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(`Validation target: ${result.root}`);
    if (result.ok) console.log("OK: structure is valid.");
    for (const warning of result.warnings) console.warn(`WARN: ${warning}`);
    for (const error of result.errors) console.error(`ERROR: ${error}`);
  }
  if (!result.ok) process.exitCode = 1;
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
