import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

process.env.TZ = 'America/Los_Angeles';

const scriptsDirectory = resolve(__dirname, 'scripts');
const setupFile = resolve(scriptsDirectory, 'test/setupVitest.ts');
const aliases = [
  {
    find: '@/scripts',
    replacement: scriptsDirectory,
  },
  {
    find: /^(\.{1,2}\/.*)\.js$/,
    replacement: '$1',
  },
];
const testFiles = ['packages/components/image/src/**/*.test.tsx'];
const ignoredPaths = [
  '**/node_modules/**',
  '**/dist/**',
  '**/__testfixtures__/**',
  '**/build/**',
];

export default defineConfig({
  resolve: { alias: aliases },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        url: 'http://localhost',
      },
    },
    exclude: ignoredPaths,
    include: testFiles,
    setupFiles: [setupFile],
  },
});
