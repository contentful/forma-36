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

    // Allow importing JS files without fully specified file endings from .mjs
    // files. This is to avoid dealing with file endings just yet
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ];

    return config;
  },
};
