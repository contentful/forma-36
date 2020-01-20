import { configure, addParameters, addDecorator } from '@storybook/react';
// import './storybook.global.css';

// Storybook Addon Dependencies
import { withKnobs } from '@storybook/addon-knobs';
import { withPropTypes } from 'storybook-prop-types-addon';
import { withA11y } from '@storybook/addon-a11y';

// Setup Addons
addDecorator(withKnobs);
addDecorator(withPropTypes);
addDecorator(withA11y);

// Setup Storybook options
addParameters({ info: { header: false, source: false } });
