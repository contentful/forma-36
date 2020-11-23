const path = require('path');

module.exports = {
  stories: [
    './docs/**/*.stories.mdx',
    '../../src/components/**/*.stories.@(ts|md)x',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    'storybook-prop-types-addon',
    'storybook-addon-jsx',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.stories\.(ts|md)x$/,
          include: [path.resolve(__dirname, '../../src/components')],
        },
      },
    },
  ],

  webpackFinal: async (config, { configType }) => {
    // Need to remove Storybook's CSS loader before adding our own
    config.module.rules = config.module.rules.filter(
      (rule) => rule.test.toString() !== '/\\.css$/',
    );

    // Global CSS
    config.module.rules.push({
      test: /\.global.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
            // minimize: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, '../postcss.config.js'),
            },
          },
        },
      ],
    });

    // CSS Modules
    config.module.rules.push({
      test: /\.css$/,
      exclude: [/node_modules/, /\.global\.css$/],
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
            sourceMap: true,
            // minimize: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, '../postcss.config.js'),
            },
          },
        },
      ],
    });

    return config;
  },
};