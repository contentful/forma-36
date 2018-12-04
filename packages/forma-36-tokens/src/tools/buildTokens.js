const fs = require('fs');
const writeCSSVariablesToFiles = require('./writeCSSVariablesToFiles.js');
const deleteFolderRecursive = require('./deleteFolderRecursive.js');

// Remove dist directory if it exists
deleteFolderRecursive('./dist');
fs.mkdirSync('./dist');
fs.mkdirSync('./dist/json');
fs.readdir('src/tokens', (readErr, files) => {
  if (readErr) throw readErr;

  const allTokens = [];
  files.forEach(file => {
    const token = require(`../tokens/${file}`); // eslint-disable-line
    const tokenKey = file.replace('.js', '');
    allTokens.push({ [tokenKey]: token });
    fs.writeFileSync(
      `./dist/json/${tokenKey}.json`,
      JSON.stringify(token),
      { flag: 'wx' },
      err => {
        if (err) throw err;
        console.log(`✌️  ${Object.keys(token)[0]}.json created`); // eslint-disable-line
      },
    );
  });
  fs.writeFileSync(
    `./dist/json/tokens.json`,
    JSON.stringify(allTokens),
    { flag: 'wx' },
    err => {
      if (err) throw err;
      console.log(`👽  tokens.json created`); // eslint-disable-line
    },
  );

  // Generate CSS / SCSS variables
  writeCSSVariablesToFiles(allTokens, './dist/css/', 'css');
  writeCSSVariablesToFiles(allTokens, './dist/scss/', 'scss');
});
