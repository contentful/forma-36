import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entryPoints: ['src/index.ts'],
  external: ['react', 'react-dom', '@contentful/f36-*'],
  format: ['cjs', 'esm'],
  minify: true,
  platform: 'browser',
  sourcemap: true,
  target: 'es2020',
  treeshake: true,
});
