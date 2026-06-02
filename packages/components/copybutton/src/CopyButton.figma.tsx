import React from 'react';
import figma from '@figma/code-connect';
import { CopyButton } from './CopyButton';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=4943:99660';

figma.connect(CopyButton, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
    size: figma.enum('Size', {
      'Small (default)': 'small',
      Medium: 'medium',
    }),
  },
  example: ({ size }) => <CopyButton value="Text to copy" size={size} />,
});

figma.connect(CopyButton, FIGMA_URL, {
  variant: { State: 'Disabled' },
  props: {
    size: figma.enum('Size', {
      'Small (default)': 'small',
      Medium: 'medium',
    }),
  },
  example: ({ size }) => (
    <CopyButton value="Text to copy" size={size} isDisabled />
  ),
});
