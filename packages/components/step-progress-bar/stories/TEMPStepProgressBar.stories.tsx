import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { StepperProps, TEMPStepProgressBar } from '../src';

export default {
  component: TEMPStepProgressBar,
  title: 'Components/TEMPStepProgressBar',
} as Meta;

export const Default: Story<StepperProps> = (args) => {
  return (
    <div style={{ width: '400px' }}>
      <TEMPStepProgressBar stepStyle="number" activeStep={2} />
    </div>
  );
};

export const HorizontalIcon: Story<StepperProps> = (args) => {
  return <TEMPStepProgressBar stepStyle="icon" activeStep={2} />;
};

export const Vertical: Story<StepperProps> = (args) => {
  return <TEMPStepProgressBar orientation="vertical" activeStep={2} />;
};

export const VerticalIcon: Story<StepperProps> = (args) => {
  return (
    <TEMPStepProgressBar
      stepStyle="icon"
      orientation="vertical"
      activeStep={2}
    />
  );
};
