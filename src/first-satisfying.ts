import type { Option } from "@robotico-dev/option";
import { none, some } from "@robotico-dev/option";
import type { ISpecification } from "./i-specification.js";

/**
 * First candidate that satisfies the specification, or `None` if none do.
 */
export function firstSatisfying<T>(
  candidates: readonly T[],
  specification: ISpecification<T>
): Option<T> {
  for (const c of candidates) {
    if (specification.isSatisfiedBy(c)) return some(c);
  }
  return none;
}
