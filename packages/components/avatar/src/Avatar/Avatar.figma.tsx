import React from 'react';
import figma from '@figma/code-connect';
import { Avatar } from './Avatar';

figma.connect(
  Avatar,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11225:120217',
  {
    props: {
      variant: figma.enum('Type', {
        User: 'user',
        App: 'app',
      }),
      size: figma.enum('Size', {
        Tiny: 'tiny',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
      colorVariant: figma.enum('Muted', {
        True: 'muted',
        False: 'gray',
      }),
    },
    example: ({ variant, size, colorVariant }) => (
      <Avatar
        variant={variant}
        size={size}
        colorVariant={colorVariant}
        src="https://example.com/avatar.png"
      />
    ),
  },
);
