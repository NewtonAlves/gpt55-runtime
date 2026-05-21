# PHP + HTML + CSS + JavaScript Guide

Use this reference for classic PHP fullstack work without a heavy framework.

## When To Use

Use for:

- CRUD with PHP, PDO and MySQL/MariaDB;
- small administrative systems;
- login, registration and sessions;
- mini apps without Laravel, Symfony, React or Next.js;
- PHP forms and server-side validation;
- JavaScript Fetch integration with PHP endpoints;
- simple dashboards;
- secure uploads;
- vanilla HTML/CSS/JavaScript;
- refactoring legacy PHP into a clearer structure.

## When Not To Use

Do not use as the main route for:

- Laravel-specific work;
- Symfony-specific work;
- WordPress themes/plugins;
- React or Next.js apps;
- Node/Express backends;
- Android/mobile apps;
- enterprise systems that need a separately designed architecture.

## Required Official Sources

Prefer current primary sources for implementation details:

- PHP Manual;
- PDO and `PDO::prepare`;
- `password_hash()` and `password_verify()`;
- PHP session security documentation;
- MDN HTML, CSS, JavaScript and Fetch API;
- web.dev Forms;
- W3C WAI form accessibility guidance;
- OWASP guidance for SQL injection, XSS, CSRF, authentication, session management and file upload.

Use examples and snippets as inspiration only after checking safety, maintenance and fit.

## Recommended Project Structure

```text
public/
src/
views/
config/
storage/
vendor/
composer.json
.env.example
README.md
```

Keep publicly served files under `public/`. Keep source code, config, views, uploads and secrets outside public access where possible.

## Modern PHP

Prefer:

- PHP 8+;
- Composer when dependencies or autoloading help;
- PSR-4 for non-trivial projects;
- a public front controller or explicit public endpoints;
- separation between config, database access, views and domain logic;
- clear error handling;
- `.env.example` without real secrets;
- README setup instructions.

## PDO + MySQL

Checklist:

- use PDO for database access;
- configure DSN, charset and error mode deliberately;
- use prepared statements and bound values;
- use transactions when multiple writes must succeed together;
- handle errors safely;
- never concatenate `$_GET`, `$_POST` or `$_REQUEST` into SQL;
- include pagination and filtering rules for list/search screens.

## Secure CRUD

Checklist:

- validate input on the server;
- use prepared statements for all user-influenced SQL;
- escape dynamic output with `htmlspecialchars()` or equivalent;
- use CSRF protection for state-changing POST actions;
- paginate list views;
- require explicit delete confirmation;
- return safe user-facing errors without leaking SQL or stack traces.

## Auth And Sessions

Checklist:

- hash new passwords with `password_hash()`;
- verify passwords with `password_verify()`;
- regenerate the session ID after login;
- destroy or invalidate sessions correctly on logout;
- protect private pages with a guard/middleware pattern;
- use CSRF protection on login, registration and logout when applicable;
- avoid public messages that reveal whether an email exists.

## Secure Uploads

Checklist:

- use `multipart/form-data`;
- enforce maximum size;
- allow only known extensions;
- validate real MIME/content type;
- generate random server-side filenames;
- do not trust the original filename;
- store files outside public web root when possible;
- block script execution in upload directories;
- record uploads in the database when the app needs ownership/audit.

## Semantic HTML And Forms

Checklist:

- use semantic elements such as `header`, `main`, `section`, `article`, `nav` and `footer`;
- connect labels to controls with `for` and `id`;
- use `fieldset` and `legend` for grouped fields when useful;
- choose correct input types such as `email`, `password`, `tel`, `date`, `number` and `search`;
- use `autocomplete` for login, registration and address fields where relevant;
- do not depend on placeholders as labels;
- design forms for keyboard and assistive technology use.

## Responsive CSS

Checklist:

- start mobile-first;
- use CSS custom properties for colors, spacing and radius;
- use Flexbox for one-dimensional alignment;
- use Grid for two-dimensional layouts;
- avoid scattered magic values;
- provide hover, focus, active, disabled, error and success states;
- keep visible focus indicators;
- verify contrast;
- avoid heavy animations on layout-triggering properties.

## Vanilla JavaScript

Checklist:

- use `addEventListener` instead of inline event handlers;
- separate DOM selection, state and functions;
- validate on the client for feedback, but always validate on the server;
- use Fetch API for PHP endpoints when asynchronous behavior is needed;
- show loading, error and success states;
- prefer `textContent` when rendering text;
- avoid `innerHTML` with untrusted data;
- use localStorage only for non-sensitive preferences or cached UI state.

## PHP + JS Fetch Flow

```text
HTML form -> JS validation -> fetch POST -> PHP endpoint -> server validation -> PDO -> JSON response -> DOM update
```

Server validation and authorization remain mandatory even when JavaScript validation exists.

## Mandatory Security

Cover:

- SQL injection prevention with prepared statements;
- XSS prevention through output escaping;
- CSRF tokens for sensitive writes;
- session management and regeneration;
- secure password hashing and verification;
- file upload validation;
- secrets outside the repository;
- production mode without raw stack traces.

## Recommended Projects

Good practice projects:

- customer CRUD;
- login and private dashboard;
- product inventory;
- basic finance tracker;
- contact form with admin review;
- upload gallery;
- PHP endpoint consumed by Fetch;
- mini CRM.

## Anti-Patterns

Do not use:

- SQL concatenated with request data;
- plaintext passwords;
- `md5` or `sha1` for password storage;
- `innerHTML` with external or user-provided data;
- passwords or sensitive tokens in localStorage;
- uploads without validation;
- production stack traces;
- internal files inside the public web root;
- credentials committed to the repository.

## Final Checklist

- Project runs locally.
- README exists.
- PDO is used for database access.
- Prepared statements are used.
- Auth uses safe password and session handling.
- CSRF protection exists for sensitive POST actions.
- Dynamic output is escaped.
- CSS is responsive.
- Forms are accessible.
- JavaScript avoids inline handlers.
- Uploads are validated when present.
