# Disambiguation Tests

The runtime must ask before implementing when intent is underspecified.

## Required behavior

- Do not implement from vague input.
- Ask at most 5 objective questions.
- Do not load high-cost references before route selection.
- Offer 3 suggested paths if the user does not know what they want.
- After clarification, choose category, specialist, flow, runtime level, references, and validation.

## Test cases

| Input | Expected behavior |
|---|---|
| crie um site | Ask type, niche, objective, output and stack. |
| crie um app | Ask platform, user, goal, MVP and stack. |
| crie um programa para computador | Ask problem, OS, interface, offline and stack. |
| crie um sistema | Ask domain, users, process, data and platform. |
| crie um SaaS | Ask niche, buyer, problem, monetization and MVP. |
| crie um chatbot | Ask channel, purpose, knowledge source, tools and safety. |
| quero criar algo | Offer 3 paths and ask objective. |
| faca uma automacao | Ask source, trigger, action, environment and risk. |
