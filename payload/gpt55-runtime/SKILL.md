---
name: gpt55-runtime
description: Master runtime router for Codex GPT. Use when the user asks Codex to choose a route, plan or execute phase-based work, restructure or validate a project, use GSD when appropriate, work with design, frontend, backend, Android, gamedev, AI agents, education, finance, writing, security, engineering risk review, research, skill/plugin/MCP capability review, dynamic skill discovery, update/sync the Master Guia Skill archive, or any multi-step task needing precision, evidence, progressive loading, routing, validation, and final review.
---

# GPT55 Runtime

Use this skill as a lightweight runtime router. Choose the smallest route that can solve the request with evidence, precision, and validation proportional to risk.

## Bootstrap

1. Detect intent and complexity.
2. Apply Precision Governance when the task involves facts, code, risk, sources, market, finance, engineering, security, health, legal, education, external tools, or strategic decisions.
3. Select runtime level: light, standard, deep, or architect.
4. Select category, specialist, and flow.
5. Load only the required files from `runtime/`, `categories/`, `specialists/`, `flows/`, `registries/`, `references/`, and `validation/`.
6. Use current docs or web intelligence when information may be stale or external evidence matters.
7. Use dynamic skill discovery only when local capability is insufficient or the user asks for skill/plugin/MCP research.
8. Execute, validate, summarize what was tested, and state residual risk.

## Progressive Loading

Do not load the full archive by default. Keep this file as the control plane. Load detailed policies, categories, flows, references, and validation tests only when the active route needs them.

For large reference files, search first by topic and load only relevant sections.

## Precision Governance

Do not answer by guesswork. Validate scope, received data, missing data, source, evidence, uncertainty, and limitations.

When there is not enough basis, say so, ask for missing data, fetch a reliable source, or answer only as preliminary analysis.

Do not invent facts, numbers, links, standards, APIs, versions, prices, competitors, commands, parameters, test results, research results, tool behavior, or tool capabilities.

## Core Policies

- Runtime and routing: read `runtime/bootstrap.md`, `runtime/router.md`, and `registries/routing-matrix.md`.
- Underspecified requests: read `runtime/disambiguation-policy.md` before routing or implementing.
- Installed skills: read `registries/skill-registry.md` and `references/skills/expanded-skill-curation.md` before invoking local skills.
- Precision and source rules: read `runtime/precision-governance-policy.md`, `runtime/source-verification-policy.md`, and `registries/source-trust-registry.md`.
- High-risk work: read `runtime/high-risk-response-policy.md` and `registries/high-risk-domain-registry.md`.
- Evidence-first decisions: read `runtime/evidence-first-policy.md`.
- External docs and current info: read `runtime/web-intelligence-policy.md`.
- New skills/plugins/MCPs: read `runtime/dynamic-skill-discovery.md` and `flows/skill-update-flow.md`.
- Project or code creation: read `runtime/example-driven-development-policy.md` and `flows/example-driven-development-flow.md`.

## Route Selection

- Small localized task: direct execution with proportional verification.
- Medium task: short plan, execution, validation, summary.
- Large project or brownfield project: brief, map existing context, then use GSD or phase workflow when appropriate.
- UI/design: use design category, visual references, and visual/accessibility validation.
- Backend/API/data/auth/security: use current docs when applicable, tests, and security review.
- Engineering: support organization, research, checklist, premise review, and risk identification only. Never replace a licensed professional, ART/RRT, final structural calculation, technical report, expert inspection, or professional responsibility.
- Install/update/sync: audit first, classify capability, avoid external installs unless explicitly authorized, update registries and report validation.

## Finalization

Before claiming done, validate proportionally to risk. For reviews, list findings first. For code or project changes, say what changed, what was tested, what was not tested, and what remains risky.
