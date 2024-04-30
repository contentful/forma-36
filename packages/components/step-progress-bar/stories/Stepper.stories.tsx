import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Stepper, type StepperProps } from '../src/Stepper';

export default {
  component: Stepper,
  title: 'Components/Stepper',
} as Meta;

export const Default: Story<StepperProps> = (args) => {
  return <Stepper {...args}>Stepper</Stepper>;
};
