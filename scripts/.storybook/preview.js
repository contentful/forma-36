import React from 'react';
import { GlobalStyles } from '@contentful/f36-core';

// Setup Decorators
export const decorators = [
  (Story) => (
    <div
      style={{
        minWidth: '340px',
      }}
    >
      <GlobalStyles />
      <Story />
    </div>
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
  chromatic: {
    diffThreshold: 0.8,
  },
};
