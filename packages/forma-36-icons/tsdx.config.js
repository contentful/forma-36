const path = require('path');
const postcss = require('rollup-plugin-postcss');
const svgr = require('@svgr/rollup').default;
const url = require('@rollup/plugin-url');

module.exports = {
  rollup(config, _options) {
    config.plugins = [
      postcss({
        config: {
          path: path.resolve(__dirname, './tools/postcss.config.js'),
        },
        modules: true,
        extract: 'styles.css',
      }),
      url(),
      svgr({
        ref: true,
      }),
      ...config.plugins,
    ];

    return config;
  },
};