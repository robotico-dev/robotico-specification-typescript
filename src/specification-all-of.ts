import type { ISpecification } from "./i-specification.js";
import type { SpecificationDescriptionNode } from "./specification-description-node.js";
import { SPECIFICATION_DESCRIPTION_NODE_KEY } from "./specification-description-node-key.js";
import { specificationAnd } from "./specification-and.js";

export function specificationAllOf<T>(
  specs: readonly ISpecification<T>[]
): ISpecification<T> {
  if (specs.length === 0) {
    return {
      isSatisfiedBy(): boolean {
        return true;
      },
      description: "TRUE",
      [SPECIFICATION_DESCRIPTION_NODE_KEY](): SpecificationDescriptionNode {
        return { kind: "true" };
      },
    } as ISpecification<T>;
  }
  let acc = specs[0]!;
  for (let i = 1; i < specs.length; i++) {
    acc = specificationAnd(acc, specs[i]!);
  }
  return acc;
}
