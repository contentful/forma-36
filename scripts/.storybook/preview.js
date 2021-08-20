import React from 'react';
import { fontStackPrimary } from '@contentful/f36-tokens';

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
