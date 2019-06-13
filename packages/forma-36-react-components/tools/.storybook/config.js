import { configure, addParameters, addDecorator } from '@storybook/react';
import contentfulTheme from './contentful-theme';

// Storybook Addon Dependencies
import { withKnobs } from '@storybook/addon-knobs';
import { withPropTypes } from 'storybook-prop-types-addon';

// Setup Addons
addDecorator(withKnobs);
addDecorator(withPropTypes);

// Setup Storybook options
addParameters({ options: { theme: contentfulTheme } });
addParameters({ info: { header: false, source: false } });

// Load Stories
const reqGeneral = require.context('./docs', true, /\.stories\.(ts|js)x$/);
const reqComponents = require.context(
  '../../src/components',
  true,
  /\.stories\.(ts|js)x?$/,
);

function loadStories() {
  reqGeneral.keys().forEach(filename => reqGeneral(filename));
  reqComponents.keys().forEach(filename => reqComponents(filename));
  require('./storybook.global.css'); // Require global styles as last item so that they trump component styles
}

configure(loadStories, module);
