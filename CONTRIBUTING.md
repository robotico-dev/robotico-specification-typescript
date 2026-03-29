# Contributing

## One type per file

Each source file under `src/` must define **at most one** of:

- `type` alias
- `interface`
- `class`
- `enum`

Files may contain only functions, only constants, or only re-exports (`index.ts`). Do not add a second exported type to a file that already defines one.

See `docs/adr/0001-one-type-per-file.md`.
