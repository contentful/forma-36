import React from 'react';
import figma from '@figma/code-connect';
import { Datepicker } from './Datepicker';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11753:92754';

figma.connect(Datepicker, FIGMA_URL, {
  variant: { Invalid: 'False' },
  example: () => <Datepicker onSelect={() => {}} />,
});

figma.connect(Datepicker, FIGMA_URL, {
  variant: { Invalid: 'True' },
  example: () => (
    <Datepicker onSelect={() => {}} inputProps={{ isInvalid: true }} />
  ),
});
