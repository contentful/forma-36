import { Stepper } from '../CompoundStepper';
import React from 'react';
import { StepperProps } from '../Stepper';

export const TEMPStepProgressBar = (props: Omit<StepperProps, 'children'>) => {
  return (
    <Stepper {...props}>
      <Stepper.Step isActive labelText="Test label" />
      <Stepper.Step isComplete labelText="Test label" />
      <Stepper.Step isInvalid labelText="Test label" />
      <Stepper.Step isWarning />
      <Stepper.Step isDisabled />
      <Stepper.Step />
    </Stepper>
  );
};
