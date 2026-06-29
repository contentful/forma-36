import React from 'react';
import figma from '@figma/code-connect';
import { Paragraph } from './Paragraph';

figma.connect(
  Paragraph,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16387:964',
  {
    props: {
      fontWeight: figma.enum('Font weight', {
        Regular: undefined,
        Medium: 'fontWeightMedium',
        'Demi bold': 'fontWeightDemiBold',
      }),
      isTruncated: figma.enum('Truncated', {
        True: true,
        False: undefined,
      }),
      marginBottom: figma.enum('Bottom margin', {
        True: undefined,
        False: 'none',
      }),
    },
    example: ({ fontWeight, isTruncated, marginBottom }) => (
      <Paragraph
        fontWeight={fontWeight}
        isTruncated={isTruncated}
        marginBottom={marginBottom}
      >
        Paragraph text
      </Paragraph>
    ),
  },
);
