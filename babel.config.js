const emotionPlugin = [
  'babel-plugin-emotion',
  {
    sourceMap: process.env.NODE_ENV !== 'production',
    autoLabel: process.env.NODE_ENV !== 'production',
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
