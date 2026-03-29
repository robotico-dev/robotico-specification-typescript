import type { Result } from "@robotico-dev/result";
import { createSimpleError, errorOf, successOf } from "@robotico-dev/result";
import type { ISpecification } from "./i-specification.js";

/**
 * Returns `Ok(candidate)` when the specification holds; otherwise a structured `Err`.
 */
export function specificationIsSatisfiedResult<T>(
  spec: ISpecification<T>,
  candidate: T
): Result<T> {
  if (spec.isSatisfiedBy(candidate)) {
    return successOf(candidate);
  }
  return errorOf(
    createSimpleError(
      `Does not satisfy: ${spec.description}`,
      "SPEC_NOT_SATISFIED"
    )
  );
}
