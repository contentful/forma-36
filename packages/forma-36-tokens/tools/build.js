const globby = require('globby');
const path = require('path');
const fse = require('fs-extra');
const _ = require('lodash');

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

const buildIndexJS = (srcPath, tokens) => {
  return fse.outputFile(
    srcPath,
    `
    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    module.exports = ${JSON.stringify(tokens, null, 2)}
    `,
  );
};

const specificTypes = {
  fontWeightNormal: 'number',
  fontWeightMedium: 'number',
  fontWeightDemiBold: 'number'
}

function createInterfaceDefinition(tokens) {
  const defs = _.mapValues(tokens, (value, key) => {

    return {
      value: value,
      type: specificTypes[key] || 'string',
    };
  });

  const fields = _.map(
    defs,
    (def, tokenName) => `
    /**
     * ${def.value}
     */
    "${tokenName}": ${def.type}`,
  ).join(',');

  return `interface F36Tokens {
    ${fields}
  }`;
}

const buildIndexDTS = (srcPath, tokens) => {
  return fse.outputFile(
    srcPath,
    `declare module '@contentful/forma-36-tokens' {
      ${createInterfaceDefinition(tokens)}
      const tokens: F36Tokens;
      export default tokens;
    }`,
  );
};

// Generate Index
const generateIndex = (paths, extension) => {
  const fileContents = paths
    .map(srcPath => {
      let fileName;

      if (extension === 'css') {
        fileName = srcPath.replace('js', 'css').replace('src/tokens', '.');
        return `@import '${fileName}';`;
      }

      if (extension === 'scss') {
        fileName = srcPath.replace('js', 'scss').replace('src/tokens', '.');
        return `@import '${fileName}';`;
      }
      return '';
    })
    .join('\n');

  fse.outputFile(`dist/${extension}/index.${extension}`, fileContents);
};

(async () => {
  const paths = await globby('./src/tokens');
  generateIndex(paths, 'css');
  generateIndex(paths, 'scss');

  let allTokens = {};

  paths.forEach(srcPath => {
    const tokens = require(path.resolve(srcPath)); // eslint-disable-line

    buildJson(srcPath, tokens);
    buildCssTokens(srcPath, tokens);
    buildScssTokens(srcPath, tokens);

    _.assign(allTokens, tokens);
  });

  allTokens = _.mapKeys(allTokens, (value, key) => {
    return _.camelCase(key);
  });

  await buildIndexJS('dist/index.js', allTokens);
  await buildIndexDTS('dist/index.d.ts', allTokens);
})();
