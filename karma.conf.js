module.exports = function(config) {
  config.set({
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-firefox-launcher',
      'karma-rollup-preprocessor'
    ],

    frameworks: ['mocha'],
    reporters: ['mocha'],
    browsers: ['Firefox'],

    logLevel: config.LOG_INFO, // disable > error > warn > info > debug
    captureTimeout: 60000,
    autoWatch: false,
    singleRun: true,
    colors: true,
    port: 9876,

    basePath: '',
    files: [
      { pattern: 'test/test.js', watched: false }
    ],
    exclude: [],

    preprocessors: {
      'test/test.js': ['rollup']
    },

    rollupPreprocessor: {
      name: 'nurbs',
      format: 'iife',
      sourcemap: 'inline',
      plugins: [
        require('rollup-plugin-node-resolve')(),
        require('rollup-plugin-commonjs')(),
        require('rollup-plugin-node-builtins')(),
        require('rollup-plugin-babel')({
          exclude: 'node_modules/**', // only transpile our source code
          runtimeHelpers: true
        })
      ]
    }

  })
}
