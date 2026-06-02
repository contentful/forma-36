import React from 'react';
import figma from '@figma/code-connect';
import { Caption } from './Caption';

figma.connect(
  Caption,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16786:124472',
  {
    props: {
      fontWeight: figma.enum('Font weight', {
        Regular: undefined,
        Medium: 'fontWeightMedium',
      }),
      isTruncated: figma.enum('Truncated', {
        True: true,
        False: undefined,
      }),
    },
    example: ({ fontWeight, isTruncated }) => (
      <Caption fontWeight={fontWeight} isTruncated={isTruncated}>
        Caption text
      </Caption>
    ),
  },
);
