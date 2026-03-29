import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
    globals: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
      exclude: [
        "src/**/*.test.ts",
        "**/index.ts",
        "**/i-specification.ts",
        "**/specification-description-node.ts",
        "**/specification-description-node-union.ts",
        "**/specification-description-node-leaf.ts",
        "**/specification-description-node-and.ts",
        "**/specification-description-node-or.ts",
        "**/specification-description-node-not.ts",
        "**/specification-description-node-true.ts",
        "**/specification-description-node-false.ts",
        "**/specification-with-description-node-getter.ts",
      ],
      thresholds: { branches: 95, functions: 95, lines: 95, statements: 95 },
    },
  },
});
