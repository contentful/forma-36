const path = require('path');

module.exports = {
  stories: ['./docs/**/*.stories.mdx', '../../packages/**/*.stories.@(ts|md)x'],
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

  webpackFinal: async (config, { configType }) => {
    // Need to remove Storybook's CSS loader before adding our own
    // config.module.rules = config.module.rules.filter(
    //   (rule) => rule.test.toString() !== '/\\.css$/',
    // );

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
};
