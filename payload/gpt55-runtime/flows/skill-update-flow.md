# Skill Update Flow

Operational flow for updating, installing, syncing, rereading, registering, or auditing runtime capabilities.

1. Identify target type: skill, plugin, MCP, connector, CLI, reference, category, registry, or sync.
2. Inspect current state before changing anything.
3. Audit external source when target is external.
4. Require explicit authorization before install, config change, MCP activation, destructive sync, or overwrite.
5. Create backup before writing.
6. Classify target: essential, specialist, optional, experimental, rejected, or reference-only.
7. Update modular files: registries, references, validation, updates.
8. Change `SKILL.md` only if trigger, description, or entry behavior changes.
9. Validate routing and lifecycle tests.
10. Generate `UPDATE-SYNC-REPORT.md`.

Output: target, classification, risk, authorization status, backups, files changed, validation, residual risk.
