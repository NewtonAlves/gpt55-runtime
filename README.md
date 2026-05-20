# GPT55 Runtime

Portable installer for the `gpt55-runtime` Codex skill.

Install from GitHub:

```bash
npx github:NewtonAlves/gpt55-runtime
```

Default destination:

- Windows: `%USERPROFILE%\.agents\skills\gpt55-runtime`
- macOS/Linux: `$HOME/.agents/skills/gpt55-runtime`

Optional Codex sync:

```bash
npx github:NewtonAlves/gpt55-runtime --sync-codex
```

Doctor:

```bash
npx github:NewtonAlves/gpt55-runtime doctor
```

Validate payload:

```bash
npx github:NewtonAlves/gpt55-runtime validate
```

Uninstall by moving the installed skill to a timestamped backup:

```bash
npx github:NewtonAlves/gpt55-runtime uninstall
```

The installer does not install MCPs, GSD, Open Design, Context7, plugins, or external skills. `doctor` only detects optional dependencies.
