import React from 'react';

// Storybook Addon Dependencies
import createContentfulTheme from './contentful-theme';
import DocPage from './components/DocPage/DocPage';
import { fontStackPrimary } from '@contentful/forma-36-tokens';

// Setup Decorators
export const decorators = [
  (Story) => (
    <div
      style={{
        fontFamily: fontStackPrimary,
        minWidth: '340px',
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
