# Specification invariants

1. **Pure predicate** — `isSatisfiedBy` must be deterministic and side-effect free for a given candidate (in-memory filtering contract).
2. **Boolean algebra** — `and` / `or` / `not` / `allOf` / `anyOf` compose truth consistently (De Morgan where documented).
3. **Description** — `specificationToDescriptionNode` reflects the same logic as `isSatisfiedBy` for built-in combinators.
4. **Option integration** — Helpers that return `Option` or `Result` preserve “no match” vs “error” semantics as documented per API.
