import type { SpecificationDescriptionNode } from "./specification-description-node-union.js";

/** Logical AND of two sub-trees. */
export type SpecificationDescriptionNodeAnd = Readonly<{
  readonly kind: "and";
  readonly left: SpecificationDescriptionNode;
  readonly right: SpecificationDescriptionNode;
}>;
