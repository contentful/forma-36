import React from 'react';
import figma from '@figma/code-connect';
import { Badge } from './Badge';
figma.connect(
  Badge,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=10438:127259',
  {
    props: {
      variant: figma.enum('Type', {
        Primary: 'primary',
        'Primary filled': 'primary-filled',
        Positive: 'positive',
        Negative: 'negative',
        Warning: 'warning',
        Secondary: 'secondary',
        Featured: 'featured',
      }),
      size: figma.enum('Size', {
        Medium: 'default',
        Small: 'small',
      }),
      children: figma.textContent('Label'),
      startIcon: figma.boolean('Show start icon', {
        true: figma.instance('Start icon'),
        false: undefined,
      }),
      endIcon: figma.boolean('Show end icon', {
        true: figma.instance('End icon'),
        false: undefined,
      }),
    },
    example: ({ variant, size, children, startIcon, endIcon }) => (
      <Badge
        variant={variant}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </Badge>
    ),
  },
);
