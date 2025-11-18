# Building

We are using [tsup](https://tsup.egoist.dev/) and [esbuild](https://esbuild.github.io/) together with [Microbundle](https://www.npmjs.com/package/microbundle) to build our component library.

Each component builds to its own `dist` directory with:

- `index.d.ts` – TypeScript type declaration file
- `index.js` – CJS (CommonJS)
- `index.modern.mjs` – [Modern](https://github.com/developit/microbundle#-modern-mode-) output (work in all modern browsers)
- `index.module.js` – legacy ESM (ES Modules) output (for bundlers)
- `index.umd.js` – legacy UMD (Universal Module Definition) output (for Node & CDN use)

## Create a build of the library

```bash
npm run-script build
```

## Dual-package emitting

We emit CJS and ESM using a dual-package approach with `tsc` and [tsconfig-to-dual-package](https://github.com/azu/tsconfig-to-dual-package/tree/main) for some packages.

This ensures Node/TypeScript point to the right package type (commonjs, module) depending on the consumer's configuration, without the hassle of us to "hack" the main `package.json` and `tsconfig` to satisfy all use cases.

The build has the following structure in its own `dist` directory:

- `./cjs` – CJS (CommonJS) with declaration + inline source map.
- `./esm` – ESM (ES Modules) with declaration + inline source map.
