const fs = require('fs');

exports.onPostBuild = () => {
  fs.copyFileSync('./_redirects', './public/_redirects', (err) => {
    if (err) throw err;
    console.log('redirect added!'); // eslint-disable-line
  });
};
