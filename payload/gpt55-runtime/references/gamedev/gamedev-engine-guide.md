# GameDev Engine Guide

## Objetivo

Dar ao runtime uma referencia de desenvolvimento de jogos por trilha, derivada de `GAMEDEV-CURADORIA-2026.md`, preservando Godot, RPG Maker, Blender, Aseprite, turn-based, Pyxel/Python e input sem ativar MCPs automaticamente.

## Quando usar

- Pedido sobre criar jogo, prototipo, core loop, Godot, RPG Maker, pixel art, assets 3D, turn-based, input, playtest ou aprendizado de Python via jogos.
- Quando `categories/gamedev.md` ou `flows/gamedev-flow.md` forem selecionados.
- Quando o usuario pedir rota profissional de jogo em vez de improviso.

## Quando nao usar

- Apps comuns sem mecanica de jogo.
- Design visual web que nao envolve gameplay.
- Ativacao de MCP local sem projeto, app instalado e permissao explicita.

## Indice curto

1. Ideia, genero e core loop
2. Godot
3. RPG Maker/RPG Maker MZ
4. Blender/assets 3D
5. Aseprite/pixel art/sprites
6. Turn-based
7. Pyxel/Python beginner
8. Controller/gamepad/input
9. Playtest
10. Riscos e MCPs nao ativados automaticamente

## Ligacao com runtime

- Category: `gamedev`.
- Flow: `gamedev-flow`.
- Specialists: `critic-reviewer`, `evidence-reviewer`, `skill-scout`.
- Registries: `skill-registry.md`, `routing-matrix.md`, `reference-registry.md`.

## Trilhas

### Ideia, genero e core loop

- Use: `game-development`, `product-lens`, `board-game-design`, `card-game-design`, `player-onboarding`.
- Quando usar: definir core loop, regras, progressao, tutorial, curva de dificuldade, economia e vertical slice.
- Quando nao usar: quando a engine/projeto ja esta definido e o problema e implementacao especifica.
- Checklist: genero; plataforma; loop de 30-60 segundos; objetivo do jogador; falha/sucesso; progressao; primeira build jogavel.

### Godot

- Use: `godot-development`, `godot-ui`, `godot-debugging`, `pixel-art-sprites`, `game-ui-design`.
- Quando usar: Godot 4.x, GDScript, cenas `.tscn`, recursos `.tres`, UI/HUD, menus, gamepad focus e debug.
- MCPs recomendados, nao ativados automaticamente: Godot MCP, Godot DAP, Godot Docs.
- Pre-requisitos para MCP: Godot instalado, projeto alvo validado, comandos conhecidos, permissao do usuario, estrategia de backup.
- Checklist: versao Godot; estrutura de cenas; UI/HUD; input map; debug output; teste jogavel.

### RPG Maker/RPG Maker MZ

- MCP recomendado, nao ativado automaticamente: RPG Maker MZ MCP para mapas, eventos, database, scenarios, assets e prototipagem.
- Quando ativar: apenas com RPG Maker MZ instalado e projeto alvo definido.
- Risco: edicao em massa de database, mapas e eventos.
- Skill fallback: `game-development`, `board-game-design`, `card-game-design`, `pixel-art-sprites`, `copywriter`.
- Checklist: projeto alvo; backup; escopo do mapa/evento; database impactada; teste dentro do editor.

### Blender/assets 3D

- MCP recomendado, nao ativado automaticamente: Blender MCP para scripts Python headless no Blender.
- Skills complementares: `game-studio:web-3d-asset-pipeline`, `game-studio:three-webgl-game`.
- `threejs-game`: usar apenas como consulta experimental devido alerta de risco.
- Quando usar: modelos, GLB/GLTF, cenas 3D, assets para Godot/Unity/web e automacao de scripts Blender.
- Checklist: formato de export; escala/unidades; origem/pivot; materiais; textura; pipeline de import na engine.

### Aseprite/pixel art/sprites

- MCP recomendado, nao ativado automaticamente: Aseprite MCP para canvas, layers, paletas, batch export e spritesheets.
- Skill principal: `pixel-art-sprites`.
- Quando usar: sprites 8/16-bit, tilesets, character sheets, animacao frame-by-frame, paletas limitadas e export para Godot/RPG Maker/Phaser.
- Checklist: tamanho de tile; paleta; frames; direcoes; naming; export spritesheet/atlas; teste na engine.

### Turn-based

- Use: `board-game-design`, `card-game-design`, `phaser-gamedev`, `game-development`.
- Backend persistente: `cloudflare:durable-objects` quando houver multiplayer/turnos em web/cloud.
- Quando usar: tatica em grid, card battler, roguelike por turno, board game digital, RPG battle system, turn timers e estado persistente por partida.
- Checklist: ordem de turno; estado persistente; resolucao de conflito; feedback visual; IA/oponente; save/load; multiplayer se houver.

### Pyxel/Python beginner

- MCPs recomendados, nao ativados automaticamente: Python Beginner Book e Pyxel MCP.
- Skills complementares: `python-patterns`, `python-testing`, `game-development`.
- Quando usar: aprender Python com projetos pequenos, prototipar jogos retro e ensinar fundamentos via jogos.
- Checklist: objetivo didatico; loop simples; input; colisao; sprites; teste de script; captura visual se possivel.

### Controller/gamepad/input

- Use: `game-ui-design`, `godot-ui`, `phaser-gamedev`, `mobile-developer`; `threejs-game` apenas experimental.
- Quando usar: foco de menu, navegacao por gamepad, prompts de botao, remap, teclado/mouse/touch/gamepad, acessibilidade e feedback de input.
- Checklist: input map; foco inicial; navegacao por D-pad/stick; prompts por dispositivo; remap; fallback teclado/mouse/touch.

### Playtest

- Use: `game-studio:game-playtest`, `quality-auditor`, `verification-loop` e teste real quando houver build jogavel.
- Quando usar: antes de concluir qualquer prototipo, vertical slice ou ajuste de mecanica.
- Checklist: objetivo do teste; passos; resultado esperado; bugs; friccao; ajuste proposto; evidencias.

## Riscos e MCPs nao ativados automaticamente

- `threejs-game`: scanner marcou `Critical Risk`; usar apenas como consulta experimental.
- `godot-development`: scanner marcou `Gen High Risk`; revisar antes de permitir automacao via MCP.
- Blender, Godot, Aseprite e RPG Maker MZ nao entram no `config.toml` sem verificar app local, comando de inicializacao, permissoes e projeto alvo.
- Nao ativar MCPs em massa; cada MCP precisa de caso de uso, credencial/permissao, backup e rollback.

## Checklist de uso

1. Identifique se o pedido e ideia, engine, arte, input, backend, playtest ou aprendizado.
2. Escolha a menor trilha que resolve.
3. Use skills instaladas antes de MCPs.
4. So considerar MCP quando app/projeto local estiver validado.
5. Antes de concluir, exija build jogavel ou evidencia proporcional.

## Anti-patterns

- Escolher engine antes de entender core loop.
- Ativar MCP local sem projeto alvo.
- Automatizar editor sem backup.
- Tratar UI/HUD de jogo como dashboard comum.
- Ignorar input e playtest ate o final.

## Origem do conteudo

- Fonte principal: `GAMEDEV-CURADORIA-2026.md`.
- Transformacao: trilhas, MCPs recomendados, riscos e rota `$gpt55-runtime` foram condensados em guia operacional.
