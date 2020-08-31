// Storybook Addon Dependencies
import { jsxDecorator } from 'storybook-addon-jsx';

// Setup Decorators
export const decorators = [jsxDecorator];

// Setup Parameters
export const parameters = {
  // Creating DocPage from our old notes
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
  },
};
