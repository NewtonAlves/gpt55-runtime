# Changelog

## 2026.1.0

- Added portable GitHub/npx installer.
- Added clean payload packaging under `payload/gpt55-runtime`.
- Added doctor, validate, install, and uninstall scripts.
- Installer defaults to `.agents/skills/gpt55-runtime`.
- Optional `--sync-codex` installs a second copy to `.codex/skills/gpt55-runtime`.
- Doctor only detects optional dependencies and does not install them.
