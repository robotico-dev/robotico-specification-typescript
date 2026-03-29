import type { SpecificationDescriptionNode } from "./specification-description-node-union.js";

/** Logical NOT of a sub-tree. */
export type SpecificationDescriptionNodeNot = Readonly<{
  readonly kind: "not";
  readonly inner: SpecificationDescriptionNode;
}>;
