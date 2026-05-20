# Context Efficiency Guide

## Objetivo

Preservar as regras praticas de eficiencia, memoria e profissionalismo de `CODEX-EFICIENCIA-MEMORIA-E-PROFISSIONALISMO-2026.md` como referencia sob demanda para o runtime.

## Quando usar

- Quando a tarefa envolver `AGENTS.md`, regras longas, memoria, contexto persistente, output control, workflow por fases ou disciplina de especificacao.
- Quando o runtime detectar desperdicio de contexto, instrucoes contraditorias ou projeto longo.
- Quando `runtime/context-budget.md`, `runtime/memory-policy.md` ou `runtime/governance.md` forem insuficientes.

## Quando nao usar

- Tarefa simples, local e ja clara.
- Quando a prioridade e implementacao imediata pequena.
- Para transformar toda conversa em processo pesado.

## Indice curto

1. Instrucoes primeiro
2. Contexto separado
3. Contexto como artefato
4. Memoria persistente
5. `AGENTS.md`
6. Spec workflow
7. GSD
8. `remember`
9. `optimize-agents-md`
10. Output control
11. Paths/snippets/diffs
12. Escolha de esforco/modelo
13. Anti-patterns
14. Rotina diaria

## Ligacao com runtime

- Categories: `research-discovery`, `engineering`, `frontend`, `backend`.
- Flows: `skill-update-flow`, `research-discovery-flow`, `multi-agent-review-flow`.
- Specialists: `skill-scout`, `critic-reviewer`, `evidence-reviewer`.
- Registries: `reference-registry.md`, `skill-registry.md`, `routing-matrix.md`.

## Principio central

Mais contexto nao significa melhor contexto. A melhora vem de combinar roteamento, contexto estruturado, memoria persistente, instrucoes curtas, fluxos disciplinados, execucao por fases e escolha correta de skill.

## Metodos

### Instrucoes primeiro

- Coloque instrucao principal no inicio.
- Diga objetivo, formato e limite de saida.
- Use delimitadores/secoes claras para contexto.
- Resultado esperado: menos ambiguidade e melhor aderencia ao pedido.

### Contexto separado

- Separe pedido, contexto, restricoes, arquivos, criterios de aceite e formato.
- Evite contexto solto misturado com comandos.
- Use quando o pedido tem varios arquivos, decisoes ou historico.

### Contexto como artefato

- Tire da conversa aquilo que e duravel.
- Crie ou consulte arquivos como `product.md`, `tech-stack.md`, `workflow.md`, `tracks.md`.
- Skill indicada: `context-driven-development`.
- Use quando o projeto precisa sobreviver a varias sessoes.

### Memoria persistente

- Registrar decisoes, padroes, preferencias e anti-padroes evita redescobrir.
- Skill indicada: `remember`.
- Use para decisao importante que nao pode se perder.

### `AGENTS.md`

- Comprimir regras longas, remover redundancia e transformar paragrafos em padroes verificaveis.
- Skill indicada: `optimize-agents-md`.
- Checklist: regra e acionavel; nao contradiz; tem prioridade; nao repete sistema; nao e contexto obsoleto.

### Spec workflow

- Para tarefas medias/grandes: requirements, desenho tecnico, task planning, implementacao.
- Skill indicada: `spec-workflow`.
- Use em redesigns, integracoes, refatoracoes amplas e features cross-module.
- Beneficio: reduz improviso, retrabalho e ambiguidade.

### GSD

- Use quando houver mapa de codebase, requisitos, roadmap, discussao de fase, plano, execucao, verificacao e ship.
- O arquivo original registra GSD instalado no ambiente local em 2026-05-11, mas esta referencia nao depende de caminho absoluto.
- Regra: use completo para projeto longo; use minimal/core-only em outro ambiente quando a meta for economizar tokens.

### `remember`

- Use para decisao, padrao ou anti-pattern recorrente.
- Nao use para segredo, dado sensivel ou contexto que deve ficar no repo.
- Resultado: memoria institucional e consistencia entre sessoes.

### `optimize-agents-md`

- Use quando regras estao caras, repetitivas ou vagas.
- Deve remover redundancia, reduzir tokens e tornar instrucoes verificaveis.
- Nao deve apagar regra util sem preservar intencao.

### Output control

- Peça saida curta quando o problema pede saida curta.
- Use tabela, checklist, diff, bullets ou JSON quando isso melhora consumo.
- Limite verbosidade e escopo.
- Resultado: menos ruido e melhor integracao com workflow.

### Paths/snippets/diffs

- Prefira caminhos de arquivo, trechos relevantes e diffs a dumps enormes.
- Nao cole repositorio inteiro.
- Use resumo tecnico quando o objetivo e decisao, nao copia.

### Escolha de esforco/modelo

- Problema simples: menor esforco.
- Investigacao, arquitetura e long-horizon: mais esforco.
- Nao gastar raciocinio maximo em tarefa trivial.

## Skills centrais desta trilha

- `$gpt55-runtime`
- `create-plan`
- `find-docs`
- `context7-mcp`
- `openai-docs`
- `code-review-excellence`
- `debug`
- `context-driven-development`
- `spec-workflow`
- `optimize-agents-md`
- `remember`

## Sequencia recomendada

1. Revisar `AGENTS.md` e regras com `optimize-agents-md`.
2. Extrair contexto duravel com `context-driven-development`.
3. Passar mudancas medias/grandes por `spec-workflow`.
4. Registrar decisoes recorrentes com `remember`.
5. Usar `create-plan` e `code-review-excellence` como disciplina constante.

## Anti-patterns

- `AGENTS.md` enorme e repetitivo.
- Instrucoes vagas como "seja inteligente".
- Contexto espalhado so em conversa.
- Sem memoria de decisoes.
- Output longo demais para tarefa simples.
- Tarefa grande sem spec e sem plano.
- Regras que dizem o que nao fazer, mas nao dizem o que fazer.

## Rotina diaria de eficiencia

- Se uma regra crescer demais, comprima.
- Se uma decisao se repetir, registre.
- Se um projeto ficar maior, extraia contexto para artefato.
- Se a tarefa for media ou grande, especifique antes.
- Se a resposta puder ser menor, peca menor.
- Se depender de API externa atual, consulte docs atuais.
- Se for concluir trabalho, valide proporcionalmente ao risco.

## Origem do conteudo

- Fonte principal: `CODEX-EFICIENCIA-MEMORIA-E-PROFISSIONALISMO-2026.md`.
- Transformacao: metodos, skills, sequencia, anti-patterns e rotina diaria foram compactados em referencia operacional.
