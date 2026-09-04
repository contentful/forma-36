import { defineConfig } from 'tsdown';

export default defineConfig({
  format: ['cjs', 'esm'],
  target: 'es6',
  platform: 'browser',
  entry: { index: 'src/index.ts' },
  dts: true,
  minify: true,
  sourcemap: true,
  outputOptions(outputOptions, format) {
    if (
      format === 'es' &&
      typeof outputOptions.entryFileNames === 'string' &&
      typeof outputOptions.chunkFileNames === 'string'
    ) {
      if (
        !outputOptions.entryFileNames.endsWith('.mjs') ||
        !outputOptions.chunkFileNames.endsWith('.mjs')
      ) {
        throw new Error(`Unexpected file extension for ESM`);
      }
      outputOptions.entryFileNames = `esm/${outputOptions.entryFileNames.slice(0, -4)}.js`;
      outputOptions.chunkFileNames = `esm/${outputOptions.chunkFileNames.slice(0, -4)}.js`;
    }
    return outputOptions;
  },
});
