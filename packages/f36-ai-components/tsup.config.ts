import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: {
    index: 'src/index.ts',
    aipill: 'src/AiPill/index.ts',
  },
  external: ['react', 'react-dom', '@contentful/f36-*', '@tiptap/*'],
  format: ['cjs', 'esm'],
  legacyOutput: true,
  minify: true,
  platform: 'browser',
  sourcemap: true,
  target: 'es6',
  treeshake: true,
});
