const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.stories\.(ts|md)x$/,
          include: [path.resolve(__dirname, '../../packages')],
        },
      },
    },
  ],

  core: {
    builder: 'webpack5',
  },

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

    const customConfig = { ...config };

    if (!customConfig.resolve) {
      customConfig.resolve = {};
    }

    // Resolve ESM relative paths .js -> .tsx
    customConfig.resolve.extensionAlias = {
      '.js': ['.tsx', '.ts', '.js'],
    };

    return config;
  },
};
