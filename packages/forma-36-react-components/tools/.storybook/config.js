import { configure, addDecorator } from '@storybook/react';

// Storybook Addon Depedencies
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import './fonts.css';

// Setup Addons
addDecorator(withKnobs);

addDecorator(
  withOptions({
    name: 'Forma 36 React Components',
    url: '#',
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: false,
  }),
);

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
  require('./../../src/styles/index.global.css'); // Require global styles as last item so that they trump component styles
}

configure(loadStories, module);
