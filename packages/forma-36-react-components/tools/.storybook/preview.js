import { addParameters, addDecorator } from '@storybook/react';

// Storybook Addon Dependencies
import { withPropTypes } from 'storybook-prop-types-addon';
import { jsxDecorator } from 'storybook-addon-jsx';

// Setup Addons
addDecorator(withPropTypes);
addDecorator(jsxDecorator);

// Setup Storybook options
addParameters({ info: { header: false, source: false } });

// Creating DocPage from our old notes
addParameters({
  docs: {
    disable: true,
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
});
