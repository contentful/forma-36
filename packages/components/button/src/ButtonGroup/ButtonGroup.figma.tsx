import React from 'react';
import figma from '@figma/code-connect';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9060:153860';

figma.connect(ButtonGroup, FIGMA_URL, {
  props: {
    variant: figma.enum('Spaced', {
      True: 'spaced',
      False: 'merged',
    }),
  },
  example: ({ variant }) => (
    <ButtonGroup variant={variant}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
    </ButtonGroup>
  ),
});
