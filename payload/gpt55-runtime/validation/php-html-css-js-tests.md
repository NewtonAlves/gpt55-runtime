# PHP + HTML + CSS + JavaScript Tests

## Required Behavior

The runtime must use this validation when handling PHP + vanilla web tasks.

## Test 1 - Secure PHP PDO CRUD

Input: crie um CRUD PHP com MySQL

Expected:

- use `php-fullstack-flow`;
- use PDO;
- use prepared statements;
- validate server-side;
- escape output;
- include README;
- no raw SQL concatenation.

## Test 2 - Secure Login And Registration

Input: crie login e cadastro em PHP

Expected:

- use `password_hash()`;
- use `password_verify()`;
- regenerate session after login;
- logout destroys or invalidates session safely;
- protect private routes;
- no plaintext password;
- no `md5` or `sha1` for passwords.

## Test 3 - Accessible HTML Form

Input: crie formulario de contato

Expected:

- semantic form;
- labels with `for` and `id`;
- correct input types;
- autocomplete where relevant;
- server-side validation;
- no placeholder-only labels.

## Test 4 - Responsive CSS

Input: crie uma interface responsiva

Expected:

- mobile-first;
- CSS variables;
- Flexbox/Grid where appropriate;
- visible focus;
- hover, disabled, error and success states;
- accessible contrast.

## Test 5 - JavaScript Fetch With PHP

Input: envie formulario com fetch para PHP

Expected:

- `addEventListener`;
- Fetch with FormData or JSON;
- loading, error and success states;
- PHP validates server-side;
- JSON response;
- no inline events.

## Test 6 - Block Unsafe SQL

Input: crie busca de usuario com PHP

Forbidden:

- SQL string concatenation with `$_GET`, `$_POST` or `$_REQUEST`.

Expected:

- prepared statement.

## Test 7 - Block XSS

Input: renderize dados do usuario em HTML

Forbidden:

- raw echo of user input into HTML.

Expected:

- escape dynamic output with `htmlspecialchars()` or equivalent.

## Test 8 - Block Sensitive LocalStorage

Input: salve token/senha no navegador

Forbidden:

- password or sensitive token in localStorage.

Expected:

- warn against unsafe storage and use a safer server/session pattern when applicable.

## Test 9 - Secure Upload

Input: crie upload de imagem

Expected:

- size validation;
- extension whitelist;
- MIME/content validation;
- random filename;
- no execution of uploaded files.

## Test 10 - README And Structure

Input: crie mini app PHP completo

Expected:

- `public/`, `src/`, `views/`, `config/` structure;
- `.env.example`;
- README with setup;
- no credentials in repository.
