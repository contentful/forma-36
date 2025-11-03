import type { StorybookConfig } from '@storybook/react-vite';

import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['./docs/**/*.stories.mdx', '../../packages/**/*.stories.@(ts|md)x'],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  docs: {
    defaultName: 'Documentation',
    docsMode: false,
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: [
        'packages/components/**/src/*.tsx',
        'packages/core/src/**/*.tsx',
      ],
      exclude: [
        'packages/components/icons/**',
        'packages/components/icon/**',
        'packages/components/utils/**',
        'packages/core/**/examples/',
        'packages/components/**/examples/',
      ],
    },
  },
  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
  },
};
export default config;
