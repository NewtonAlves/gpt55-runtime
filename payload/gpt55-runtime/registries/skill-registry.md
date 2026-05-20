# Skill Registry

This registry classifies capability relationships, not installed paths.

Do not install new capabilities without explicit authorization.

External marketplace skills are untrusted until audited.

GSD, Context7, Open Design, browser validation, security review skills, and MCPs are optional capabilities unless confirmed installed in the active environment.

Status/classification values:

- essential
- specialist
- optional
- experimental
- rejected
- reference-only

| Capability | Classification | Use |
|---|---|---|
| GSD skills | optional executor | Phase-based project planning/execution when installed and appropriate |
| Context7/docs tools | optional source tool | Current documentation for libraries, SDKs, APIs, CLIs, cloud services |
| Open Design | optional design tool | Artifact-first design context when installed/running |
| Browser/Playwright skills | optional validation | Local UI validation, screenshots, browser smoke checks |
| Security review skills | specialist | High-risk code/security review |
| External marketplace skills | untrusted until audited | Inspect source, scripts, permissions, maintenance before use |

## Installed Skills Inventory Summary

Source audit: `PHASE-2-8-INSTALLED-SKILLS-AUDIT.md`.

This section summarizes installed skill families. It does not copy skill contents and does not imply automatic execution.

| Capability family | Representative skills | Recommended status | Risk note | Related category | Related flow |
|---|---|---|---|---|---|
| frontend/design | `frontend-design`, `design-system-patterns`, `building-components`, `typeui-*`, `visual-designer` | essential/specialist/optional by route | mostly LOW/MEDIUM; visual tools still need validation | frontend; design | design-system-flow |
| frontend framework | `react-*`, `next-*`, `frontend-developer`, `fullstack-developer` | specialist | use current docs for framework syntax | frontend | example-driven-development-flow |
| backend/API/database | `backend-*`, `api-design*`, `prisma-*`, `supabase-*`, `database-migrations` | specialist/experimental | migrations and DB writes are high risk | backend | backend-api-flow |
| auth/security | `clerk*`, `auth0-*`, `security-*`, `owasp-*` | specialist/experimental | auth/security changes require explicit validation | security; backend | auth-flow |
| Android/mobile | `android-*`, `compose-*`, `flutter-*`, `dart-*` | specialist/optional | requires platform validation | android | android-flow |
| AI/MCP/agents | `openai-docs`, `ai-sdk`, `agents-sdk`, `mcp-builder`, `hf-cli` | specialist/experimental | MCP/credentials/network require audit | ai-agents | ai-agent-flow |
| docs/files/office | `doc`, `pdf`, `spreadsheet`, `PowerPoint`, `documents:*` | optional/specialist | avoid destructive document rewrites without backup | research-discovery | research-discovery-flow |
| writing/books | `autor-livros-ptbr`, `revisor-portugues-br`, `book-marketing`, `chapter-drafter` | specialist | preserve author voice and verify factual claims | writing | study-flow |
| gamedev | `game-development`, `godot-*`, `phaser-*`, `pixel-art-sprites` | specialist/optional | engine/MCP actions require local validation | gamedev | gamedev-flow |
| context/memory/workflow | `context-driven-development`, `spec-workflow`, `remember`, `optimize-agents-md`, GSD skills | essential/optional | do not make small tasks over-process-heavy | research-discovery | skill-update-flow |

For detailed family-level inventory, use `references/skills/expanded-skill-curation.md`.
