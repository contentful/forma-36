import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['cjs', 'esm'],
  target: 'es6',
  platform: 'browser',
  minify: true,
  sourcemap: true,
  dts: false,
  outputOptions(options, format) {
    options.entryFileNames = format === 'es' ? 'index.module.js' : 'index.js';
    options.chunkFileNames =
      format === 'es' ? '[name]-[hash].module.js' : '[name]-[hash].js';
    return options;
  },
});
