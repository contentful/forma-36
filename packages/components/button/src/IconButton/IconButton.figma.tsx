// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import figma from '@figma/code-connect';
import { IconButton } from './IconButton';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9060:150415';

figma.connect(IconButton, FIGMA_URL, {
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
    icon: figma.instance('Icon'),
  },
  example: ({ variant, size, icon }) => (
    <IconButton
      variant={variant}
      size={size}
      icon={icon}
      aria-label="Icon button"
    />
  ),
});

figma.connect(IconButton, FIGMA_URL, {
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
    icon: figma.instance('Icon'),
  },
  example: ({ variant, size, icon }) => (
    <IconButton
      variant={variant}
      size={size}
      isDisabled
      icon={icon}
      aria-label="Icon button"
    />
  ),
});
