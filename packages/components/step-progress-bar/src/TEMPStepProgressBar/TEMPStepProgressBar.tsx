import { Stepper } from '../CompoundStepper';
import React from 'react';
import { StepperProps } from '../Stepper';

export const TEMPStepProgressBar = (props: Omit<StepperProps, 'children'>) => {
  return (
    <Stepper {...props}>
      <Stepper.Step isActive />
      <Stepper.Step isComplete />
      <Stepper.Step isInvalid />
      <Stepper.Step isWarning />
      <Stepper.Step isDisabled />
      <Stepper.Step />
    </Stepper>
  );
};
