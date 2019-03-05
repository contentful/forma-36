import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import contentfulTheme from './contentful-theme';

// Storybook Addon Depedencies
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';

// Setup Addons
addDecorator(withKnobs);

addParameters({
  options: {
    name: 'Forma 36 React Components',
    theme: contentfulTheme,
  },
});

// Load Stories
const reqGeneral = require.context('./docs', true, /\.stories\.js$/);
const reqTokens = require.context('./tokens', true, /\.stories\.js$/);
const reqComponents = require.context(
  '../../src/components',
  true,
  /\.stories\.(ts|js)x?$/,
);

function loadStories() {
  reqGeneral.keys().forEach(filename => reqGeneral(filename));
  reqTokens.keys().forEach(filename => reqTokens(filename));
  reqComponents.keys().forEach(filename => reqComponents(filename));
  require('./storybook.global.css'); // Require global styles as last item so that they trump component styles
}

configure(loadStories, module);
