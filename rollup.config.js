import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'nurbs',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve({
        preferBuiltins: true
      }), // so Rollup can find require modules
      commonjs(),
      builtins(),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
        runtimeHelpers: true
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
