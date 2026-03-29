import type { SpecificationDescriptionNode } from "./specification-description-node-union.js";

/** Logical OR of two sub-trees. */
export type SpecificationDescriptionNodeOr = Readonly<{
  readonly kind: "or";
  readonly left: SpecificationDescriptionNode;
  readonly right: SpecificationDescriptionNode;
}>;
