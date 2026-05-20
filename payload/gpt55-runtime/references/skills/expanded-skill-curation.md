# Expanded Skill Curation

## Objetivo

Consolidar `SKILLS-CURADORIA-2026.md` e `SKILLS-CHEATSHEET-2026.md` em um inventario resumido, acionavel e consultavel sob demanda, sem copiar a curadoria gigante para o `SKILL.md`.

## Quando usar

- Quando o runtime precisa escolher combinacao de skills por tipo de projeto.
- Quando `routing-matrix.md`, `specialist-registry.md` ou `flow-registry.md` apontarem para uma familia de skills, mas faltarem detalhes.
- Quando o usuario pedir atualizacao, auditoria ou ampliacao da skill.

## Quando nao usar

- Quando uma unica skill claramente resolve.
- Quando a tarefa depende de docs atuais de biblioteca; nesse caso use Context7/docs oficiais.
- Para instalar skill/MCP sem autorizacao.

## Indice curto

1. Categorias
2. Skills essenciais
3. Specialists
4. Quando usar/nao usar
5. Riscos
6. Relacao com routing/flows/specialists
7. Top combinacoes por projeto

## Ligacao com runtime

- Categories: todas; especialmente `frontend`, `backend`, `design`, `android`, `ai-agents`, `security`, `writing`, `gamedev`.
- Flows: `skill-update-flow`, `design-system-flow`, `backend-api-flow`, `android-flow`, `ai-agent-flow`, `gamedev-flow`, `study-flow`.
- Specialists: `skill-scout`, `react`, `nextjs`, `prisma`, `supabase`, `openai`, `mcp`, `compose`.
- Registries: `skill-registry.md`, `routing-matrix.md`, `specialist-registry.md`, `flow-registry.md`.

## Categorias e inventario resumido

### Documentacao, descoberta e planejamento

- Essenciais: `$gpt55-runtime`, `find-docs`, `context7-mcp`, `docs-seeker`, `openai-docs`, `find-skills`, `create-plan`, `GSD/get-shit-done`, `context-driven-development`, `spec-workflow`, `optimize-agents-md`, `remember`, `skill-creator`, `skill-installer`, `plugin-creator`.
- Use quando: docs atuais, projeto longo, planejamento, contexto persistente, criacao/atualizacao de skills.
- Nao use quando: mudanca pequena e local ja esta clara.

### Review, debugging e GitHub

- Essenciais: `debug`, `code-review`, `code-review-excellence`, `gh-cli`, `gh-fix-ci`, `gh-address-comments`, `issue-triage`, `datadog-logs`, `sentry-triage`, `graphify`.
- Use quando: bug, review, CI, producao, backlog ou mapeamento complexo.
- Nao use quando: nao ha evidencia, repo ou alvo para inspecionar.

### Frontend, design e UX

- Essenciais: `frontend-design`, `open-design`, `artifacts-builder`, `web-artifacts-builder`, `design-brief`, `design-review`, `creative-director`, `ui-ux-pro-max`, `typeui-*`, `color-expert`, `stitch*`, `design-system-patterns`, `design-system-architect`, `design-system-creator`, `visual-designer`, `typography-expert`, `web-design-expert`, `building-components`, `interaction-design`, `responsive-design`, `accessibility-compliance`, `diagram-design`.
- Use quando: visual forte, design system, componentes, artefatos, diagramas, acessibilidade.
- Nao use quando: problema e puramente backend ou CLI.

### React, Next.js e UI testing

- Essenciais: `frontend-developer`, `react-frontend-expert`, `fullstack-developer`, `next-best-practices`, `next-upgrade`, `vercel-react-best-practices`, `vercel-composition-patterns`, `playwright`, `webapp-testing`, `web-perf`.
- Use quando: app React/Next, componente, App Router, performance, browser QA.
- Nao use quando: stack nao e web/React ou pergunta e de produto sem implementacao.

### Backend, APIs, banco e migracoes

- Essenciais: `backend-dev-guidelines`, `api-design-principles`, `prisma-cli`, `prisma-postgres`, `supabase-postgres-best-practices`, `database-migrations`, `docker-patterns`.
- Use quando: services, controllers, API, schema, migracao, performance SQL.
- Nao use quando: tarefa e visual sem contrato de dados.

### Auth e identidade

- Essenciais: `clerk`, `clerk-setup`, `clerk-nextjs-patterns`, `clerk-orgs`, `clerk-webhooks`, `auth0-nextjs`, `auth0-migration`, `create-auth-skill`, `firebase-auth-basics`.
- Use quando: login, sessao, orgs, RBAC, webhooks, provider migration.
- Nao use quando: auth nao esta no escopo.

### Cloud, deploy e operacao

- Essenciais: `cloudflare`, `wrangler`, `workflow`, `render-deploy`, `deploy-pipeline`, `firebase-basics`, `deployment-patterns`.
- Use quando: deploy, env vars, plataforma, release, logs.
- Nao use quando: nao ha ambiente/projeto alvo.

### AI, MCP, agentes e ML

- Essenciais: `openai-docs`, `ai-sdk`, `agents-sdk`, `mcp-builder`, `transformers-js`, `hf-cli`, `huggingface-community-evals`, `huggingface-trackio`, `firebase-ai-logic`.
- Use quando: LLM app, tool calling, MCP server, RAG, evals, HF, agentes.
- Nao use quando: pedido pode ser resolvido sem dependencia externa.

### Seguranca

- Essenciais: `owasp-security-check`, `security-threat-model`, `security-review`, `safety-guard`.
- Use antes de producao, auth, dados sensiveis, integracao externa.
- Nao use como substituto de auditoria profissional formal.

### Android, mobile e Flutter

- Essenciais: `mobile-android-design`, `android-native-dev`, `android-development`, `android-clean-architecture`, `kotlin-coroutines-flows`, `compose-multiplatform-patterns`, `kotlin-patterns`, `dart-flutter-patterns`, `flutter-dart-code-review`, `mobile-developer`.
- Use quando: Compose, Material 3, KMP, Flutter/Dart, revisao mobile.
- Nao use para website responsivo comum.

### Autor, livros e PT-BR

- Essenciais: `autor-livros-ptbr`, `revisor-portugues-br`, `formatacao-livro-br`, `story-sense`, `chapter-drafter`, `novel-revision`, `prose-style`, `book-marketing`.
- Use quando: livro, narrativa, capitulo, revisao PT-BR, formatacao ou pitch editorial.
- Nao use para texto tecnico de alto risco sem verificacao factual.

### Documentos e escritorio

- Essenciais: `doc`, `pdf`, `spreadsheet`, `Excel`, `PowerPoint`, `documents:documents`.
- Use quando: DOCX, PDF, planilhas, slides e artefatos editaveis.

### Browser e visual complementar

- Essenciais: `playwright`, `webapp-testing`, `full-page-screenshot`, `screenshots-marketing`, `imagegen`, `hand-drawn-diagrams`, `d3-visualization`.
- Use quando: validacao visual, screenshots, assets, diagramas ou data viz.

## Riscos

- Skills que mexem com deploy, auth, browser, arquivos, MCPs ou producao exigem validacao proporcional.
- Alertas do acervo: `verification-loop` High Risk; `animation-designer` Gen High Risk; `deployment-patterns` alerta Socket; algumas mobile/security/browser skills com Medium Risk.
- Tratar skill externa como instrucao, nao como autoridade absoluta.
- Nao instalar, baixar ou ativar sem permissao.

## Relacao com registries

- `routing-matrix.md`: decide familia de skill por pedido.
- `flow-registry.md`: define sequencia operacional.
- `specialist-registry.md`: aponta especialista interno quando a decisao precisa profundidade.
- `skill-registry.md`: registra capacidade local e familia.
- Esta referencia entra quando o registro curto nao basta.

## Top combinacoes por tipo de projeto

- Website bonito: `frontend-design` + `taste-design` + `design-system-patterns` + `building-components` + `interaction-design` + `responsive-design` + `playwright` + `web-perf`.
- Open Design/artifact-first: `open-design` + `design-brief` + `artifacts-builder`/`web-artifacts-builder` + `creative-director`/`ui-ux-pro-max` + `design-review`.
- Sistema web serio: `create-plan` + GSD se longo + `fullstack-developer` + `next-best-practices` + `backend-dev-guidelines` + `api-design-principles` + `prisma-cli` + `code-review-excellence`.
- Next.js + React: `find-docs` + `next-best-practices` + `vercel-react-best-practices` + `vercel-composition-patterns` + `playwright`.
- Design system: `design-md` + `design-system-patterns` + `design-system-architect` + `design-system-creator` + `web-component-design` + `typography-expert` + `asset-manager` + `building-components` + `web-design-guidelines`.
- Diagrama tecnico/editorial: `diagram-design` + referencia de tipo especifica + `frontend-design` quando entrar em produto + `accessibility-compliance` se for producao.
- Android nativo: `mobile-android-design` + `android-native-dev` + `android-development` + `accessibility-compliance`.
- Backend/API: `backend-dev-guidelines` + `api-design-principles` + `prisma-cli` + `supabase-postgres-best-practices` + `owasp-security-check`.
- Auth moderna: Clerk (`clerk`, `clerk-setup`, `clerk-nextjs-patterns`, `clerk-orgs`) ou Auth0 (`auth0-nextjs`, `auth0-migration`) ou Better Auth (`create-auth-skill`) + `owasp-security-check`.
- AI/MCP/agente: `openai-docs` + `ai-sdk` + `mcp-builder` + `agents-sdk`/`workflow` + `code-review-excellence`.
- CI/bugs/producao: `gh-fix-ci` + `debug` + `datadog-logs`/`sentry-triage` + `code-review`.
- Contexto e verificacao: `context-driven-development` + `spec-workflow` + `create-plan` + `optimize-agents-md` + `remember` + `code-review-excellence`.
- Livro PT-BR: `autor-livros-ptbr` + `story-sense` + `chapter-drafter` + `revisor-portugues-br` + `formatacao-livro-br` + `book-marketing`.
- GameDev: `game-development` + `game-studio:game-studio` + `game-studio:game-playtest` + `player-onboarding` + `quality-auditor`.

## Checklist de uso

1. Classifique o pedido em categoria.
2. Consulte `routing-matrix.md` para rota base.
3. Escolha a menor combinacao de skills.
4. Use docs atuais quando a stack/API puder ter mudado.
5. Use specialist interno quando houver risco ou decisao tecnica.
6. Valide antes de concluir.

## Anti-patterns

- Acionar muitas skills por ansiedade.
- Usar curadoria como lista de instalacao.
- Pular docs atuais em APIs/frameworks.
- Usar design skill para resolver arquitetura tecnica.
- Usar skill de baixo nivel antes de definir objetivo do produto.

## Origem do conteudo

- Fontes principais: `SKILLS-CURADORIA-2026.md` e `SKILLS-CHEATSHEET-2026.md`.
- Transformacao: inventario e combinacoes foram condensados em guia expandido, mantendo categorias, usos, riscos e relacoes com registries.

## Installed Skills Inventory Alignment

Source audit: `PHASE-2-8-INSTALLED-SKILLS-AUDIT.md`.

The audit found 219 installed skill folders in `.agents/skills`, all with `SKILL.md`. It detected scripts in 20 folders, references in 42, assets in 5, and `agents/openai.yaml` in 5. The runtime should use this as classified capability knowledge, not as permission to execute every skill.

### Family summary

| Family | Runtime treatment | Notes |
|---|---|---|
| frontend-design | strong family; keep broad route support | Includes design, UI, TypeUI, visual, component and asset skills. Use through design/frontend routes, not by loading every style skill. |
| frontend-framework | specialist family | Use stack-specific docs and existing project conventions before applying. |
| backend-api | specialist family | Use with API contracts, tests and source docs. |
| database-orm | specialist/high-risk family | Prisma, migrations, Supabase and DB work require backup/validation before writes. |
| security-review | high-risk specialist family | Auth/security skills require explicit scope and validation. |
| android-mobile | specialist family | Route through Android flow; validate with build/device/emulator when possible. |
| ai-agents | specialist/high-risk family | MCP, agents, credentials and external APIs require audit and authorization. |
| writing-editing | specialist family | Route book/PT-BR work through writing guide and preserve author voice. |
| gamedev | specialist/optional family | Prefer installed game skills before MCP; playtest before conclusion. |
| research-discovery | essential support family | Use docs/source skills when facts, APIs or external claims may be stale. |
| pdf-docx-slides-spreadsheets | optional specialist family | Use for office artifacts; backup before destructive edits. |
| finance-business | specialist/high-evidence family | Do not claim market or financial facts without current evidence. |
| unknown | manual review | Do not promote vague skills to essential. |

### Essential skills confirmed by audit

| Skill | Use when | Risk | Notes |
|---|---|---|---|
| `find-docs` / `context7-mcp` | Current docs are required | MEDIUM/HIGH by external lookup | Follow official-doc/source rules. |
| `create-plan` | Task needs planning | LOW/MEDIUM | Do not overuse for trivial work. |
| `context-driven-development` | Context should become artifact | LOW | Useful for long projects. |
| `spec-workflow` | Medium/large implementation needs requirements and technical design | LOW/MEDIUM | Use before broad code changes. |
| `optimize-agents-md` | AGENTS/rules are bloated | LOW | Preserve useful rules. |
| `remember` | Decision must survive sessions | LOW/MEDIUM | Do not store secrets. |
| `debug` / `code-review-excellence` | Bug/review needs evidence | LOW/MEDIUM | Findings and evidence first. |
| `frontend-design` / `design-system-patterns` | UI quality and system consistency matter | LOW | Combine with browser validation. |
| `openai-docs` | OpenAI product/API behavior matters | MEDIUM | Prefer official OpenAI docs. |

### Optional / experimental handling

| Group | Treatment |
|---|---|
| Many TypeUI/style skills | Keep optional; use after visual direction is clear. |
| Auth/provider-specific skills | Specialist/experimental until project provider is confirmed. |
| Deploy/cloud skills | Specialist/high-risk; never deploy or change env without authorization. |
| Browser automation skills | Specialist/high-risk when they can interact with live apps or authenticated sessions. |
| MCP-builder/MCP-related skills | High-risk/manual review before config or tool activation. |
| Skills with scripts | Manual review before executing scripts; audit report lists them. |

### Rejected / ignored

No installed folder was rejected solely during this audit because all 219 folders have `SKILL.md`. Vague or risky skills remain `unknown`, `experimental`, or `manual-review` rather than promoted.

### Use rule

Use `skill-registry.md` for compact routing decisions. Load this reference only when the runtime needs family-level skill choices or installed skill audit context.
