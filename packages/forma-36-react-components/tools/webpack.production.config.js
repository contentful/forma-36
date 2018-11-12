const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'styles.css',
    chunkFilename: 'chunk_[name]_[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
                  path: path.resolve(__dirname, './postcss.config.js'),
                },
              },
            },
          ],
        }),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [new ExtractTextPlugin('styles.css'), new OptimizeCssAssetsPlugin()],
};
