import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { StepperProps, TEMPStepProgressBar } from '../src';

export default {
  component: TEMPStepProgressBar,
  title: 'Components/TEMPStepProgressBar',
} as Meta;

export const Default: Story<StepperProps> = (args) => {
  return <TEMPStepProgressBar stepStyle="number" />;
};

export const Icon: Story<StepperProps> = (args) => {
  return <TEMPStepProgressBar stepStyle="icon" />;
};
