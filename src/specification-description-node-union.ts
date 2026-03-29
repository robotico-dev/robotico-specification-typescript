import type { SpecificationDescriptionNodeAnd } from "./specification-description-node-and.js";
import type { SpecificationDescriptionNodeFalse } from "./specification-description-node-false.js";
import type { SpecificationDescriptionNodeLeaf } from "./specification-description-node-leaf.js";
import type { SpecificationDescriptionNodeNot } from "./specification-description-node-not.js";
import type { SpecificationDescriptionNodeOr } from "./specification-description-node-or.js";
import type { SpecificationDescriptionNodeTrue } from "./specification-description-node-true.js";

/** Structured AST for debugging or translating specifications. */
export type SpecificationDescriptionNode =
  | SpecificationDescriptionNodeLeaf
  | SpecificationDescriptionNodeAnd
  | SpecificationDescriptionNodeOr
  | SpecificationDescriptionNodeNot
  | SpecificationDescriptionNodeTrue
  | SpecificationDescriptionNodeFalse;
