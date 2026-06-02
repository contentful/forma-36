import React from 'react';
import figma from '@figma/code-connect';
import { Button } from './Button';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16755:33991';

figma.connect(Button, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Positive: 'positive',
      Negative: 'negative',
      Transparent: 'transparent',
    }),
    size: figma.enum('Size', {
      'Small (default)': 'small',
      Medium: 'medium',
    }),
    children: figma.string('Label'),
    isLoading: figma.boolean('Loading'),
    startIcon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
    endIcon: figma.boolean('Show end icon', {
      true: figma.instance('End icon'),
      false: undefined,
    }),
  },
  example: ({ variant, size, children, isLoading, startIcon, endIcon }) => (
    <Button
      variant={variant}
      size={size}
      isLoading={isLoading}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  ),
});

figma.connect(Button, FIGMA_URL, {
  variant: { State: 'Disabled' },
  props: {
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Positive: 'positive',
      Negative: 'negative',
      Transparent: 'transparent',
    }),
    size: figma.enum('Size', {
      'Small (default)': 'small',
      Medium: 'medium',
    }),
    children: figma.string('Label'),
    isLoading: figma.boolean('Loading'),
    startIcon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
    endIcon: figma.boolean('Show end icon', {
      true: figma.instance('End icon'),
      false: undefined,
    }),
  },
  example: ({ variant, size, children, isLoading, startIcon, endIcon }) => (
    <Button
      variant={variant}
      size={size}
      isDisabled
      isLoading={isLoading}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  ),
});
