module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    [
      '@parcel/babel-preset-env',
      {
        loose: true,
      },
    ],
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: 'dev-only',
        labelFormat: '[local]',
      },
    ],
    ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
  ],
  plugins: [
    [
      '@parcel/babel-plugin-transform-runtime',
      {
        version: '^7.6.2',
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-syntax-class-properties',
    'transform-glob-import',
    'babel-plugin-macros',
  ],
};
