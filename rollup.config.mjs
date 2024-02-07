import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import {dts} from "rollup-plugin-dts";
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from "./package.json" assert { type: "json" };
import del from "rollup-plugin-delete";
import preserveDirectives from "rollup-plugin-preserve-directives"

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    onwarn(warning) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;

      // Log the warning to the console
      console.warn(`Rollup warning: ${warning.message}`);
    },
    plugins: [
      peerDepsExternal(),

      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),

      terser(),
      preserveDirectives()
    ],
  },
  {
    input: "dist/esm/types/components/Editor/components/BlockEditor/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
        dts(),
        del({ hook: "buildEnd", targets: ["dist/esm/types", "dist/cjs/types"] })
    ],
    external: [/\.css$/],
  },
];
