const fs = require('fs');

exports.onPostBuild = () => {
  fs.copyFileSync('./_redirects', './public/_redirects');
  console.log('redirect added!'); // eslint-disable-line
};
