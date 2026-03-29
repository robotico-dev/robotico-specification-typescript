import type { ISpecification } from "./i-specification.js";
import type { SpecificationDescriptionNode } from "./specification-description-node.js";
import { SPECIFICATION_DESCRIPTION_NODE_KEY } from "./specification-description-node-key.js";
import { specificationOr } from "./specification-or.js";

export function specificationAnyOf<T>(
  specs: readonly ISpecification<T>[]
): ISpecification<T> {
  if (specs.length === 0) {
    return {
      isSatisfiedBy(): boolean {
        return false;
      },
      description: "FALSE",
      [SPECIFICATION_DESCRIPTION_NODE_KEY](): SpecificationDescriptionNode {
        return { kind: "false" };
      },
    } as ISpecification<T>;
  }
  let acc = specs[0]!;
  for (let i = 1; i < specs.length; i++) {
    acc = specificationOr(acc, specs[i]!);
  }
  return acc;
}
