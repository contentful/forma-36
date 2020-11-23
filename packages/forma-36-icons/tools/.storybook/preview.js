import React from 'react';

// Storybook Addon Dependencies
import { jsxDecorator } from 'storybook-addon-jsx';
import { fontStackPrimary } from '@contentful/forma-36-tokens';

// Setup Decorators
export const decorators = [
  jsxDecorator,
  (Story) => (
    <div
      style={{
        fontFamily: fontStackPrimary,
      }}
    >
      <Story />
    </div>
  ),
];

// Setup Parameters
export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Documentation', 'Components', '(alpha)'],
    },
  },
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