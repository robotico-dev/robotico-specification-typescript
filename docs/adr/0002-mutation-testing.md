# ADR 0002: Mutation testing policy

## Status

Accepted

## Decision

- **Mediator / specification:** Stryker runs with default mutators; break threshold ≥95% mutation score.
- **Resilience / validation / mapper:** `StringLiteral` and `RegexLiteral` mutators are excluded so thresholds target behavioral mutants; break threshold ~78–80% (see `stryker.conf.json` per package).
- **Execution:** `npm run mutate` uses `stryker run --inPlace` so Vitest discovers tests reliably (including on Windows).

## Consequences

CI runs a dedicated `mutation` job on Node 22. Full release checks: `npm run verify:full` (includes mutate).
