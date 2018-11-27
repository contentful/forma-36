import { configure, addDecorator } from '@storybook/react';

// Storybook Addon Depedencies
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

// Setup Addons
addDecorator(withKnobs);

withInfo({
  header: false,
});

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
  /\.stories\.js$/,
);

function loadStories() {
  reqGeneral.keys().forEach(filename => reqGeneral(filename));
  reqTokens.keys().forEach(filename => reqTokens(filename));
  reqComponents.keys().forEach(filename => reqComponents(filename));
}

configure(loadStories, module);
