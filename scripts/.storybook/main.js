const path = require('path');
const postcssOptions = require('../../packages/forma-36-react-components/tools/postcss.config.js');

module.exports = {
  stories: ['./docs/**/*.stories.mdx', '../../packages/**/*.stories.@(ts|md)x'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
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
            postcssOptions,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /forma-36-fcss\/dist\/styles.css$/,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions,
          },
        },
      ],
    });

    // CSS Modules
    config.module.rules.push({
      test: /\.css$/,
      exclude: [/node_modules/, /\.global\.css$/, /forma-36-fcss/],
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
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions,
          },
        },
      ],
    });

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
