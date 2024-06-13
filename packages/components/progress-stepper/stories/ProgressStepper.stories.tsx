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
      <ProgressStepper {...args} stepStyle="number" activeStep={3}>
        <ProgressStepper.Step variant="complete" />
        <ProgressStepper.Step variant="complete" />
        <ProgressStepper.Step variant="active" />
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
};

export const HorizontalIconWithLabels: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <ProgressStepper {...args} stepStyle="icon" activeStep={3}>
        <ProgressStepper.Step variant="complete" labelText="Label 1" />
        <ProgressStepper.Step variant="complete" labelText="Label 2" />
        <ProgressStepper.Step variant="active" labelText="Label 3" />
        <ProgressStepper.Step labelText="Label 4" />
        <ProgressStepper.Step labelText="Label 5" />
      </ProgressStepper>
    </div>
  );
};

export const VerticalNumberWithLabels: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ height: '350px' }}>
      <ProgressStepper
        {...args}
        stepStyle="number"
        activeStep={2}
        orientation="vertical"
      >
        <ProgressStepper.Step variant="complete" labelText="Label 1" />
        <ProgressStepper.Step variant="active" labelText="Label 2" />
        <ProgressStepper.Step labelText="Label 3" />
      </ProgressStepper>
    </div>
  );
};

export const VerticalIcon: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ height: '350px' }}>
      <ProgressStepper
        {...args}
        stepStyle="icon"
        activeStep={2}
        orientation="vertical"
      >
        <ProgressStepper.Step variant="complete" />
        <ProgressStepper.Step variant="active" />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
};

export const IconStepVariants: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <ProgressStepper {...args} stepStyle="icon" activeStep={1}>
        <ProgressStepper.Step variant="active" labelText="Active" />
        <ProgressStepper.Step variant="complete" labelText="Complete" />
        <ProgressStepper.Step labelText="Incomplete" />
        <ProgressStepper.Step variant="disabled" labelText="Disabled" />
        <ProgressStepper.Step variant="error" labelText="Error" />
        <ProgressStepper.Step variant="warning" labelText="Warning" />
      </ProgressStepper>
    </div>
  );
};

export const NumberStepVariants: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={{ width: '750px' }}>
      <ProgressStepper {...args} stepStyle="number" activeStep={1}>
        <ProgressStepper.Step variant="active" labelText="Active" />
        <ProgressStepper.Step variant="complete" labelText="Complete" />
        <ProgressStepper.Step labelText="Incomplete" />
        <ProgressStepper.Step variant="disabled" labelText="Disabled" />
        <ProgressStepper.Step variant="error" labelText="Error" />
        <ProgressStepper.Step variant="warning" labelText="Warning" />
      </ProgressStepper>
    </div>
  );
};
