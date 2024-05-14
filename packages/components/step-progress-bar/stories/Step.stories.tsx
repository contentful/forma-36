import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Step, type StepProps } from '../src';

export default {
  component: Step,
  title: 'Components/Step',
} as Meta;

export const Default: Story<StepProps> = (args) => {
  return <Step {...args} />;
};

export const Complete: Story<StepProps> = (args) => {
  return <Step {...args} isComplete />;
};

export const Error: Story<StepProps> = (args) => {
  return <Step {...args} isInvalid />;
};

export const Warning: Story<StepProps> = (args) => {
  return <Step {...args} isWarning />;
};

export const Disabled: Story<StepProps> = (args) => {
  return <Step {...args} isDisabled />;
};
