import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entryPoints: ['src/index.ts'],
  external: ['react', 'react-dom', '@contentful/f36-*'],
  format: ['cjs', 'esm'],
  legacyOutput: true,
  minify: true,
  platform: 'browser',
  sourcemap: true,
  target: 'es6',
  treeshake: true,
});
