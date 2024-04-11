import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Stepper } from '../src/Stepper-Lite';

export default {
  component: Stepper,
  title: 'Components/StepperLite',
} as Meta;

export const Default: Story = (args) => {
  return (
    // <div>
    <Stepper numSteps={6} currentStep={1} />
    // </div>
  );
};
