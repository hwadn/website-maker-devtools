import { string } from "rollup-plugin-string";
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';

import ts from 'typescript'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  plugins: [

    commonjs(),
    // externals(),
    
    typescript({
      exclude: "node_modules/**",
      typescript: ts
    }),
    nodeResolve(),
    string({
      // Required to be specified
      include: "**/*.hbs",

      // Undefined by default
      exclude: ["**/index.html"]
    }),
  ]
}