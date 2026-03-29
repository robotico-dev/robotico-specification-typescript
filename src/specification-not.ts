import type { ISpecification } from "./i-specification.js";
import type { SpecificationDescriptionNode } from "./specification-description-node.js";
import { SPECIFICATION_DESCRIPTION_NODE_KEY } from "./specification-description-node-key.js";
import { specificationToDescriptionNode } from "./specification-to-description-node.js";

export function specificationNot<T>(spec: ISpecification<T>): ISpecification<T> {
  return {
    isSatisfiedBy(candidate: T): boolean {
      return !spec.isSatisfiedBy(candidate);
    },
    get description(): string {
      return `NOT (${spec.description})`;
    },
    [SPECIFICATION_DESCRIPTION_NODE_KEY](): SpecificationDescriptionNode {
      return {
        kind: "not",
        inner: specificationToDescriptionNode(spec),
      };
    },
  } as ISpecification<T>;
}
