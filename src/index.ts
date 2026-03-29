/**
 * @robotico-dev/specification — composable in-memory specifications (with `@robotico-dev/option`).
 *
 * @packageDocumentation
 */

export type { ISpecification } from "./i-specification.js";
export type { SpecificationDescriptionNode } from "./specification-description-node.js";
export type { SpecificationDescriptionNodeAnd } from "./specification-description-node-and.js";
export type { SpecificationDescriptionNodeFalse } from "./specification-description-node-false.js";
export type { SpecificationDescriptionNodeLeaf } from "./specification-description-node-leaf.js";
export type { SpecificationDescriptionNodeNot } from "./specification-description-node-not.js";
export type { SpecificationDescriptionNodeOr } from "./specification-description-node-or.js";
export type { SpecificationDescriptionNodeTrue } from "./specification-description-node-true.js";
export type { SpecificationWithDescriptionNodeGetter } from "./specification-with-description-node-getter.js";
export { specificationToDescriptionNode } from "./specification-to-description-node.js";
export { specificationFromPredicate } from "./specification-from-predicate.js";
export { specificationAnd } from "./specification-and.js";
export { specificationOr } from "./specification-or.js";
export { specificationNot } from "./specification-not.js";
export { specificationAllOf } from "./specification-all-of.js";
export { specificationAnyOf } from "./specification-any-of.js";
export { firstSatisfying } from "./first-satisfying.js";
export { specificationIsSatisfiedResult } from "./specification-is-satisfied-result.js";
export { SPECIFICATION_VERSION } from "./specification-version.js";
