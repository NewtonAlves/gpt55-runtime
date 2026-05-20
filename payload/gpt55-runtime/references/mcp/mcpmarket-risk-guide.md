# MCPMarket Risk Guide

## Objetivo

Registrar criterios de selecao, uso e risco de skills/MCPs a partir de `MCPMARKET-CURADORIA-2026.md`, preservando a regra central: MCPs recomendados nao sao ativados automaticamente.

## Quando usar

- Quando o usuario pedir instalar, ativar, avaliar ou pesquisar MCP, plugin ou skill externa.
- Quando `categories/ai-agents.md`, `flows/ai-agent-flow.md` ou `flows/skill-update-flow.md` forem selecionados.
- Antes de qualquer edicao em `config.toml`.

## Quando nao usar

- Para tarefas normais que ja podem ser resolvidas com skills locais.
- Para ativar MCPs em massa.
- Para ignorar credenciais, app local, servidor rodando, permissao ou projeto alvo.

## Indice curto

1. Criterio de selecao
2. Skills instaladas por area
3. MCPs recomendados
4. Quando usar
5. Quando nao usar
6. Riscos
7. Pre-requisitos
8. Credenciais
9. `config.toml`
10. Checklist antes de instalar/ativar
11. Relacao com source trust

## Ligacao com runtime

- Categories: `ai-agents`, `backend`, `devops`, `business`, `security`.
- Flows: `ai-agent-flow`, `skill-update-flow`, `research-discovery-flow`.
- Specialists: `mcp`, `skill-scout`, `evidence-reviewer`.
- Registries: `source-trust-registry.md`, `research-source-registry.md`, `reference-registry.md`, `routing-matrix.md`.

## Criterio de selecao

- Instalar automaticamente apenas Agent Skills com fonte clara e uso geral.
- Classificar MCP servers e plugins como recomendados quando exigem token, app local, conta externa, servidor rodando ou risco operacional.
- Preferir uso como instrucao especializada antes de permitir automacao sensivel.
- Revisar riscos de scanner e reputacao da fonte antes de uso.

## Skills instaladas por area

### Engenharia, qualidade e entrega

- Skills: `coding-standards`, `backend-patterns`, `frontend-patterns`, `api-design`, `tdd-workflow`, `verification-loop`, `e2e-testing`, `ai-regression-testing`, `browser-qa`, `security-review`, `safety-guard`, `quality-auditor`, `search-first`, `codebase-onboarding`.
- Uso: desenvolvimento profissional, review, debug, QA visual, pre-PR, refatoracao e verificacao antes de concluir.
- Risco: algumas skills tiveram alertas; usar como guia e validar antes de automacao destrutiva.

### Backend, dados, deploy e MCP

- Skills: `python-patterns`, `python-testing`, `docker-patterns`, `database-migrations`, `deployment-patterns`, `mcp-server-patterns`.
- Uso: APIs, servicos, Docker, migracoes seguras, deploy e criacao de servidores MCP.

### Mobile, Android e Flutter

- Skills: `android-clean-architecture`, `kotlin-coroutines-flows`, `compose-multiplatform-patterns`, `kotlin-patterns`, `dart-flutter-patterns`, `flutter-dart-code-review`, `mobile-developer`.
- Uso: Android/Kotlin/Compose, KMP, Flutter/Dart e revisao mobile.

### Produto, design, conteudo e comercial

- Skills: `product-lens`, `product-analyst`, `product-analytics`, `copywriter`, `brand-designer`, `animation-designer`, `data-visualizer`, `customer-support-builder`.
- Uso: decidir o que construir, validar proposta, UX/landing/copy, marca, dashboards, animacao e suporte.

### Design ja instalado

- Pacotes: `typeui-*`, `asset-manager`, `design-system-architect`, `visual-designer`, `design-system-creator`, `typography-expert`, `web-design-expert`, `ui-ux-pro-max`.
- Uso: elevar visual, sistema visual, assets, tipografia e UI profissional.

## MCPs recomendados

### Desenvolvimento

- Context7: docs atuais de bibliotecas, SDKs, APIs e frameworks.
- GitHub: PRs, issues, reviews e CI.
- Playwright/Browser/Chrome DevTools: QA web, screenshots, console e E2E.
- Filesystem: leitura/escrita local quando o cliente MCP exigir.

### Design/frontend

- Figma Context/Figma MCP: frames e tokens.
- Penpot: design/prototipagem open-source.
- Excalidraw/Draw.io: diagramas.
- Better Icons: icones SVG.
- Designlang: extrair design system de sites.

### Mobile/Android

- android-adb: screenshots, install APK, logs, permissoes e UI inspection.
- Dart/Flutter MCP: hot reload, device tools, introspeccao Flutter.
- Firebase MCP: Auth, Firestore, Crashlytics e backend mobile.

### Backend/dados/cloud

- PostgreSQL, Supabase, MongoDB: banco e schema.
- Vercel, Cloudflare, Render: deploy, logs e env vars.
- n8n: automacao de workflows.

### Games/3D

- Blender MCP: assets e modelagem 3D.
- Godot MCP: execucao, debug e automacao do editor.
- Unity MCP: automacao do Unity Editor.
- Unreal MCP: automacao por Remote Control/API.

## Quando usar

- Projeto alvo existe.
- A capacidade local atual e insuficiente.
- A ferramenta externa reduz risco ou aumenta verificabilidade.
- Credenciais/permissoes estao claras.
- O usuario autorizou instalacao/ativacao quando necessario.

## Quando nao usar

- Curiosidade sem caso de uso.
- Substituir leitura de codigo local por ferramenta externa sem necessidade.
- Ativar servidor com credenciais nao verificadas.
- Editar `config.toml` sem autorizacao explicita.
- Instalar em massa para "deixar pronto".

## Riscos

- Alertas observados: `verification-loop` Snyk High Risk; `animation-designer` Gen High Risk; `deployment-patterns` Socket 1 alert; `android-clean-architecture`, `browser-qa`, `search-first`, `security-review`, `mobile-developer` Snyk Medium Risk.
- Risco operacional: MCP pode executar comandos, modificar projeto, acessar credenciais, depender de app local ou conta externa.
- Tratamento: usar como instrucao quando possivel; validar antes de automatizar; pedir autorizacao para configuracao sensivel.

## Pre-requisitos

- Projeto alvo e escopo.
- App local instalado quando necessario.
- Comando de inicializacao conhecido.
- Ambiente/porta/servidor validado.
- Plano de rollback ou backup.
- Permissoes e credenciais separadas.

## Credenciais

- Nunca colocar segredo em prompt, docs ou registry.
- Confirmar onde o MCP espera token/env var.
- Preferir variaveis de ambiente ou storage seguro.
- Registrar apenas nomes de variaveis, nao valores.

## `config.toml`

- Nao alterar sem autorizacao explicita.
- Nao adicionar MCP recomendado apenas por estar na lista.
- Antes de editar: validar comando, argumentos, diretoria, env vars, seguranca, impacto e rollback.
- Depois de editar: testar inicializacao e registrar validacao.

## Checklist antes de instalar/ativar MCP

1. Caso de uso real.
2. Fonte/reputacao verificada.
3. Risco conhecido.
4. Credenciais necessarias identificadas.
5. App/servidor local validado.
6. Projeto alvo definido.
7. Backup/rollback quando houver escrita.
8. Autorizacao explicita para instalar/alterar config.
9. Teste minimo apos ativacao.

## Relacao com source-trust-registry.md

- Use `source-trust-registry.md` para classificar fonte primaria, reputacao, atualidade e risco.
- Use `research-source-registry.md` para registrar se a informacao veio de marketplace, docs oficiais, scanner ou experiencia local.
- Se fonte for marketplace/comunidade, trate como indicio, nao como garantia.

## Anti-patterns

- Editar `config.toml` para varios MCPs de uma vez.
- Guardar token em arquivo de referencia.
- Confiar em scanner sem ler impacto operacional.
- Usar MCP de escrita sem backup.
- Ativar ferramenta externa quando skill local bastava.

## Origem do conteudo

- Fonte principal: `MCPMARKET-CURADORIA-2026.md`.
- Transformacao: criterios, skills, MCPs recomendados e riscos foram convertidos em guia de decisao e seguranca.
