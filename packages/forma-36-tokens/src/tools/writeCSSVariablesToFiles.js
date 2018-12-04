const fs = require('fs');
const jsonToCssVariables = require('json-to-css-variables');
const deleteFolderRecursive = require('./deleteFolderRecursive');

const cssOptions = {
  pretty: true,
  element: ':root',
  unit: '',
};

const writeCSSVariablesToFiles = (tokens, path, extension) => {
  // Remove dist directory if it exists
  deleteFolderRecursive(path);
  fs.mkdirSync(path);

  tokens.forEach((token, index) => {
    fs.writeFileSync(
      `${path}/${Object.keys(token)[0]}.${extension}`,
      jsonToCssVariables(tokens[index][Object.keys(token)[0]], cssOptions),
      { flag: 'wx' },
      err => {
        if (err) throw err;
        console.log(`✌️  ${Object.keys(token)[0]}.${extension} created`); // eslint-disable-line
      },
    );
  });

  fs.readdir(`./dist/${extension}`, (readErr, files) => {
    if (readErr) throw readErr;
    let contentIndex = '';
    let contentColors = '';
    files.forEach(file => {
      contentIndex += `@import './${file}'; \n`;
      if (file.includes('colors')) {
        contentColors += `@import './${file}'; \n`;
      }
    });

    // Create index file
    fs.writeFileSync(
      `./dist/${extension}/index.${extension}`,
      contentIndex,
      { flag: 'wx' },
      err => {
        if (err) throw err;
        console.log(`👽  index.${extension} created`); // eslint-disable-line
      },
    );

    // Create color bundle
    fs.writeFileSync(
      `./dist/${extension}/colors.${extension}`,
      contentColors,
      { flag: 'wx' },
      err => {
        if (err) throw err;
        console.log(`👽  colors.${extension} created`); // eslint-disable-line
      },
    );
  });
};

module.exports = writeCSSVariablesToFiles;
