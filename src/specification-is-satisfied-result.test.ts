import { describe, expect, it } from "vitest";
import { isError, isSuccess } from "@robotico-dev/result";
import { specificationFromPredicate } from "./specification-from-predicate.js";
import { specificationIsSatisfiedResult } from "./specification-is-satisfied-result.js";

describe("specificationIsSatisfiedResult", () => {
  it("Ok when satisfied", () => {
    const spec = specificationFromPredicate((n: number) => n > 0, "positive");
    const r = specificationIsSatisfiedResult(spec, 3);
    expect(isSuccess(r)).toBe(true);
    if (isSuccess(r)) expect(r.value).toBe(3);
  });

  it("Err when not satisfied", () => {
    const spec = specificationFromPredicate((n: number) => n > 0, "positive");
    const r = specificationIsSatisfiedResult(spec, -1);
    expect(isError(r)).toBe(true);
  });
});
