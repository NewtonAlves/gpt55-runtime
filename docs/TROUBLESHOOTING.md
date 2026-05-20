# Troubleshooting

## npx cannot find the package

Confirm the GitHub repository exists and is public or accessible to your GitHub session.

Expected command:

```bash
npx github:NewtonAlves/gpt55-runtime
```

## Install fails validation

Run:

```bash
npx github:NewtonAlves/gpt55-runtime validate
```

Then check whether `payload/gpt55-runtime` contains:

- `SKILL.md`
- `agents/openai.yaml`
- `runtime/`
- `categories/`
- `specialists/`
- `flows/`
- `references/`
- `registries/`
- `validation/`
- `updates/`

## Existing skill was overwritten

The installer creates a timestamped backup before overwrite. Look next to the destination folder for `gpt55-runtime.backup-*`.

## Optional tools missing

Run:

```bash
npx github:NewtonAlves/gpt55-runtime doctor
```

Missing optional tools do not block installing the base skill.
