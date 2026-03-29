import { Bench } from "tinybench";
import { specificationFromPredicate } from "../dist/index.js";

const spec = specificationFromPredicate((n) => n > 0, "positive");

const bench = new Bench({ time: 400 });
bench.add("specification isSatisfiedBy", () => {
  spec.isSatisfiedBy(7);
});

await bench.run();
console.table(bench.table());
