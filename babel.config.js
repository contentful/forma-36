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
    '@parcel/babel-preset-env',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-emotion',
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
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
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-syntax-class-properties',
    'transform-glob-import',
    'babel-plugin-macros',
  ],
};
