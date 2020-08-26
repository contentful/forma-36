import { addParameters, addDecorator } from '@storybook/react';

// Storybook Addon Dependencies
import { withPropTypes } from 'storybook-prop-types-addon';
import { jsxDecorator } from 'storybook-addon-jsx';

// Setup Addons
addDecorator(withPropTypes);
addDecorator(jsxDecorator);

// Setup Storybook options
addParameters({ info: { header: false, source: false } });
