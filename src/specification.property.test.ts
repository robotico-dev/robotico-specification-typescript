import { describe, it } from "vitest";
import fc from "fast-check";
import {
  specificationAllOf,
  specificationAnd,
  specificationAnyOf,
  specificationFromPredicate,
  specificationNot,
  specificationOr,
} from "./index.js";

describe("specification properties (fast-check)", () => {
  const pos = specificationFromPredicate((n: number) => n > 0, "pos");
  const even = specificationFromPredicate((n: number) => n % 2 === 0, "even");

  it("AND is commutative on satisfaction", () => {
    fc.assert(
      fc.property(fc.integer({ min: -200, max: 200 }), (n) => {
        const ab = specificationAnd(pos, even);
        const ba = specificationAnd(even, pos);
        return ab.isSatisfiedBy(n) === ba.isSatisfiedBy(n);
      }),
      { numRuns: 100 }
    );
  });

  it("OR is commutative on satisfaction", () => {
    fc.assert(
      fc.property(fc.integer({ min: -200, max: 200 }), (n) => {
        const ab = specificationOr(pos, even);
        const ba = specificationOr(even, pos);
        return ab.isSatisfiedBy(n) === ba.isSatisfiedBy(n);
      }),
      { numRuns: 100 }
    );
  });

  it("NOT NOT matches predicate for built-in specs", () => {
    fc.assert(
      fc.property(fc.integer({ min: -200, max: 200 }), (n) => {
        const nn = specificationNot(specificationNot(pos));
        return nn.isSatisfiedBy(n) === pos.isSatisfiedBy(n);
      }),
      { numRuns: 100 }
    );
  });

  it("De Morgan: NOT(AND(A,B)) iff OR(NOT A, NOT B)", () => {
    fc.assert(
      fc.property(fc.integer({ min: -200, max: 200 }), (n) => {
        const lhs = specificationNot(specificationAnd(pos, even));
        const rhs = specificationOr(
          specificationNot(pos),
          specificationNot(even)
        );
        return lhs.isSatisfiedBy(n) === rhs.isSatisfiedBy(n);
      }),
      { numRuns: 100 }
    );
  });

  it("allOf pairwise matches nested AND for two specs", () => {
    fc.assert(
      fc.property(fc.integer({ min: -200, max: 200 }), (n) => {
        const all = specificationAllOf([pos, even]);
        const anded = specificationAnd(pos, even);
        return all.isSatisfiedBy(n) === anded.isSatisfiedBy(n);
      }),
      { numRuns: 100 }
    );
  });

  it("anyOf empty is never satisfied", () => {
    fc.assert(
      fc.property(fc.integer(), (n) => {
        return specificationAnyOf<number>([]).isSatisfiedBy(n) === false;
      }),
      { numRuns: 50 }
    );
  });
});
