const path = require('path');

module.exports = {
  stories: ['./docs/**/*.stories.mdx', '../../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    'storybook-prop-types-addon',
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
