import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ProgressStepper } from '../src/CompoundProgressStepper';
import { ProgressStepperProps } from '../src';

export default {
  component: ProgressStepper,
  title: 'Components/ProgressStepper',
} as Meta;

export const HorizontalNumber: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <ProgressStepper stepStyle="number">
        <ProgressStepper.Step variant="active" labelText="Test label" />
        <ProgressStepper.Step variant="complete" labelText="Test label" />
        <ProgressStepper.Step variant="invalid" labelText="Test label" />
        <ProgressStepper.Step variant="warning" />
        <ProgressStepper.Step variant="disabled" />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
};

export const HorizontalIcon: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <ProgressStepper stepStyle="icon" activeStep={4}>
        <ProgressStepper.Step variant="active" labelText="Test label" />
        <ProgressStepper.Step variant="complete" labelText="Test label" />
        <ProgressStepper.Step variant="invalid" labelText="Test label" />
        <ProgressStepper.Step variant="warning" />
        <ProgressStepper.Step variant="disabled" />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
};

export const VerticalNumber: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ height: '350px' }}>
      <ProgressStepper stepStyle="number" activeStep={4} orientation="vertical">
        <ProgressStepper.Step variant="active" labelText="Test label" />
        <ProgressStepper.Step variant="complete" labelText="Test label" />
        <ProgressStepper.Step variant="invalid" labelText="Test label" />
        <ProgressStepper.Step variant="warning" />
        <ProgressStepper.Step variant="disabled" />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
};

export const VerticalIcon: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ height: '350px' }}>
      <ProgressStepper stepStyle="icon" activeStep={4} orientation="vertical">
        <ProgressStepper.Step variant="active" labelText="Test label" />
        <ProgressStepper.Step variant="complete" labelText="Test label" />
        <ProgressStepper.Step variant="invalid" labelText="Test label" />
        <ProgressStepper.Step variant="warning" />
        <ProgressStepper.Step variant="disabled" />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
};
