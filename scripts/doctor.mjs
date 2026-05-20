#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

function exists(p) {
  return fs.existsSync(p);
}

export async function main() {
  const home = os.homedir();
  const checks = [
    ["Node.js", process.version],
    ["Default agents destination", path.join(home, ".agents", "skills", "gpt55-runtime")],
    ["Optional Codex destination", path.join(home, ".codex", "skills", "gpt55-runtime")],
    ["Optional Codex config", exists(path.join(home, ".codex", "config.toml")) ? "present" : "missing"],
    ["Optional GSD manifest", exists(path.join(home, ".codex", "gsd-file-manifest.json")) ? "present" : "missing"],
    ["Optional Open Design tool", exists(path.join(home, ".codex", "tools", "open-design")) ? "present" : "missing"],
    ["Optional Context7 config hint", exists(path.join(home, ".codex", "config.toml")) ? "check config manually" : "not detected"],
    ["Optional external skills", exists(path.join(home, ".agents", "skills")) ? "present" : "missing"]
  ];

  console.log("GPT55 Runtime Doctor");
  console.log("");
  for (const [label, value] of checks) {
    console.log(`- ${label}: ${value}`);
  }
  console.log("");
  console.log("Doctor only detects optional dependencies. It does not install or activate MCPs, plugins, GSD, Open Design, Context7, or external skills.");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
