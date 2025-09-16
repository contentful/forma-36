const globby = require('globby');
const path = require('path');
const fse = require('fs-extra');

// No real replacement for the _.camelCase, only handles this specific case.
function toCamelCase(word) {
  return word
    .split('-')
    .map((key, index) =>
      index === 0 ? key : key.replace(/[A-Z]/i, (match) => match.toUpperCase()),
    )
    .join('');
}

// Maps over object and applies fn in every entry
function mapObject(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(fn));
}

// Apply toCamelCase on keys of an Object
function camelCaseKeys(obj) {
  return mapObject(obj, ([key, value]) => [toCamelCase(key), value]);
}

function pickBy(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(predicate));
}

function findKey(obj, predicate) {
  const [key] = Object.entries(obj).find((entry) => predicate(entry[1]));
  return key || undefined;
}

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
      .map((token) => `--${token}: ${tokens[token]};`)
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
      .map((token) => `--${token}: ${tokens[token]};`)
      .join(' ');

  fse.outputFile(pathName, `:root { ${renderTokenTemplate()} }`);
};

const buildIndexJS = (srcPath, tokens) => {
  const objectLiteral = JSON.stringify(tokens, null, 2);
  const cjs = `Object.defineProperty(exports, "__esModule", { value: true });\nconst tokens = ${objectLiteral};\nmodule.exports = tokens;\nmodule.exports.default = tokens;\n`;
  return fse.outputFile(srcPath, cjs);
};

const buildIndexMJS = (srcPath, tokens) => {
  const objectLiteral = JSON.stringify(tokens, null, 2);
  const esm = `// ESM build for @contentful/f36-tokens\nconst tokens = ${objectLiteral};\nexport default tokens;\nexport { tokens };\n`;
  return fse.outputFile(srcPath.replace(/index\.js$/, 'index.mjs'), esm);
};

function createUnionFromKeys(keys, typename) {
  const concatanated = keys.map((key) => `'${key}'`).join(' | ');
  return `export type ${typename} = | ${concatanated};`;
}

async function createInterfaceDefinition(tokens) {
  const defs = mapObject(tokens, ([key, value]) => [
    key,
    { value, type: typeof value },
  ]);

  let deprecatedTokens = {};
  const deprecatedPaths = (await globby('./src/tokens')).filter((path) =>
    path.includes('-deprecated'),
  );
  deprecatedPaths.forEach((srcPath) => {
    const tokens = require(path.resolve(srcPath));
    const camelCasedTokens = camelCaseKeys(tokens);
    Object.assign(deprecatedTokens, camelCasedTokens);
  });

  const filteredDefs = pickBy(defs, ([key]) => !deprecatedTokens[key]);

  const deprecatedDefinition = Object.keys(deprecatedTokens)
    .map((deprecatedName) => {
      const value = deprecatedTokens[deprecatedName];
      const newTokenName = findKey(filteredDefs, (d) => d.value === value);
      const def = filteredDefs[newTokenName];
      return `
      /**
       * @description ${def.value}
       * @deprecated use tokens.${newTokenName} instead
       */
      "${deprecatedName}": ${def.type}`;
    })
    .join(',');

  const fields = Object.entries(filteredDefs)
    .map(
      ([tokenName, def]) => `
    /**
     * @description ${def.value}
     */
    "${tokenName}": ${def.type}`,
    )
    .join(',');

  return `export type F36Tokens = {
    ${[fields, deprecatedDefinition].join(',')}
  };`;
}

const buildIndexDTS = async (srcPath, tokens) => {
  const createUnionThatStarts = (startsWith, name) => {
    return createUnionFromKeys(
      Object.keys(tokens).filter((name) => {
        const options = Array.isArray(startsWith) ? startsWith : [startsWith];
        return options.reduce((prev, item) => {
          return prev || name.startsWith(item);
        }, false);
      }),
      name,
    );
  };

  const generatePaletteNames = (colors) => {
    const numbers = [];
    const result = [];
    for (let i = 1; i <= 9; i++) {
      numbers.push((i * 100).toString());
    }
    colors.map((color) => {
      numbers.map((number) => {
        result.push(color + number);
      });
    });
    return result;
  };

  return fse.outputFile(
    srcPath,
    `declare module '@contentful/f36-tokens' {
      ${await createInterfaceDefinition(tokens)}
      ${createUnionThatStarts(
        [
          'colorPrimary',
          'colorWarning',
          'colorNegative',
          'colorPositive',
          'colorWhite',
        ].concat(
          generatePaletteNames([
            'gray',
            'blue',
            'green',
            'orange',
            'purple',
            'red',
            'yellow',
          ]),
        ),
        'ColorTokens',
      )}
      ${createUnionThatStarts('spacing', 'SpacingTokens')}
      ${createUnionThatStarts('fontSize', 'FontSizeTokens')}
      ${createUnionThatStarts('lineHeight', 'LineHeightTokens')}
      ${createUnionThatStarts('letterSpacing', 'LetterSpacingTokens')}
      ${createUnionThatStarts('fontWeight', 'FontWeightTokens')}
      ${createUnionThatStarts('fontStack', 'FontStackTokens')}
      ${createUnionThatStarts('boxShadow', 'BoxShadowTokens')}
      ${createUnionThatStarts('borderRadius', 'BorderRadiusTokens')}
      ${createUnionThatStarts('zIndex', 'ZIndexTokens')}
      ${createUnionThatStarts('glow', 'GlowTokens')}
      const tokens: F36Tokens;
      export default tokens;
    }`,
  );
};

// Generate Index
const generateIndex = (paths, extension) => {
  const fileContents = paths
    .map((srcPath) => {
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

  paths.forEach((srcPath) => {
    const tokens = require(path.resolve(srcPath)); // eslint-disable-line

    buildJson(srcPath, tokens);
    buildCssTokens(srcPath, tokens);
    buildScssTokens(srcPath, tokens);

    Object.assign(allTokens, tokens);
  });

  allTokens = camelCaseKeys(allTokens);

  await buildIndexJS('dist/index.js', allTokens);
  await buildIndexMJS('dist/index.js', allTokens);
  await buildIndexDTS('dist/index.d.ts', allTokens);
})();
