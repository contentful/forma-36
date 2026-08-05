import { defineConfig } from 'vitest/config';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

process.env.TZ = 'Asia/Tokyo';

const rootDirectory = import.meta.dirname;
const scriptsDirectory = resolve(rootDirectory, 'scripts');
const setupFile = resolve(scriptsDirectory, 'test/setupVitest.ts');
const workspaceDirectories = [
  ...readdirSync(resolve(rootDirectory, 'packages'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => resolve(rootDirectory, 'packages', entry.name)),
  ...readdirSync(resolve(rootDirectory, 'packages/components'), {
    withFileTypes: true,
  })
    .filter((entry) => entry.isDirectory())
    .map((entry) => resolve(rootDirectory, 'packages/components', entry.name)),
];
const workspaceAliases = workspaceDirectories.flatMap((directory) => {
  const packagePath = resolve(directory, 'package.json');

  if (!existsSync(packagePath)) {
    return [];
  }

  const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
  const source = resolve(directory, packageJson.source || 'src/index.ts');

  if (!packageJson.name || !existsSync(source)) {
    return [];
  }

  return [{ find: packageJson.name, replacement: source }];
});
const aliases = [
  ...workspaceAliases,
  {
    find: '@/scripts',
    replacement: scriptsDirectory,
  },
  {
    find: /^(\.{1,2}\/.*)\.js$/,
    replacement: '$1',
  },
];
const testFiles = [
  'packages/components/asset/src/**/*.test.tsx',
  'packages/components/image/src/**/*.test.tsx',
];
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
