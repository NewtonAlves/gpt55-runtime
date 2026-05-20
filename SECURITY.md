# Security Policy

## Supported Scope

This repository installs only the bundled `gpt55-runtime` skill payload.

It does not install or activate:

- MCP servers;
- GSD;
- Open Design;
- Context7;
- Codex plugins;
- external skills;
- credentials or API keys.

## Reporting

Open a GitHub issue for security concerns. Do not include secrets, API keys, tokens, or private config values in reports.

## Installer Safety

- Creates a timestamped backup before overwriting an existing destination.
- Copies only `payload/gpt55-runtime`.
- Validates structure before and after install.
- Does not edit `config.toml`.
- Does not execute scripts from the payload.
