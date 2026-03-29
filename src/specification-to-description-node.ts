import type { ISpecification } from "./i-specification.js";
import type { SpecificationDescriptionNode } from "./specification-description-node.js";
import { SPECIFICATION_DESCRIPTION_NODE_KEY } from "./specification-description-node-key.js";
import type { SpecificationWithDescriptionNodeGetter } from "./specification-with-description-node-getter.js";

/**
 * Returns a tree of specification structure. Leaf specs (e.g. from predicate) appear as `leaf`.
 */
export function specificationToDescriptionNode<T>(
  spec: ISpecification<T>
): SpecificationDescriptionNode {
  const getter = (spec as SpecificationWithDescriptionNodeGetter<T>)[
    SPECIFICATION_DESCRIPTION_NODE_KEY
  ];
  if (typeof getter === "function") {
    return getter.call(spec);
  }
  return { kind: "leaf", description: spec.description };
}
