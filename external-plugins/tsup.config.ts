import { defineConfig } from "tsup";

const SINGLETON_EXTERNALS = [
  "preact",
  "preact/hooks",
  "preact/jsx-runtime",
  "preact/compat",
  "@quartz-community/types",
  "hast",
  "vfile",
  "vfile/*",
  "unified",
];

export default defineConfig({
  entry: {
    index: "src/index.ts",
    components: "src/components.tsx",
  },
  format: ["esm"],
  dts: true,
  tsconfig: "tsconfig.build.json",
  sourcemap: true,
  clean: true,
  treeshake: true,
  target: "es2022",
  splitting: false,
  noExternal: [/.*/],
  external: SINGLETON_EXTERNALS,
  outDir: "dist",
  platform: "node",
});
