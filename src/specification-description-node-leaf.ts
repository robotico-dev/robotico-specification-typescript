/** Leaf node: a single predicate description string. */
export type SpecificationDescriptionNodeLeaf = Readonly<{
  readonly kind: "leaf";
  readonly description: string;
}>;
