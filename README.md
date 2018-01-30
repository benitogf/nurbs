# rollup-starter-browser-lib

This repo contains an example of how to create a browser library using Rollup, including testing with karma, mocha and chai.

We're creating a library called `Nurbs`, which is just a constructor

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/benitogf/nurbs
cd nurbs
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/nurbs.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/nurbs.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/nurbs.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`npm test` builds the library, then tests it on firefox, additional karma launchers could be added.

## Variations

* [lunch-time](https://github.com/rollup/rollup-starter-lib) - how to create a library using Rollup, including importing a module from node_modules and converting it from CommonJS.
* [babel](https://github.com/rollup/rollup-starter-lib/tree/babel) — illustrates writing the source code in ES2015 and transpiling it for older environments with [Babel](https://babeljs.io/)
* [buble](https://github.com/rollup/rollup-starter-lib/tree/buble) — similar, but using [Bublé](https://buble.surge.sh/) which is a faster alternative with less configuration



## License

[MIT](LICENSE).
