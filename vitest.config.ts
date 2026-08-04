import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

process.env.TZ = 'America/Los_Angeles';

const scriptsDirectory = resolve(__dirname, 'scripts');
const setupFile = resolve(scriptsDirectory, 'test/setupTests.ts');
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
const testFiles = ['**/*.{test,spec}.{ts,tsx,js,jsx}'];
const ignoredPaths = [
  '**/node_modules/**',
  '**/dist/**',
  '**/__testfixtures__/**',
  '**/build/**',
];

export default defineConfig({
  resolve: { alias: aliases },
  test: {
    projects: [
      {
        resolve: { alias: aliases },
        test: {
          clearMocks: true,
          environment: 'jsdom',
          environmentOptions: {
            jsdom: {
              url: 'http://localhost',
            },
          },
          exclude: [...ignoredPaths, '**/packages/forma-36-codemod/**'],
          include: testFiles,
          name: 'jsdom',
          root: __dirname,
          setupFiles: [setupFile],
        },
      },
      {
        resolve: { alias: aliases },
        test: {
          clearMocks: true,
          environment: 'node',
          exclude: ignoredPaths,
          include: testFiles,
          name: 'codemod',
          root: resolve(__dirname, 'packages/forma-36-codemod'),
          setupFiles: [],
        },
      },
    ],
  },
});
