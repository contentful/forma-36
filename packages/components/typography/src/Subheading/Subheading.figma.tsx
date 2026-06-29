import React from 'react';
import figma from '@figma/code-connect';
import { Subheading } from './Subheading';

figma.connect(
  Subheading,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16387:985',
  {
    props: {
      isTruncated: figma.enum('Truncated', {
        True: true,
        False: undefined,
      }),
      marginBottom: figma.enum('Bottom margin', {
        True: undefined,
        False: 'none',
      }),
    },
    example: ({ isTruncated, marginBottom }) => (
      <Subheading isTruncated={isTruncated} marginBottom={marginBottom}>
        Subheading text
      </Subheading>
    ),
  },
);
