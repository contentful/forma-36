import React from 'react';
import figma from '@figma/code-connect';
import { Spinner } from './Spinner';

figma.connect(
  Spinner,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9014:128775',
  {
    props: {},
    example: () => <Spinner />,
  },
);
