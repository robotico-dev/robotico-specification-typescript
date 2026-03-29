import { describe, expect, it } from "vitest";
import type { ISpecification } from "./i-specification.js";
import {
  specificationAllOf,
  specificationAnd,
  specificationAnyOf,
  specificationFromPredicate,
  specificationNot,
  specificationOr,
  specificationToDescriptionNode,
} from "./index.js";

describe("specification algebra", () => {
  const positive = specificationFromPredicate(
    (n: number) => n > 0,
    "positive"
  );
  const even = specificationFromPredicate((n: number) => n % 2 === 0, "even");

  it("AND", () => {
    const spec = specificationAnd(positive, even);
    expect(spec.isSatisfiedBy(4)).toBe(true);
    expect(spec.isSatisfiedBy(3)).toBe(false);
    expect(spec.isSatisfiedBy(-2)).toBe(false);
  });

  it("OR", () => {
    const spec = specificationOr(positive, even);
    expect(spec.isSatisfiedBy(-2)).toBe(true);
    expect(spec.isSatisfiedBy(3)).toBe(true);
    expect(spec.isSatisfiedBy(-3)).toBe(false);
  });

  it("NOT", () => {
    expect(specificationNot(positive).isSatisfiedBy(-1)).toBe(true);
  });

  it("allOf / anyOf", () => {
    expect(specificationAllOf([positive, even]).isSatisfiedBy(2)).toBe(true);
    expect(specificationAnyOf<number>([]).isSatisfiedBy(0)).toBe(false);
    expect(specificationAllOf<number>([]).isSatisfiedBy(0)).toBe(true);
  });
});

describe("specification string descriptions", () => {
  it("exposes composite descriptions", () => {
    const positive = specificationFromPredicate((n: number) => n > 0, "pos");
    const even = specificationFromPredicate((n: number) => n % 2 === 0, "even");
    expect(specificationAnd(positive, even).description).toContain("AND");
    expect(specificationOr(positive, even).description).toContain("OR");
    expect(specificationNot(positive).description).toContain("NOT");
    expect(specificationAllOf([positive]).description).toContain("pos");
    expect(specificationAnyOf([positive]).description).toContain("pos");
  });
});

describe("specificationToDescriptionNode", () => {
  it("uses leaf for hand-built specs without node key", () => {
    const plain: ISpecification<number> = {
      isSatisfiedBy: (n) => n === 42,
      description: "answer",
    };
    expect(specificationToDescriptionNode(plain)).toEqual({
      kind: "leaf",
      description: "answer",
    });
  });

  it("reflects AND/OR/NOT structure", () => {
    const positive = specificationFromPredicate((n: number) => n > 0, "pos");
    const even = specificationFromPredicate((n: number) => n % 2 === 0, "even");
    const andNode = specificationToDescriptionNode(
      specificationAnd(positive, even)
    );
    expect(andNode.kind).toBe("and");
    if (andNode.kind === "and") {
      expect(andNode.left.kind).toBe("leaf");
      expect(andNode.right.kind).toBe("leaf");
    }
    const notNode = specificationToDescriptionNode(specificationNot(positive));
    expect(notNode.kind).toBe("not");
    expect(specificationToDescriptionNode(specificationAllOf([])).kind).toBe(
      "true"
    );
    expect(specificationToDescriptionNode(specificationAnyOf([])).kind).toBe(
      "false"
    );
    const orTree = specificationToDescriptionNode(
      specificationOr(positive, even)
    );
    expect(orTree.kind).toBe("or");
    const anyTree = specificationToDescriptionNode(
      specificationAnyOf([positive, even])
    );
    expect(anyTree.kind).toBe("or");
  });
});
