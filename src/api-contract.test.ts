import { describe, expect, expectTypeOf, it } from "vitest";
import type { ISpecification } from "./i-specification.js";
import type { SpecificationDescriptionNode } from "./specification-description-node.js";
import { specificationFromPredicate } from "./specification-from-predicate.js";
import { SPECIFICATION_VERSION } from "./specification-version.js";

describe("API types", () => {
  it("ISpecification is satisfied by predicate specs", () => {
    const s = specificationFromPredicate(() => true, "x");
    expectTypeOf(s).toMatchTypeOf<ISpecification<unknown>>();
    expectTypeOf(
      specificationFromPredicate(() => false, "y").description
    ).toEqualTypeOf<string>();
    expectTypeOf(s.isSatisfiedBy(undefined as unknown)).toEqualTypeOf<boolean>();
  });

  it("SpecificationDescriptionNode discriminated union", () => {
    const leaf: SpecificationDescriptionNode = {
      kind: "leaf",
      description: "a",
    };
    expectTypeOf(leaf.kind).toEqualTypeOf<"leaf">();
  });

  it("SPECIFICATION_VERSION is non-empty semver", () => {
    expect(SPECIFICATION_VERSION).toMatch(/^\d+\.\d+\.\d+$/);
  });
});
