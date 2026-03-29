import type { ISpecification } from "./i-specification.js";
import type { SpecificationDescriptionNode } from "./specification-description-node.js";
import { SPECIFICATION_DESCRIPTION_NODE_KEY } from "./specification-description-node-key.js";

export function specificationFromPredicate<T>(
  predicate: (entity: T) => boolean,
  description: string
): ISpecification<T> {
  return {
    isSatisfiedBy(candidate: T): boolean {
      return predicate(candidate);
    },
    description,
    [SPECIFICATION_DESCRIPTION_NODE_KEY](): SpecificationDescriptionNode {
      return { kind: "leaf", description };
    },
  } as ISpecification<T>;
}
