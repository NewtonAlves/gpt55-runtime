# Component Patterns Reference

## Objetivo

Dar ao runtime uma referencia granular de UI por componente, derivada de `UI-PATTERNS-POR-COMPONENTE-2026.md`, para evitar decisao visual generica em websites, sistemas web, dashboards, apps Android e diagramas editoriais.

## Quando usar

- Ao criar, revisar ou refatorar um componente especifico.
- Quando a UI parece correta, mas sem hierarquia, estado, densidade ou intencao.
- Quando `categories/design.md`, `categories/frontend.md` ou `flows/design-system-flow.md` forem selecionados.
- Quando a tarefa envolver Android visual, consulte tambem `categories/android.md` e `flows/android-flow.md`.

## Quando nao usar

- Para escolher stack, biblioteca ou arquitetura de app.
- Para copiar visual de referencia sem adaptar ao produto.
- Para substituir docs oficiais de uma biblioteca quando a pergunta for de API atual.
- Para diagramas simples que funcionam melhor como lista, tabela ou texto.

## Indice curto

1. Botao
2. Input/campo de formulario
3. Select/combobox/autocomplete
4. Checkbox/radio/switch
5. Card
6. Tabela/data grid
7. Lista/feed
8. Modal/dialog
9. Drawer/side panel
10. Popover/dropdown/menu
11. Tabs/segmented/accordion
12. Sidebar
13. Navbar/header
14. Empty state
15. Loading/skeleton/progresso
16. Toast/alert/feedback
17. Busca/filtros/facetas
18. Dashboard widget/metric card
19. Android por componente
20. Diagrama tecnico/editorial

## Ligacao com runtime

- Categories: `design`, `frontend`, `android`.
- Flows: `design-system-flow`, `android-flow`, `example-driven-development-flow`.
- Specialists: `react`, `compose`, `critic-reviewer`, `evidence-reviewer`.
- Registries: `reference-registry.md`, `routing-matrix.md`, `category-registry.md`, `specialist-registry.md`.

## Checklist geral

- Confirme se o componente e a melhor escolha para o contexto.
- Verifique hierarquia, estados, acessibilidade, mobile e densidade.
- Consulte referencias reais antes de implementar.
- Adapte ao sistema visual do produto; nao cole estilos desconectados.
- Garanta que funcao, estado, prioridade e contexto estejam claros em poucos segundos.

## Anti-patterns gerais

- Usar card, modal, toast ou botao por habito.
- Substituir tabela por cards quando comparacao/densidade e a necessidade real.
- Usar efeito visual para esconder falta de hierarquia.
- Ignorar estados: hover, focus, active, disabled, loading, empty, error.
- Copiar componente de biblioteca sem ajustar ao produto e ao fluxo.

## Padroes por componente

### Botao

- Quando usar: acoes claras e intencionais como confirmar, enviar, continuar, salvar, criar ou iniciar.
- Quando nao usar: links disfarçados, acoes secundarias demais ou tudo ao mesmo tempo na mesma tela.
- Sinais de qualidade: hierarquia primaria/secundaria/terciaria clara; tamanho clicavel confortavel; label direta; hover/focus/active/disabled/loading resolvidos.
- Erros comuns: muitos botoes primarios; labels vagas como `OK` ou `Continue`; peso visual alto para acao pequena; loading sem bloquear duplo clique.
- O que observar nas referencias: peso visual vs prioridade; distancia entre acoes; icone com ou sem texto; comportamento em formularios e dialogs.
- Referencias relevantes: MUI Buttons, shadcn/ui Button, Mantine Button, Ant Design Button.
- Checklist antes de implementar: acao principal unica; label com verbo/contexto; estado loading seguro; foco visivel; responsividade do grupo de acoes.

### Input/campo de formulario

- Quando usar: entrada textual ou estruturada que precisa ser legivel, validavel e editavel.
- Quando nao usar: dado que deveria ser escolha controlada, toggle, busca assistida ou display-only.
- Sinais de qualidade: label clara; placeholder complementar; ajuda contextual; erro especifico; foco visivel.
- Erros comuns: placeholder como label; campo apertado; erro generico; colunas demais em mobile.
- O que observar nas referencias: spacing entre label/campo/hint/erro; mascara; validacao; disabled/readonly/success.
- Referencias relevantes: Mantine TextInput, MUI Text Field, React Aria Forms, PatternFly Forms.
- Checklist antes de implementar: label persistente; mensagem de erro acionavel; teclado adequado; largura responsiva; agrupamento coerente.

### Select/combobox/autocomplete

- Quando usar: `select` para poucas opcoes; `combobox` para buscar dentro de opcoes; `autocomplete` para catalogo grande ou busca assistida.
- Quando nao usar: lista enorme em select simples; entrada livre que precisa de input; configuracao complexa que precisa de tela propria.
- Sinais de qualidade: valor atual, placeholder e opcoes bem diferenciados; teclado funcional; lista legivel; filtro rapido.
- Erros comuns: select gigante; misturar busca e selecao; dropdown lento; scroll ruim; itens truncados.
- O que observar nas referencias: navegacao por teclado; grouping; no results; clear action; async loading.
- Referencias relevantes: Radix Select, MUI Autocomplete, React Aria ComboBox, Mantine Combobox.
- Checklist antes de implementar: opcoes cabem no padrao escolhido; busca tem feedback; foco retorna corretamente; empty/loading existem.

### Checkbox/radio/switch

- Quando usar: checkbox para multiplas selecoes ou opcao independente; radio para escolha unica mutuamente exclusiva; switch para estado binario imediato.
- Quando nao usar: switch para escolha conceitual; checkbox para acao imediata sem clareza; radio quando ha muitas opcoes pesquisaveis.
- Sinais de qualidade: label clicavel; estado claro; alinhamento limpo; explicacao de impacto quando necessario.
- Erros comuns: switch no lugar de radio; checkbox para aplicar mudanca critica; labels pouco descritivas.
- O que observar nas referencias: grupo, helper text, disabled, estado indeterminado e confirmacao para impacto alto.
- Referencias relevantes: Radix Checkbox, Radix Radio Group, MUI Switch, Ant Design Checkbox.
- Checklist antes de implementar: semantica correta; label explica consequencia; area clicavel adequada; estado inicial claro.

### Card

- Quando usar: agrupar conteudo relacionado como entidade, resumo, preview ou acao contextual.
- Quando nao usar: qualquer bloco por habito; tabelas/listas densas que precisam comparacao.
- Sinais de qualidade: estrutura interna clara; spacing consistente; borda/sombra/fundo com intencao; unidade semantica real.
- Erros comuns: dashboard feito so de cards; cards identicas sem hierarquia; padding excessivo com pouco conteudo.
- O que observar nas referencias: cabecalho/corpo/footer; titulo/metadado/acao; cards informativas vs interativas.
- Referencias relevantes: Flowbite Card, Mantine Card, MUI Card, Component Gallery Cards.
- Checklist antes de implementar: unidade do card e clara; acao principal nao compete; conteudo nao fica inflado; layout lista vs grid foi escolhido.

### Tabela/data grid

- Quando usar: comparar muitos itens e colunas, com densidade e precisao.
- Quando nao usar: conteudo narrativo, exploracao visual, poucas entidades que funcionam melhor como lista.
- Sinais de qualidade: colunas definidas; densidade adequada; ordenacao/filtro/selecao claros; empty/loading pensados.
- Erros comuns: transformar tabela em cards; bordas/decoracao em excesso; colunas sem prioridade; sem estrategia mobile.
- O que observar nas referencias: sticky header, row actions, bulk selection, paginacao vs infinite loading, filtro inline vs painel lateral.
- Referencias relevantes: MUI Data Grid, Ant Design Table, PatternFly Table, PrimeReact DataTable.
- Checklist antes de implementar: prioridade de colunas; comportamento mobile; row action acessivel; estado vazio; loading por linha ou tabela.

### Lista/feed

- Quando usar: informacao escaneada em sequencia, com unidade repetida que nao exige grade complexa.
- Quando nao usar: comparacao tabular, dashboard de metricas ou cards com conteudo muito heterogeneo.
- Sinais de qualidade: ritmo vertical consistente; item escaneavel; separacao entre titulo, metadado e acoes.
- Erros comuns: muitos estilos conflitantes; acoes escondidas; itens desbalanceados.
- O que observar nas referencias: densidade, avatar/iconografia, metadata, separadores e acoes contextuais.
- Referencias relevantes: Material List, Mantine List, PatternFly Data List.
- Checklist antes de implementar: cada item tem hierarquia; metadados nao poluem; acao secundaria nao domina; empty/loading definidos.

### Modal/dialog

- Quando usar: decisao importante, confirmacao, tarefa curta e contextual.
- Quando nao usar: formulario longo, conteudo que merece pagina propria, complexidade empilhada.
- Sinais de qualidade: titulo claro; objetivo unico; CTA evidente; escape previsivel; foco preso corretamente.
- Erros comuns: modal gigante com scroll ruim; formularios longos; dialogs encadeadas; acoes ambiguas.
- O que observar nas referencias: foco, aria, destructive action, fechamento, tamanho e responsividade.
- Referencias relevantes: Radix Dialog, MUI Dialog, React Aria Modal, PatternFly Modal.
- Checklist antes de implementar: objetivo unico; foco inicial; escape/overlay claros; acao destrutiva segura; mobile aceitavel.

### Drawer/side panel

- Quando usar: detalhe contextual, configuracao secundaria ou fluxo auxiliar sem trocar pagina.
- Quando nao usar: fluxo principal inteiro, informacao inline simples, substituto confuso de modal.
- Sinais de qualidade: relacao clara com contexto; largura adequada; fechamento previsivel; nao compete com foco principal.
- Erros comuns: colocar tudo no drawer; abrir painel para detalhe pequeno; misturar modal e drawer.
- O que observar nas referencias: largura, overlay, estado de origem, empilhamento e preservacao da tela base.
- Referencias relevantes: MUI Drawer, Mantine Drawer, Ant Design Drawer.
- Checklist antes de implementar: contexto de origem preservado; largura testada; foco e scroll controlados; mobile tem alternativa.

### Popover/dropdown/menu

- Quando usar: dropdown para lista curta de acoes/selecoes; menu para acoes contextuais; popover para conteudo contextual curto e rico.
- Quando nao usar: configuracao complexa, formulario longo, mini pagina escondida.
- Sinais de qualidade: origem clara; alinhamento preciso; fechamento previsivel; opcoes sem excesso.
- Erros comuns: menu para fluxo complexo; popover virando pagina; targets pequenos.
- O que observar nas referencias: posicionamento, collision handling, teclado, submenu e dismiss behavior.
- Referencias relevantes: Radix Dropdown Menu, Radix Popover, MUI Menu.
- Checklist antes de implementar: trigger evidente; opcoes curtas; teclado funciona; clique fora fecha; sem esconder acao critica.

### Tabs/segmented/accordion

- Quando usar: tabs para vistas irmas; segmented control para poucas opcoes rapidas; accordion para secoes independentes.
- Quando nao usar: esconder informacao essencial, navegar entre paginas distantes ou suportar labels longas.
- Sinais de qualidade: semantica clara; estado ativo evidente; conteudo nao salta; labels curtas.
- Erros comuns: tabs sem diferenca real; accordion escondendo conteudo critico; segmented com texto longo.
- O que observar nas referencias: ativacao por teclado, persistencia de estado e comportamento mobile.
- Referencias relevantes: Radix Tabs, Mantine Tabs, MUI Accordion, Ant Design Segmented.
- Checklist antes de implementar: relacao entre opcoes e clara; primeiro estado e util; foco/teclado ok; mobile nao quebra.

### Sidebar

- Quando usar: apps com multiplas areas, sistemas com secoes persistentes e profundidade de navegacao.
- Quando nao usar: site simples, fluxo linear ou navegacao pequena que cabe no header.
- Sinais de qualidade: agrupamento logico; secao ativa clara; labels curtas; icones auxiliares.
- Erros comuns: profundidade demais; labels genericas repetidas; sidebar dominando a pagina.
- O que observar nas referencias: grupos, collapsible, active state, responsividade e permission-based nav.
- Referencias relevantes: PatternFly Navigation, MUI Drawer Navigation, shadcn/ui Sidebar.
- Checklist antes de implementar: mapa de areas validado; item ativo inequívoco; colapso planejado; mobile tem drawer/nav alternativa.

### Navbar/header

- Quando usar: topo persistente com orientacao, busca, perfil, acoes globais e branding.
- Quando nao usar: substituir navegacao profunda que precisa sidebar, ou misturar acao local com global sem criterio.
- Sinais de qualidade: equilibra navegacao/identidade/utilitarios; nao compete com conteudo; bom em scroll e mobile.
- Erros comuns: header pesado; muita navegacao global; hamburger sem estrategia.
- O que observar nas referencias: prioridade de itens, sticky behavior, busca global, perfil e CTA.
- Referencias relevantes: Flowbite Navbar, Bootstrap Navbar, Preline Headers.
- Checklist antes de implementar: branding visivel; acoes globais separadas das locais; mobile testado; altura nao consome tela.

### Empty state

- Quando usar: sem dados, sem resultado de busca, ou usuario ainda nao configurou algo.
- Quando nao usar: esconder erro real, loading ainda em andamento ou estado que precisa de ajuda contextual mais forte.
- Sinais de qualidade: explica o estado; sugere proximo passo; nao dramatiza; ajuda sem bloquear.
- Erros comuns: `No data`; sem CTA; ilustracao sem funcao.
- O que observar nas referencias: microcopy, CTA, permissao, onboarding e filtro ativo.
- Referencias relevantes: PatternFly Empty State, MUI Data Grid overlays, Material Empty states.
- Checklist antes de implementar: causa explicita; proximo passo claro; busca/filtro tratado; tom profissional.

### Loading/skeleton/progresso

- Quando usar: skeleton quando estrutura e conhecida; spinner para espera curta; progress para operacao perceptivel.
- Quando nao usar: spinner para tudo, skeleton falso ou progresso sem contexto.
- Sinais de qualidade: comunica atividade; reduz ansiedade; nao pisca; transicao limpa.
- Erros comuns: spinner generico; skeleton desalinhado com layout real; progresso sem informacao.
- O que observar nas referencias: placeholders por componente, tempo minimo, cancelamento e erro pos-loading.
- Referencias relevantes: MUI Skeleton, Mantine Skeleton, Ant Design Progress.
- Checklist antes de implementar: tipo correto; layout nao salta; erro/cancelamento previsto; loading nao bloqueia indevidamente.

### Toast/alert/feedback

- Quando usar: toast para feedback curto nao bloqueante; alert para aviso contextual; banner para comunicacao persistente importante.
- Quando nao usar: erro serio descartavel, sucesso para microacao irrelevante, validacao de formulario que deve aparecer no campo.
- Sinais de qualidade: duracao adequada; tom certo; acao clara; sem ruido constante.
- Erros comuns: excesso de toast; erro serio como toast; sucesso para tudo.
- O que observar nas referencias: severidade, persistencia, dismiss, actions e area de anuncio acessivel.
- Referencias relevantes: MUI Snackbar, shadcn/ui Sonner, PatternFly Alert.
- Checklist antes de implementar: canal combina com gravidade; mensagem acionavel; nao duplica; acessibilidade de anuncio.

### Busca/filtros/facetas

- Quando usar: encontrar, refinar ou explorar volume de dados.
- Quando nao usar: dataset pequeno, filtros que confundem ou criterios que nao mudam resultado.
- Sinais de qualidade: busca e filtros nao brigam; facetas compreensiveis; filtros ativos visiveis; limpar e simples.
- Erros comuns: filtros importantes escondidos; etiquetas confusas; filtros sem hierarquia.
- O que observar nas referencias: chips ativos, painel lateral, search debounce, empty state e preservacao de URL/estado.
- Referencias relevantes: PatternFly Filters, MUI Autocomplete, Ant Design Select.
- Checklist antes de implementar: filtros principais visiveis; limpar todos existe; resultado vazio explica causa; mobile usavel.

### Dashboard widget/metric card

- Quando usar: destacar metricas, tendencia, resumo ou saude operacional.
- Quando nao usar: metricas sem decisao associada, grafico decorativo ou dashboard que deveria ser tabela/lista.
- Sinais de qualidade: numero principal claro; contexto suficiente; tendencia quando faz sentido; pouco ruido decorativo.
- Erros comuns: widgets demais; metrica sem unidade/periodo; grafico pequeno ilegivel.
- O que observar nas referencias: periodo, delta, comparativo, status, sparkline e densidade.
- Referencias relevantes: PatternFly Charts, MUI Cards, Ant Design Statistic.
- Checklist antes de implementar: unidade e periodo aparecem; delta tem significado; card nao compete com acao principal; loading/empty existem.

### Android por componente

- Quando usar: qualquer UI nativa Android, Compose, tablet, foldable ou app mobile com semantica de plataforma.
- Quando nao usar: web responsivo disfarçado de app, ou quando o problema e apenas conteudo/negocio.
- Sinais de qualidade: touch target correto; top/bottom bar ou rail adequado; contraste/elevacao Material 3; adaptacao para telas grandes; comportamento nativo esperado.
- Erros comuns: cards para tudo; padroes web forçados; navegacao sem foco; touch targets pequenos.
- O que observar nas referencias: Material 3 Components, Material 3 in Compose, adaptive apps, JetCompose Components.
- Referencias relevantes: Material Design 3 Components, Material 3 in Compose, Build adaptive apps, JetCompose Components.
- Checklist antes de implementar: componente Material correto; tamanho de toque; suporte a estado; preview/viewport; tablet/foldable considerado.

### Diagrama tecnico/editorial

- Quando usar: arquitetura de sistema, fluxo de decisao, sequencia de chamadas, state machine, ER/data model, timeline, swimlane, quadrante, hierarquia, tree, nested, layers, Venn ou funil.
- Quando nao usar: lista simples, comparacao antes/depois, tabela melhor, caixa unica com label.
- Sinais de qualidade: tipo escolhido antes de desenhar; referencia `references/type-*.md` correta; densidade baixa; 1 ou 2 focos; contraste e tokens coerentes.
- Erros comuns: diagrama generico de caixas; densidade alta; falta de narrativa visual; usar diagrama para conteudo que tabela resolve.
- O que observar nas referencias: semantica do tipo, direcao de leitura, agrupamento, legenda e foco.
- Referencias relevantes: `diagram-design`, referencias de tipo especifico, style guide do projeto.
- Checklist antes de implementar: confirmar que diagrama comunica melhor; escolher tipo; carregar referencia de tipo; aplicar style guide; validar legibilidade.

## Origem do conteudo

- Fonte principal: `UI-PATTERNS-POR-COMPONENTE-2026.md`.
- Conteudo relacionado: `UI-REFERENCIAS-PREMIUM-2026.md`, `SKILLS-CURADORIA-2026.md`, `SKILLS-CHEATSHEET-2026.md`.
- Transformacao: condensacao por componente, mantendo decisoes, sinais de qualidade, erros e referencias; sem copiar o arquivo original inteiro.
