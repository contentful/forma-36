const emotionPlugin = [
  '@emotion',
  {
    sourceMap: (process.env.NODE_ENV = 'dev-only'),
    autoLabel: (process.env.NODE_ENV = 'dev-only'),
    labelFormat: '[local]',
    cssPropOptimization: true,
  },
];

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
      plugins: [emotionPlugin],
    };
  } else {
    return {
      plugins: [emotionPlugin],
    };
  }
};
