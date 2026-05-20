# Phase 8 - GitHub Distribution and Installer

Status: implemented as repository packaging in the workspace root.

Implementation report: `PHASE-8-GITHUB-INSTALLER-REPORT.md`.

Goal: package the final modular `gpt55-runtime` skill as a portable GitHub repository installable with:

```text
npx github:NewtonAlves/gpt55-runtime
```

Implemented repository layout:

```text
package.json
README.md
LICENSE
CHANGELOG.md
SECURITY.md
scripts/install.mjs
scripts/doctor.mjs
scripts/validate.mjs
scripts/uninstall.mjs
payload/gpt55-runtime/
docs/INSTALL.md
docs/TROUBLESHOOTING.md
docs/SECURITY.md
```

Installer rules preserved:

- install only the base `gpt55-runtime` skill;
- default destination: `<home>/.agents/skills/gpt55-runtime`;
- Codex sync destination is optional via `--sync-codex`;
- create backup before overwriting an existing install;
- do not install MCPs, GSD, Open Design, Context7, plugins, or external skills automatically;
- `doctor` only detects optional dependencies and reports pending setup;
- `validate` checks required files, required folders, short `SKILL.md`, forbidden paths, local machine paths, and secret-like markers;
- `uninstall` is non-destructive: it moves the installed runtime to a timestamped backup instead of deleting it.

Remaining manual step: create/push the GitHub repository after reviewing the suggested git plan in the Phase 8 report.
