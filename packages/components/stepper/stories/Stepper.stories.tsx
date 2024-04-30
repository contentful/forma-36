import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { ProgressBar } from '../src/Stepper';

export default {
  component: ProgressBar,
  title: 'Components/StepperOriginal',
} as Meta;

export const Default: Story = (args) => {
  return (
    // <div>
    <ProgressBar numSteps={6} currentStepIndex={1} id="123" />
    // </div>
  );
};
