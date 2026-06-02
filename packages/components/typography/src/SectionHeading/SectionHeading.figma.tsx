import React from 'react';
import figma from '@figma/code-connect';
import { SectionHeading } from './SectionHeading';

figma.connect(
  SectionHeading,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16387:3324',
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
      <SectionHeading isTruncated={isTruncated} marginBottom={marginBottom}>
        Section heading text
      </SectionHeading>
    ),
  },
);
