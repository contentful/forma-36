const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');
const calc = require('postcss-calc');

const fs = require('fs');

const css = fs.readFileSync('dist/styles.css', 'utf8');

// Process your CSS with postcss-css-variables
const output = postcss([cssvariables()])
  .use(calc())
  .process(css).css;
fs.writeFile('dist/styles.css', output, err => {
  if (err) {
    throw err;
  }
  console.log('CSS successfully compiled!'); /* eslint-disable-line */
});
