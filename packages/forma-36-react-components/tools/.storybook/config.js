import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import contentfulTheme from './contentful-theme';

// Storybook Addon Dependencies
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// Setup Addons
addDecorator(withKnobs);
addDecorator(withInfo({ header: false }));

// Setup Storybook options
addParameters({ options: { theme: contentfulTheme } });

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
