import React from 'react';
import { GlobalStyles } from '@contentful/f36-core';

// Setup Decorators
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

// Setup Parameters
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Documentation',
        'Layout',
        'Typography',
        'Form Elements',
        'Components',
        'Utils',
        'Utilities',
      ],
    },
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    sort: 'requiredFirst',
  },
};
