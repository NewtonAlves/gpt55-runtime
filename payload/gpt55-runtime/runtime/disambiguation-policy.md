# Disambiguation Policy

Use when the user request is short, generic, or insufficient to choose a route safely.

## Triggers

Activate when the user says, without enough additional context:

- crie um site;
- crie um app;
- crie um programa;
- vamos criar um programa para computador;
- crie um sistema;
- crie um SaaS;
- faca uma automacao;
- monte um projeto;
- quero criar algo;
- vamos desenvolver uma ferramenta;
- crie uma plataforma;
- crie um bot;
- crie um chatbot.

## Main rule

Do not implement before identifying the minimum needed to choose the route.

Before choosing final category, flow, specialist, references, and runtime level, identify:

1. objective;
2. product type;
3. platform;
4. audience/user;
5. initial scope;
6. stack or technical restriction;
7. expected delivery.

## Question mode

- Ask at most 5 objective questions.
- Ask only what changes the route.
- Keep questions short.
- If the user does not know, offer 3 likely paths and recommend one.

## Generic website example

Input:

```text
crie um site
```

Expected response:

```text
Antes de criar, preciso definir a rota correta.

1. O site e landing page, institucional, portfolio, blog, e-commerce ou sistema web?
2. Qual e o nicho ou negocio?
3. O objetivo principal e vender, apresentar a empresa, capturar leads, agendar atendimento ou publicar conteudo?
4. Voce quer so planejamento/design ou tambem codigo?
5. Tem preferencia de stack: HTML/CSS/JS, React, Next.js, WordPress ou outra?

Depois das suas respostas, eu escolho a rota correta: category, specialist, flow, runtime level, references e validacao.
```

## Generic desktop program example

Input:

```text
vamos criar um programa para computador
```

Expected response:

```text
Para escolher a rota correta, preciso definir o tipo de programa.

1. Qual problema o programa resolve?
2. E para Windows, macOS, Linux ou todos?
3. Deve ter interface visual ou pode ser terminal/automacao?
4. Deve funcionar offline?
5. Voce prefere alguma stack: Python, C#, Electron, Tauri, Java ou Qt?

Depois das suas respostas, eu escolho a rota correta: category, specialist, flow, runtime level, references e validacao.
```

## User does not know

Offer 3 likely paths:

```text
Podemos seguir por tres caminhos:

1. Landing page simples para apresentar um negocio.
2. Sistema web com login, dashboard e cadastro.
3. Programa desktop offline para automatizar uma tarefa local.

Minha recomendacao inicial e escolher a opcao 1 se voce quer vender/apresentar algo rapidamente, ou a opcao 2 se precisa de usuarios, dados e painel.

Depois das suas respostas, eu escolho a rota correta: category, specialist, flow, runtime level, references e validacao.
```

## Prohibitions

- Do not implement, scaffold, generate code, or create files before disambiguating when the request is insufficient.
- Do not assume a stack without a reason.
- Do not activate deep mode without need.
- Do not load large references before route selection.

## Operational output

The disambiguation response must end with:

```text
Depois das suas respostas, eu escolho a rota correta: category, specialist, flow, runtime level, references e validacao.
```
