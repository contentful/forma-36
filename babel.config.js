module.exports = (api) => {
  const isTest = api.env('test');
  if (isTest) {
    return {
      presets: [
        [
          '@babel/preset-react',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-env',
        ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
      ],
      plugins: [
        [
          '@emotion',
          {
            sourceMap: true,
            autoLabel: 'dev-only',
            labelFormat: '[local]',
            cssPropOptimization: true,
          },
        ],
      ],
    };
  } else {
    return {
      plugins: [
        [
          '@emotion',
          {
            sourceMap: true,
            autoLabel: 'dev-only',
            labelFormat: '[local]',
            cssPropOptimization: true,
          },
        ],
      ],
    };
  }
};
