import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { NEWStepper } from '../src/TEMPRedesign/NEWCompoundStepper';
import { StepperProps } from '../src/TEMPRedesign/NEWStepper';

export default {
  component: NEWStepper,
  title: 'Components/NEWStepper',
} as Meta;

export const HorizontalNumber: Story<StepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <NEWStepper stepStyle="number" activeStep={4}>
        <NEWStepper.NEWStep isActive labelText="Test label" />
        <NEWStepper.NEWStep isComplete labelText="Test label" />
        <NEWStepper.NEWStep isInvalid labelText="Test label" />
        <NEWStepper.NEWStep isWarning />
        <NEWStepper.NEWStep isDisabled />
        <NEWStepper.NEWStep />
      </NEWStepper>
    </div>
  );
};

export const HorizontalIcon: Story<StepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <NEWStepper stepStyle="icon" activeStep={4}>
        <NEWStepper.NEWStep isActive labelText="Test label" />
        <NEWStepper.NEWStep isComplete labelText="Test label" />
        <NEWStepper.NEWStep isInvalid labelText="Test label" />
        <NEWStepper.NEWStep isWarning />
        <NEWStepper.NEWStep isDisabled />
        <NEWStepper.NEWStep />
      </NEWStepper>
    </div>
  );
};

export const VerticalNumber: Story<StepperProps> = (args) => {
  return (
    <div style={{ height: '350px' }}>
      <NEWStepper stepStyle="number" activeStep={4} orientation="vertical">
        <NEWStepper.NEWStep isActive labelText="Test label" />
        <NEWStepper.NEWStep isComplete labelText="Test label" />
        <NEWStepper.NEWStep isInvalid labelText="Test label" />
        <NEWStepper.NEWStep isWarning />
        <NEWStepper.NEWStep isDisabled />
        <NEWStepper.NEWStep />
      </NEWStepper>
    </div>
  );
};

export const VerticalIcon: Story<StepperProps> = (args) => {
  return (
    <div style={{ height: '350px' }}>
      <NEWStepper stepStyle="icon" activeStep={4} orientation="vertical">
        <NEWStepper.NEWStep isActive labelText="Test label" />
        <NEWStepper.NEWStep isComplete labelText="Test label" />
        <NEWStepper.NEWStep isInvalid labelText="Test label" />
        <NEWStepper.NEWStep isWarning />
        <NEWStepper.NEWStep isDisabled />
        <NEWStepper.NEWStep />
      </NEWStepper>
    </div>
  );
};
