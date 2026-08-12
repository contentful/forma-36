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
  'packages/components/accordion/src/**/*.test.tsx',
  'packages/components/asset/src/**/*.test.tsx',
  'packages/components/badge/src/**/*.test.tsx',
  'packages/components/button/src/**/*.test.tsx',
  'packages/components/card/src/**/*.test.tsx',
  'packages/components/collapse/src/**/*.test.tsx',
  'packages/components/copybutton/src/**/*.test.tsx',
  'packages/components/drag-handle/src/**/*.test.tsx',
  'packages/components/header/src/**/*.test.tsx',
  'packages/components/icon/src/**/*.test.tsx',
  'packages/components/image/src/**/*.test.tsx',
  'packages/components/layout/src/**/*.test.tsx',
  'packages/components/list/src/**/*.test.tsx',
  'packages/components/note/src/**/*.test.tsx',
  'packages/components/navlist/src/**/*.test.tsx',
  'packages/components/pagination/src/**/*.test.tsx',
  'packages/components/pill/src/**/*.test.tsx',
  'packages/components/pill-next/src/**/*.test.tsx',
  'packages/components/progress-stepper/src/**/*.test.tsx',
  'packages/components/skeleton/src/**/*.test.tsx',
  'packages/components/spinner/src/**/*.test.tsx',
  'packages/components/tabs/src/**/*.test.tsx',
  'packages/components/text-link/src/**/*.test.tsx',
  'packages/components/typography/src/**/*.test.tsx',
  'packages/components/usage-card/src/**/*.test.tsx',
  'packages/components/usage-count/src/**/*.test.tsx',
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
