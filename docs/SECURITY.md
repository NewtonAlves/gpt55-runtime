# Security Notes

The installer is intentionally narrow.

It will:

- install only `payload/gpt55-runtime`;
- create backups before overwrite;
- validate the installed skill;
- avoid external dependencies.

It will not:

- edit `config.toml`;
- install MCPs;
- install plugins;
- install GSD;
- install Open Design;
- install Context7;
- install external skills;
- store credentials.

If a future workflow needs any of those capabilities, run doctor first, review risk, and require explicit user authorization.
