# Update and Sync Guide

## Objective

Modern operational guide for updating and syncing the modular `gpt55-runtime` without returning to a monolithic archive.

## Core rule

Audit first. Change after. Apply the minimum patch. Validate at the end.

## Essential differences

- Update: improve or correct internal runtime content, registry, reference, flow, or validation.
- Install: add a new external capability such as skill, plugin, MCP, connector, or CLI.
- Sync: copy the validated local skill to an installed destination, or compare local and installed versions.
- Reread: inspect existing capabilities in configured folders without changing anything.
- Register: add or update metadata in registries without installing anything.
- Add category: create or update category, aliases, flow, specialists, routing, and tests. Categoria nao se instala.

## Allowed operations

### Update a reference

1. Identify source material and target reference.
2. Preserve useful content.
3. Keep the reference dense and on-demand.
4. Update `reference-registry.md`.
5. Update mapping/report.
6. Validate no machine-specific absolute paths.

### Update a category

1. Confirm the category is reusable, not a one-off project.
2. Update `categories/`.
3. Update `category-registry.md`.
4. Update `routing-matrix.md` only for recurring intents.
5. Update `flow-registry.md`, `specialist-registry.md`, and validation if needed.

### Update a flow

1. Keep the flow short and operational.
2. Put long explanations in `updates/` or `references/`.
3. Update `flow-registry.md` when the flow changes behavior.
4. Add validation tests.

### Update a specialist

1. Add specialist only for recurring, clear, low-overlap roles.
2. Update `specialists/` and `specialist-registry.md`.
3. Avoid creating one specialist per external skill.

### Register an already installed skill

1. Inspect local skill metadata.
2. Do not reinstall.
3. Classify status and risk.
4. Update `skill-registry.md` or `references/skills/expanded-skill-curation.md`.
5. Update routing only when it changes a recurring route.

### Audit external skill before install

1. Identify source and maintainer.
2. Inspect `SKILL.md`.
3. Inspect scripts, references, assets, and agents metadata.
4. Check permissions, destructive commands, network, credentials, and MCP usage.
5. Classify risk.
6. Ask explicit authorization before installing.

### Reread `.agents/skills`

Read folder names and metadata only. Do not execute scripts, move folders, or install dependencies. Compare useful skills with `skill-registry.md` and `expanded-skill-curation.md`.

### Reread `.codex/skills`

Read installed Codex skill metadata only. Compare with `.agents/skills` if sync or compatibility is requested. Do not overwrite either side without backup and authorization.

### Sync local `gpt55-runtime` with installed skill

1. Validate local source.
2. Confirm destination.
3. Create timestamped backup of destination.
4. Copy local package.
5. Validate destination.
6. Generate sync report.

### MCP/plugin update

1. Treat as high-risk until audited.
2. Do not edit `config.toml` without explicit authorization.
3. Do not activate MCPs in bulk.
4. Doctor/check only; install/activate only after approval.

### UI/design references

Keep large visual material in `references/`, not `SKILL.md`. Update `reference-registry.md` and mapping when a reference becomes reusable.

### Research sources

Update `source-trust-registry.md` and `research-source-registry.md` when source type or trust rule changes.

### Routes

Add only recurring reusable intents to `routing-matrix.md`. Do not add personal project names.

### Validation tests

Add tests whenever behavior changes: routing, lifecycle, category coverage, source verification, uncertainty, or installer behavior.

## Files by change type

| Change type | Primary files | Secondary files | Needs authorization? | Needs backup? |
|---|---|---|---|---|
| New category | `category-registry.md`, `categories/`, `routing-matrix.md` | `flow-registry.md`, `specialist-registry.md`, `validation/` | no to plan; yes to write if outside workspace | yes |
| New external skill | `skill-registry.md`, `expanded-skill-curation.md` | `routing-matrix.md`, `lifecycle-tests.md` | yes before install | yes |
| New MCP | MCP guide, source trust, skill registry | config docs | explicit yes | yes |
| New reference | `reference-registry.md`, `references/` | source trust, mapping | no if documentation only | yes |
| Skill sync | installed destination | backup, validate | yes if overwrite | yes |
| `SKILL.md` change | `SKILL.md` | validation, report | yes if trigger/entry changes | yes |

## Required reports

- `UPDATE-SYNC-REPORT.md`: normal update/sync operation.
- `SKILL-AUDIT-REPORT.md`: external skill audit.
- `MCP-RISK-REVIEW.md`: MCP/plugin/config review.
- `SYNC-REPORT.md`: local/installed copy operation.
- `REFERENCE-UPDATE-REPORT.md`: substantial reference update.
- `CATEGORY-UPDATE-REPORT.md`: new or changed category.

## Do not do

- Do not install external skill without audit.
- Do not install MCP without explicit authorization.
- Do not alter `config.toml` without explicit authorization.
- Do not overwrite installed skill without backup.
- Do not update `SKILL.md` if the change fits registry/reference/flow.
- Do not copy giant legacy files into the runtime.
- Do not create category for a one-off project.
- Do not treat category as installable.
- Do not execute Phase 8 by accident.

## Validation checklist

1. Source inspected.
2. Backup created before overwrite.
3. Minimal patch applied.
4. Registries updated when routing/capability changed.
5. References updated only when reusable.
6. Tests updated when behavior changed.
7. No machine-specific absolute paths added.
8. No config or MCP activation without explicit authorization.
9. Report generated.
