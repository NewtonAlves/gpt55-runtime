# Design Prompt Library

## Objetivo

Transformar `PROMPTS-DE-DESIGN-PROFISSIONAL-2026.md` em uma biblioteca consultavel sob demanda para orientar criacao, refatoracao e diagnostico visual sem despejar prompts longos no `SKILL.md`.

## Quando usar

- Antes de criar ou refatorar landing, dashboard, sistema B2B, design system, Android Compose, diagrama ou artefato Open Design.
- Quando o pedido visual estiver vago e precisar virar briefing acionavel.
- Quando `flows/design-system-flow.md`, `flows/saas-flow.md`, `flows/android-flow.md` ou `flows/example-driven-development-flow.md` forem selecionados.

## Quando nao usar

- Para resolver problema puramente tecnico sem impacto visual.
- Para substituir inspeção real de uma UI existente.
- Para copiar prompts literalmente quando o contexto pede uma adaptacao curta.
- Para inventar referencias visuais sem base no produto, publico e objetivo.

## Indice curto

1. Campos variaveis
2. Criar interface do zero
3. Refatorar UI existente
4. Landing page premium
5. Dashboard SaaS
6. Sistema web/B2B
7. Design system proprio
8. Android Material 3
9. Diagnosticar UI generica
10. Elevar estetica sem quebrar UX
11. Transformar referencia em direcao de produto
12. Combinar design e implementacao
13. Open Design/artifact-first
14. Diagrama tecnico/editorial
15. Mini prompts rapidos
16. Sequencias recomendadas

## Ligacao com runtime

- Categories: `design`, `frontend`, `android`, `product-saas-ideas`.
- Flows: `design-system-flow`, `saas-flow`, `android-flow`, `research-discovery-flow`, `example-driven-development-flow`.
- Specialists: `react`, `compose`, `product-strategist`, `critic-reviewer`.
- Registries: `reference-registry.md`, `flow-registry.md`, `routing-matrix.md`.

## Campos variaveis obrigatorios

Use estes campos antes de escolher qualquer prompt:

- `[produto]`: o que esta sendo criado.
- `[publico]`: quem usa.
- `[objetivo]`: acao ou resultado principal.
- `[estilo]`: direcao visual desejada.
- `[restricoes]`: stack, marca, acessibilidade, performance, dispositivos.
- `[stack]`: tecnologia alvo.

Perguntas minimas:

1. Qual e o tipo de tela?
2. Quem vai usar?
3. Qual e a acao principal?
4. Qual densidade de informacao e esperada?
5. O que deve ser evitado?

## Biblioteca por tipo

### Criar interface do zero

- Use quando: nao ha UI existente ou a tela pode nascer com direcao propria.
- Nao use quando: existe base funcional que precisa ser preservada; nesse caso use refatoracao.
- Direcao: pedir conceito visual, estrutura, componentes, estados e implementacao.
- Enfatizar: hierarquia em poucos segundos, sistema coerente, spacing/tipografia/cor/estados, mobile e desktop, loading/empty/error.
- Evitar: excesso de cards, gradientes/blur para mascarar falta de criterio, hero generica com grid repetitivo, tudo com mesmo peso.
- Checklist: briefing tem publico/objetivo/estilo; estados foram pedidos; responsividade foi pedida; a entrega inclui implementacao.

### Refatorar UI existente

- Use quando: ha tela/produto existente com problemas de hierarquia, clareza, consistencia, densidade, tipografia, spacing ou estados.
- Nao use quando: a meta e trocar stack ou reconstruir produto sem preservar nada.
- Direcao: diagnosticar o que parece generico, propor direcao visual, reorganizar layout/componentes/hierarquia, refinar estados e implementar mantendo coerencia tecnica.
- Evitar: trocar tudo sem criterio, efeitos vazios, complexidade nova sem clareza, UI bonita pior de usar.
- Checklist: problema atual foi descrito; stack atual conhecida; partes boas preservadas; mudanca tem criterio.

### Landing page premium

- Use quando: primeira impressao, narrativa visual, conversao e marca importam.
- Nao use quando: a tela e operacional/densa e precisa de produtividade, nao marketing.
- Direcao: hero forte, hierarquia tipografica clara, secoes com ritmo variado, CTA principal unico, prova social criteriosa.
- Evitar: blocos repetitivos, cards clonados, decoracao excessiva, cara de template generico.
- Checklist: H1/CTA claros; secoes tem ritmo; visual nao depende de glow/blur gratuito; narrativa conecta promessa e prova.

### Dashboard SaaS

- Use quando: metricas, listas, filtros e acoes precisam formar um painel de decisao.
- Nao use quando: usuario precisa executar fluxo principal que merece tela operacional.
- Direcao: interface clara, densidade adequada, sem widgets em excesso, metricas com contexto, tabela/lista resolvida, filtros visiveis.
- Evitar: muitos cards sem narrativa, widgets decorativos, excesso de caixas, acoes primarias perdidas.
- Checklist: metricas tem periodo/unidade; filtros estao proximos do resultado; tabela/lista tem estados; navegacao clara.

### Sistema web/B2B

- Use quando: o produto e operacional, recorrente, denso e precisa produtividade.
- Nao use quando: a demanda e landing, campanha ou pagina editorial.
- Direcao: linguagem enterprise moderna, navegacao clara, boa densidade, formularios e tabelas legiveis, acoes importantes bem posicionadas.
- Evitar: marketing UI aplicada a sistema operacional, excesso de cards, espacamento que desperdiça area.
- Checklist: fluxo diario esta claro; densidade adequada; acoes primarias acessiveis; informacao operacional nao fica escondida.

### Design system proprio

- Use quando: o produto precisa de tokens, componentes reutilizaveis, estados e governanca visual.
- Nao use quando: uma tela isolada basta ou a base ja tem design system maduro.
- Direcao: principios, tokens, primitives, componentes base, regras de composicao e orientacoes de uso.
- Evitar: colecao de componentes soltos, tokens sem semantica, variantes demais, acessibilidade tardia.
- Checklist: tokens tem nome semantico; estados definidos; componentes base cobrem formularios/navegacao/feedback; documentacao curta.

### Android Material 3

- Use quando: tela Android nativa, Jetpack Compose, Material 3, mobile/tablet/foldable.
- Nao use quando: a solucao e website responsivo ou app que nao segue semantica Android.
- Direcao: linguagem nativa moderna, hierarquia, adaptacao, componentes Material 3, acessibilidade, touch targets, feedback.
- Evitar: parecer website encolhido, cards para tudo, padroes web forçados.
- Checklist: componente Compose correto; Material 3 respeitado; touch target; telas grandes; preview/estado.

### Diagnosticar UI generica

- Use quando: a interface "funciona", mas parece fraca, generica ou com cara de IA.
- Nao use quando: a tela ainda nao existe; use criacao do zero.
- Direcao: avaliar hierarquia, tipografia, composicao, densidade, componentes, cor, estados e consistencia.
- Saida esperada: diagnostico objetivo + direcao concreta para elevar qualidade sem enfeite gratuito.
- Checklist: apontar causa, nao apenas opiniao; priorizar 3-5 correcoes de maior impacto.

### Elevar estetica sem quebrar UX

- Use quando: a UI precisa ficar mais premium sem perder clareza, acessibilidade ou velocidade.
- Nao use quando: problema real e fluxo errado ou informacao ausente.
- Direcao: contraste, ritmo visual, hierarquia, refinamento de componentes, estados, microinteracoes e consistencia.
- Preservar: clareza, acessibilidade, velocidade de uso, semantica do fluxo.
- Checklist: nenhuma melhoria visual reduz produtividade; estados continuam claros; densidade continua adequada.

### Transformar referencia em direcao de produto

- Use quando: existem referencias visuais ou produtos comparaveis.
- Nao use quando: nao ha referencias ou o usuario quer copia literal.
- Direcao: extrair principios de composicao, hierarquia, linguagem de componentes, densidade, spacing, cor e tipografia.
- Regra: nao copiar visualmente; traduzir para direcao propria do produto, publico e stack.
- Checklist: referencias nomeadas; principios extraidos; adaptacao ao publico; risco de copia visual evitado.

### Combinar design + implementacao

- Use quando: a entrega precisa ser forte visualmente e limpa tecnicamente.
- Nao use quando: o pedido e apenas analise visual sem codigo, ou apenas bugfix interno.
- Direcao: designer de produto + engenheiro frontend, equilibrando UI forte, componentes coerentes, hierarquia, acessibilidade, responsividade e implementacao limpa.
- Evitar: tela bonita tecnicamente fraca; tela correta visualmente generica.
- Checklist: componentes reutilizaveis; acessibilidade; responsividade real; codigo segue stack do projeto.

### Open Design/artifact-first

- Use quando: a entrega e artefato visual, prototipo, deck, screenshot, motion ou review.
- Nao use quando: a tarefa e pequena e nao precisa de artefato visual completo.
- Direcao: escolher menor combinacao de `design-brief`, `artifacts-builder`/`web-artifacts-builder`, `creative-director`/`ui-ux-pro-max`/`color-expert`, `design-review`.
- Checklist: objetivo do artefato; formato; stack/restricoes; estados; verificacao visual proporcional.

### Diagrama tecnico/editorial

- Use quando: arquitetura, fluxo, sequencia, ER, timeline, swimlane ou quadrante comunicam melhor que texto.
- Nao use quando: lista, comparacao simples ou tabela resolve melhor.
- Direcao: usar `diagram-design`, escolher tipo correto, carregar referencia `references/type-*.md`, aplicar style guide.
- Checklist: tipo certo; baixa densidade; 1-2 focos; contraste; SVG/HTML standalone quando fizer sentido.

### Mini prompts rapidos

- Hero: melhorar impacto, hierarquia tipografica, CTA e visual premium sem decoracao excessiva.
- Formulario: melhorar labels, spacing, erros, ajuda contextual e acao principal.
- Dashboard: reduzir ruido, melhorar narrativa visual, metricas, filtros e listas.
- Tabela: melhorar densidade, legibilidade, acao contextual e uso profissional.
- Android: deixar Compose mais nativo, Material 3 coerente, acessivel e adaptativo.

## Sequencias recomendadas

### Criar do zero

1. Use "Criar interface do zero".
2. Some tipo especifico: landing, dashboard, sistema B2B, design system ou Android.
3. Se houver referencias, use "Transformar referencia em direcao de produto".
4. Finalize com "Combinar design + implementacao".

### Refatorar existente

1. Use "Refatorar UI existente".
2. Rode "Diagnosticar UI generica".
3. Rode "Elevar estetica sem quebrar UX".
4. Some a secao especifica do tipo de projeto.

## Anti-patterns

- Prompt vago como "deixe bonito".
- Pedir "premium" sem publico, objetivo, densidade e restricoes.
- Copiar referencia visual sem traduzir principios.
- Confundir dashboard SaaS com landing page.
- Usar prompt longo quando uma secao especifica basta.

## Origem do conteudo

- Fonte principal: `PROMPTS-DE-DESIGN-PROFISSIONAL-2026.md`.
- Conteudo relacionado: `UI-PATTERNS-POR-COMPONENTE-2026.md`, `UI-REFERENCIAS-PREMIUM-2026.md`.
- Transformacao: prompts longos foram convertidos em biblioteca consultavel por situacao, preservando variaveis, objetivos, evitacoes e sequencias.
