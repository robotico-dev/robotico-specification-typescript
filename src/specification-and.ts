import type { ISpecification } from "./i-specification.js";
import type { SpecificationDescriptionNode } from "./specification-description-node.js";
import { SPECIFICATION_DESCRIPTION_NODE_KEY } from "./specification-description-node-key.js";
import { specificationToDescriptionNode } from "./specification-to-description-node.js";

export function specificationAnd<T>(
  left: ISpecification<T>,
  right: ISpecification<T>
): ISpecification<T> {
  return {
    isSatisfiedBy(candidate: T): boolean {
      return left.isSatisfiedBy(candidate) && right.isSatisfiedBy(candidate);
    },
    get description(): string {
      return `(${left.description} AND ${right.description})`;
    },
    [SPECIFICATION_DESCRIPTION_NODE_KEY](): SpecificationDescriptionNode {
      return {
        kind: "and",
        left: specificationToDescriptionNode(left),
        right: specificationToDescriptionNode(right),
      };
    },
  } as ISpecification<T>;
}
