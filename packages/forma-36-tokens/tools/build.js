const globby = require('globby');
const path = require('path');
const fse = require('fs-extra');

// Build JSON Tokens
const buildJson = async (srcPath, tokens) => {
  const pathName = srcPath
    .replace('js', 'json')
    .replace('src/tokens', 'dist/json');

  (async () => {
    await fse.outputJson(pathName, tokens);
  })();
};

// Build CSS Tokens
const buildCssTokens = (srcPath, tokens) => {
  const pathName = srcPath
    .replace('js', 'css')
    .replace('src/tokens', 'dist/css');

  const renderTokenTemplate = () =>
    Object.keys(tokens)
      .map(token => `--${token}: ${tokens[token]};`)
      .join(' ');

  fse.outputFile(pathName, `:root { ${renderTokenTemplate()} }`);
};

// Build SCSS Tokens
const buildScssTokens = (srcPath, tokens) => {
  const pathName = srcPath
    .replace('js', 'scss')
    .replace('src/tokens', 'dist/scss');

  const renderTokenTemplate = () =>
    Object.keys(tokens)
      .map(token => `--${token}: ${tokens[token]};`)
      .join(' ');

  fse.outputFile(pathName, `:root { ${renderTokenTemplate()} }`);
};

// Generate Index
const generateIndex = (paths, extension) => {
  const fileContents = paths
    .map(srcPath => {
      let fileName;

      if (extension === 'css') {
        fileName = srcPath.replace('js', 'css').replace('src/tokens', '.');
      }

      if (extension === 'scss') {
        fileName = srcPath.replace('js', 'scss').replace('src/tokens', '.');
      }

      return `@import '${fileName}';`;
    })
    .join('\n');

  fse.outputFile(`dist/${extension}/index.${extension}`, fileContents);
};

(async () => {
  const paths = await globby('./src/tokens');
  generateIndex(paths, 'css');
  generateIndex(paths, 'scss');

  paths.forEach(srcPath => {
    const tokens = require(path.resolve(srcPath)); // eslint-disable-line

    buildJson(srcPath, tokens);
    buildCssTokens(srcPath, tokens);
    buildScssTokens(srcPath, tokens);
  });
})();
