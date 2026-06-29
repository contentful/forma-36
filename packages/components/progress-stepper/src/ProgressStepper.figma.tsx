import React from 'react';
import figma from '@figma/code-connect';
import { ProgressStepper } from './CompoundProgressStepper';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=13450:393';

figma.connect(ProgressStepper, FIGMA_URL, {
  props: {
    orientation: figma.enum('Orientation', {
      Horizontal: undefined,
      Vertical: 'vertical',
    }),
    stepStyle: figma.enum('Step style', {
      Numbers: 'number',
      Icons: undefined,
    }),
  },
  example: ({ orientation, stepStyle }) => (
    <ProgressStepper
      orientation={orientation}
      stepStyle={stepStyle}
      ariaLabel="progress"
    >
      <ProgressStepper.Step labelText="Step 1" state="complete" />
      <ProgressStepper.Step labelText="Step 2" state="active" />
      <ProgressStepper.Step labelText="Step 3" state="incomplete" />
    </ProgressStepper>
  ),
});
