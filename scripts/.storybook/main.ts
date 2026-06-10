import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

import { join, dirname } from 'path';

const require = createRequire(import.meta.url);
const fromRoot = (p: string) =>
  join(fileURLToPath(new URL('../..', import.meta.url)), p);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  staticDirs: ['./public'],
  stories: ['./docs/**/*.mdx', '../../packages/**/*.stories.@(ts|md)x'],
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
      tsconfigPath: fromRoot('tsconfig.json'),
      include: [
        fromRoot('packages/components/**/src/*.tsx'),
        fromRoot('packages/core/src/**/*.tsx'),
      ],
      exclude: [
        fromRoot('packages/components/icons/**'),
        fromRoot('packages/components/icon/**'),
        fromRoot('packages/components/utils/**'),
        fromRoot('packages/core/**/examples/'),
        fromRoot('packages/components/**/examples/'),
      ],
    },
  },
  async viteFinal(config) {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include ?? []),
          '@contentful/f36-icons',
          '@phosphor-icons/react',
        ],
      },
    };
  },
};
export default config;
