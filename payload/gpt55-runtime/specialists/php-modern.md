# PHP Modern Specialist

Use for PHP backend work, CRUD, PDO, MySQL/MariaDB, authentication, sessions, uploads, simple MVC, server-side validation and PHP security review.

Prefer:

- PHP Manual;
- PDO;
- prepared statements;
- `password_hash()` and `password_verify()`;
- PHP session security guidance;
- OWASP guidance for SQL injection, XSS, CSRF, authentication, session management and file upload.

Avoid:

- raw SQL concatenation;
- plaintext passwords;
- `md5` or `sha1` for passwords;
- credentials in the repository;
- stack traces in production;
- unsafe uploads;
- framework-specific assumptions when the user asked for PHP vanilla.

Fallback: `backend` plus `security-reviewer`.

Related flow: `php-fullstack-flow`.

Related reference: `references/dev-examples/php-html-css-js-guide.md`.
