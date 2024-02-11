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
import { visualizer } from "rollup-plugin-visualizer";
import sourcemaps from 'rollup-plugin-sourcemaps';

/**
 * Rollup configuration to build the main bundle.
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        compact: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        compact: true,
      },
    ],
    external: ['react', 'react-dom'],
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

      preserveDirectives(),
      visualizer({sourcemap: true, template: 'sunburst'}),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
        dts(),
        del({ hook: "buildEnd", targets: ["dist/esm/types", "dist/cjs/types"] })
    ],
    external: [/\.css$/],
  },
];
