import { describe, expect, it } from "vitest";
import { isNone, isSome } from "@robotico-dev/option";
import { firstSatisfying, specificationFromPredicate } from "./index.js";

describe("firstSatisfying", () => {
  const positive = specificationFromPredicate(
    (n: number) => n > 0,
    "positive"
  );

  it("returns None for empty candidates", () => {
    const o = firstSatisfying([], positive);
    expect(isNone(o)).toBe(true);
  });

  it("returns None when no candidate satisfies", () => {
    const o = firstSatisfying([-1, -2], positive);
    expect(isNone(o)).toBe(true);
  });

  it("returns Some with first match in order", () => {
    const o = firstSatisfying([-1, 3, 5], positive);
    expect(isSome(o)).toBe(true);
    if (isSome(o)) expect(o.value).toBe(3);
  });
});
