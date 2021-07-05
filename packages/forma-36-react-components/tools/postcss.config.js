const path = require('path');
const postCssImport = require('postcss-import');
const postCssUrl = require('postcss-url');
const postcssPresetEnv = require('postcss-preset-env');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    postCssImport({
      path: [path.resolve(__dirname, '../src/styles')],
    }),
    postCssUrl,
    postcssPresetEnv({
      stage: 0, // Allow experimental CSS features
      browsers: 'extends @contentful/browserslist-config',
      preserve: false, // Remove the pre-polyfilled CSS
    }),
    postcssCustomProperties(),
  ],
};
