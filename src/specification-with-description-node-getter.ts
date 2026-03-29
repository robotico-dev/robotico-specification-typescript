import type { ISpecification } from "./i-specification.js";
import type { SpecificationDescriptionNode } from "./specification-description-node.js";
import { SPECIFICATION_DESCRIPTION_NODE_KEY } from "./specification-description-node-key.js";

/**
 * Optional structured description accessor on composite specifications.
 */
export type SpecificationWithDescriptionNodeGetter<T> = ISpecification<T> & {
  [SPECIFICATION_DESCRIPTION_NODE_KEY]?: () => SpecificationDescriptionNode;
};
