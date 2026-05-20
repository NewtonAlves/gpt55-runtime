#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { main as doctorMain } from "./doctor.mjs";
import { main as validateMain, validateSkill } from "./validate.mjs";
import { main as uninstallMain } from "./uninstall.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const payload = path.join(repoRoot, "payload", "gpt55-runtime");

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "").replace("T", "-");
}

function parseArgs(args) {
  if (args[0] === "--") args = args.slice(1);
  const out = {
    command: null,
    syncCodex: false,
    dest: null,
    dryRun: false
  };
  const known = new Set(["doctor", "validate", "uninstall"]);
  if (args[0] && known.has(args[0])) {
    out.command = args[0];
    args = args.slice(1);
  }
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--sync-codex" || arg === "--codex-sync") out.syncCodex = true;
    else if (arg === "--dest") out.dest = args[++i];
    else if (arg === "--dry-run") out.dryRun = true;
  }
  out.args = args;
  return out;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, item.name);
    const to = path.join(dest, item.name);
    if (item.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function installOne(dest, dryRun) {
  const sourceCheck = validateSkill(payload);
  if (!sourceCheck.ok) {
    for (const error of sourceCheck.errors) console.error(`ERROR: ${error}`);
    throw new Error("Payload validation failed before install.");
  }

  const resolved = path.resolve(dest);
  console.log(`Install target: ${resolved}`);

  if (dryRun) {
    console.log("Dry run: no files copied.");
    return;
  }

  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  if (fs.existsSync(resolved)) {
    const backup = path.join(path.dirname(resolved), `gpt55-runtime.backup-${timestamp()}`);
    fs.renameSync(resolved, backup);
    console.log(`Backup created: ${backup}`);
  }

  copyDir(payload, resolved);
  const installedCheck = validateSkill(resolved);
  if (!installedCheck.ok) {
    for (const error of installedCheck.errors) console.error(`ERROR: ${error}`);
    throw new Error("Installed copy failed validation.");
  }
  console.log("Installed and validated.");
}

export async function main(args = process.argv.slice(2)) {
  const parsed = parseArgs(args);
  if (parsed.command === "doctor") return doctorMain(parsed.args);
  if (parsed.command === "validate") return validateMain(parsed.args);
  if (parsed.command === "uninstall") return uninstallMain(parsed.args);

  const home = os.homedir();
  const targets = [parsed.dest || path.join(home, ".agents", "skills", "gpt55-runtime")];
  if (parsed.syncCodex) targets.push(path.join(home, ".codex", "skills", "gpt55-runtime"));

  for (const target of targets) installOne(target, parsed.dryRun);
  console.log("Done. No MCPs, plugins, GSD, Open Design, Context7, or external skills were installed.");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
