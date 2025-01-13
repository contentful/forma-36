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
      <ProgressStepper
        stepStyle="number"
        activeStep={2}
        ariaLabel="Basic progress stepper"
        {...args}
        onClick={undefined}
      >
        <ProgressStepper.Step state="complete" />
        <ProgressStepper.Step state="complete" />
        <ProgressStepper.Step state="active" />
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
};

export const BasicWithLabels: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={getContainerStyle(args.orientation)}>
      <ProgressStepper
        stepStyle="number"
        activeStep={2}
        ariaLabel="Progress stepper with labels"
        {...args}
        onClick={undefined}
      >
        <ProgressStepper.Step state="complete" labelText="Label 1" />
        <ProgressStepper.Step state="complete" labelText="Label 2" />
        <ProgressStepper.Step state="active" labelText="Label 3" />
        <ProgressStepper.Step labelText="Label 4" />
        <ProgressStepper.Step labelText="Label 5" />
      </ProgressStepper>
    </div>
  );
};

export const IconStepVariantStates: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={getContainerStyle(args.orientation)}>
      <ProgressStepper
        stepStyle="icon"
        activeStep={0}
        ariaLabel="Icon progress stepper"
        {...args}
        onClick={undefined}
      >
        <ProgressStepper.Step state="active" labelText="Active" />
        <ProgressStepper.Step state="complete" labelText="Complete" />
        <ProgressStepper.Step labelText="Incomplete" />
        <ProgressStepper.Step state="disabled" labelText="Disabled" />
        <ProgressStepper.Step state="error" labelText="Error" />
        <ProgressStepper.Step state="warning" labelText="Warning" />
      </ProgressStepper>
    </div>
  );
};

export const NumberStepVariantStates: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={getContainerStyle(args.orientation)}>
      <ProgressStepper
        stepStyle="number"
        activeStep={0}
        ariaLabel="Number progress stepper"
        {...args}
        onClick={undefined}
      >
        <ProgressStepper.Step state="active" labelText="Active" />
        <ProgressStepper.Step state="complete" labelText="Complete" />
        <ProgressStepper.Step labelText="Incomplete" />
        <ProgressStepper.Step state="disabled" labelText="Disabled" />
        <ProgressStepper.Step state="error" labelText="Error" />
        <ProgressStepper.Step state="warning" labelText="Warning" />
      </ProgressStepper>
    </div>
  );
};

export const ClickableStep: Story<ProgressStepperProps> = (args) => {
  return (
    <div style={getContainerStyle(args.orientation)}>
      <ProgressStepper
        stepStyle="number"
        activeStep={0}
        ariaLabel="Number progress stepper"
        onClick={() => {}}
        {...args}
      >
        <ProgressStepper.Step state="active" labelText="Active" />
        <ProgressStepper.Step state="complete" labelText="Complete" />
        <ProgressStepper.Step labelText="Incomplete" />
        <ProgressStepper.Step state="disabled" labelText="Disabled" />
        <ProgressStepper.Step state="error" labelText="Error" />
        <ProgressStepper.Step state="warning" labelText="Warning" />
      </ProgressStepper>
    </div>
  );
};
