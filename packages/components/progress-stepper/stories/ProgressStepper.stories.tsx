import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ProgressStepper } from '../src/CompoundProgressStepper';
import { ProgressStepperProps } from '../src';

export default {
  component: ProgressStepper,
  title: 'Components/ProgressStepper',
} as Meta;

const getContainerStyle = (orientation: ProgressStepperProps['orientation']) =>
  orientation === 'vertical' ? { height: '400px' } : { width: '750px' };

export const Basic: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={getContainerStyle(args.orientation)}>
      <ProgressStepper stepStyle="number" activeStep={2} {...args}>
        <ProgressStepper.Step variant="complete" />
        <ProgressStepper.Step variant="complete" />
        <ProgressStepper.Step variant="active" />
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
};

export const BasicWithLabels: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={getContainerStyle(args.orientation)}>
      <ProgressStepper stepStyle="number" activeStep={2} {...args}>
        <ProgressStepper.Step variant="complete" labelText="Label 1" />
        <ProgressStepper.Step variant="complete" labelText="Label 2" />
        <ProgressStepper.Step variant="active" labelText="Label 3" />
        <ProgressStepper.Step labelText="Label 4" />
        <ProgressStepper.Step labelText="Label 5" />
      </ProgressStepper>
    </div>
  );
};

export const IconStepVariants: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={getContainerStyle(args.orientation)}>
      <ProgressStepper stepStyle="icon" activeStep={0} {...args}>
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
    <div style={getContainerStyle(args.orientation)}>
      <ProgressStepper stepStyle="number" activeStep={0} {...args}>
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
