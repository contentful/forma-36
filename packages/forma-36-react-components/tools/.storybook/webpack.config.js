const path = require('path');
const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  // Need to remove Storybook's CSS loader before adding our own
  config.module.rules.splice(2, 1);

  // TypeScript
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.json', '.css');
  config.module.rules.push({
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: [
      require.resolve('babel-loader'),
      require.resolve('react-docgen-typescript-loader'),
    ],
  });

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
          minimize: true,
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
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          sourceMap: true,
          minimize: true,
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

  config.module.rules.push({
    test: /\.stories\.(js|ts)x?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  return config;
};
