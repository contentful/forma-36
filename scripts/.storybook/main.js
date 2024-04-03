import { dirname, join } from 'path';
const path = require('path');

module.exports = {
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-a11y'),
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.stories\.(ts|md)x$/,
          include: [path.resolve(__dirname, '../../packages')],
        },
      },
    },
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],

  staticDirs: ['./public'],
  stories: ['./docs/**/*.stories.mdx', '../../packages/**/*.stories.@(ts|md)x'],

  webpackFinal: async (config, { configType }) => {
    // We need to split into chunks to avoid terser running out of memory
    // when trying to minify one huge JS file
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 30 * 1024, // 30KB
        maxSize: 1024 * 1024, // 1MB
      },
    };

    return config;
  },

  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
