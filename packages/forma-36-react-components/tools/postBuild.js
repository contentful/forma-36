const path = require('path');
const copyFile = require('fs').copyFileSync;

const distDir = path.join(__dirname, '../dist/');

/**
 * This script is necessary because it creates an `index.js` file for the alpha
 * directory, making it possible to actually import the alpha components.
 * Unfortunately tsdx doesn't currently support outputting multiple builds, so
 * this bit of custom post build work is required.
 */
(() => {
  copyFile(`${distDir}index.js`, `${distDir}alpha/index.js`);
})();
