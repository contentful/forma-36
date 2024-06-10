import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Stepper } from '../src/CompoundStepper';
import { StepperProps } from '../src';

export default {
  component: Stepper,
  title: 'Components/Stepper',
} as Meta;

export const HorizontalNumber: Story<StepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <Stepper stepStyle="number">
        <Stepper.Step variant="active" labelText="Test label" />
        <Stepper.Step variant="complete" labelText="Test label" />
        <Stepper.Step variant="invalid" labelText="Test label" />
        <Stepper.Step variant="warning" />
        <Stepper.Step variant="disabled" />
        <Stepper.Step />
      </Stepper>
    </div>
  );
};

export const HorizontalIcon: Story<StepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <Stepper stepStyle="icon" activeStep={4}>
        <Stepper.Step variant="active" labelText="Test label" />
        <Stepper.Step variant="complete" labelText="Test label" />
        <Stepper.Step variant="invalid" labelText="Test label" />
        <Stepper.Step variant="warning" />
        <Stepper.Step variant="disabled" />
        <Stepper.Step />
      </Stepper>
    </div>
  );
};

export const VerticalNumber: Story<StepperProps> = (args) => {
  return (
    <div style={{ height: '350px' }}>
      <Stepper stepStyle="number" activeStep={4} orientation="vertical">
        <Stepper.Step variant="active" labelText="Test label" />
        <Stepper.Step variant="complete" labelText="Test label" />
        <Stepper.Step variant="invalid" labelText="Test label" />
        <Stepper.Step variant="warning" />
        <Stepper.Step variant="disabled" />
        <Stepper.Step />
      </Stepper>
    </div>
  );
};

export const VerticalIcon: Story<StepperProps> = (args) => {
  return (
    <div style={{ height: '350px' }}>
      <Stepper stepStyle="icon" activeStep={4} orientation="vertical">
        <Stepper.Step variant="active" labelText="Test label" />
        <Stepper.Step variant="complete" labelText="Test label" />
        <Stepper.Step variant="invalid" labelText="Test label" />
        <Stepper.Step variant="warning" />
        <Stepper.Step variant="disabled" />
        <Stepper.Step />
      </Stepper>
    </div>
  );
};
