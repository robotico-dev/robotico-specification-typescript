/**
 * Composable boolean criterion over `T` (in-memory evaluation).
 */
export interface ISpecification<T> {
  isSatisfiedBy(candidate: T): boolean;
  readonly description: string;
}
