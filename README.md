# @robotico-dev/specification

Composable in-memory specifications: AND, OR, NOT, `allOf`, `anyOf`, and **`firstSatisfying`** (via peer **`@robotico-dev/option`**). Aligned with Robotico.Specification (C#).

## Install

```bash
npm install @robotico-dev/specification @robotico-dev/option
```

## Usage

```ts
import {
  specificationFromPredicate,
  specificationAnd,
  specificationNot,
  firstSatisfying,
} from "@robotico-dev/specification";
import { isSome } from "@robotico-dev/option";

const adult = specificationFromPredicate((p: { age: number }) => p.age >= 18, "adult");
const senior = specificationFromPredicate((p: { age: number }) => p.age >= 65, "senior");
const workingAge = specificationAnd(adult, specificationNot(senior));

const match = firstSatisfying([{ age: 10 }, { age: 30 }], adult);
if (isSome(match)) console.log(match.value);

import { specificationToDescriptionNode } from "@robotico-dev/specification";
specificationToDescriptionNode(workingAge);
```

Algebra properties are checked with **fast-check** in `specification.property.test.ts`. Run `npm run docs` for TypeDoc.

Publishing matches other `@robotico-dev/*` packages (GitHub Packages `publishConfig`).

## License

MIT
