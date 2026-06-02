import React from 'react';
import figma from '@figma/code-connect';
import { DisplayText } from './DisplayText';

figma.connect(
  DisplayText,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16387:969',
  {
    props: {
      size: figma.enum('Font size', {
        Default: undefined,
        Large: 'large',
        Huge: 'large',
      }),
      isTruncated: figma.enum('Truncated', {
        True: true,
        False: undefined,
      }),
    },
    example: ({ size, isTruncated }) => (
      <DisplayText size={size} isTruncated={isTruncated}>
        Display text
      </DisplayText>
    ),
  },
);
