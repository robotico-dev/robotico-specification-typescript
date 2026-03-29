# ADR 0001: One type per file

## Status

Accepted

## Context

The public API and internal model stay easy to navigate and review when every type lives in its own module.

## Decision

- At most one `type` / `interface` / `class` / `enum` definition per `src/**/*.ts` file (excluding tests and barrel `index.ts`).
- Composite logic (e.g. description trees) uses dedicated types such as `SpecificationWithDescriptionNodeGetter` instead of inline `type` aliases inside functions.

## Consequences

- More files; clearer ownership and diffs.
- Imports are explicit; circular dependencies are easier to spot.
