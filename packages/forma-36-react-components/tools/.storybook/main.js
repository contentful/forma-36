const path = require('path');

module.exports = {
  stories: ['./docs/**/*.stories.tsx', '../../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs',
    'storybook-prop-types-addon',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    'storybook-addon-jsx',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.stories\.(js|ts)x?$/,
          include: [path.resolve(__dirname, '../../src/components')],
        },
      },
    },
  ],
};
