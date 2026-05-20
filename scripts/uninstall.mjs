#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "").replace("T", "-");
}

function parseArgs(args) {
  return {
    codex: args.includes("--codex") || args.includes("--sync-codex"),
    dest: args.includes("--dest") ? args[args.indexOf("--dest") + 1] : null
  };
}

function backupInsteadOfDelete(dest) {
  if (!fs.existsSync(dest)) {
    console.log(`Not installed: ${dest}`);
    return;
  }
  const backup = path.join(path.dirname(dest), `gpt55-runtime.backup-${timestamp()}`);
  fs.renameSync(dest, backup);
  console.log(`Moved ${dest} to ${backup}`);
}

export async function main(args = process.argv.slice(2)) {
  const parsed = parseArgs(args);
  const home = os.homedir();
  const targets = [parsed.dest || path.join(home, ".agents", "skills", "gpt55-runtime")];
  if (parsed.codex) targets.push(path.join(home, ".codex", "skills", "gpt55-runtime"));
  for (const target of targets) backupInsteadOfDelete(path.resolve(target));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
