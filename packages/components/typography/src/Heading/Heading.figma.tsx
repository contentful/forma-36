import React from 'react';
import figma from '@figma/code-connect';
import { Heading } from './Heading';

figma.connect(
  Heading,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16387:978',
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
      <Heading isTruncated={isTruncated} marginBottom={marginBottom}>
        Heading text
      </Heading>
    ),
  },
);
