# @robotico-dev/specification

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![ESM](https://img.shields.io/badge/module-ESM-FFCA28)](https://nodejs.org/api/esm.html) [![Vitest](https://img.shields.io/badge/tests-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/) [![ESLint](https://img.shields.io/badge/lint-ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

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
