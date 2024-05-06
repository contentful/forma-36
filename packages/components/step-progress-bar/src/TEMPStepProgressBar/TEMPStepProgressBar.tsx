import { Stepper } from '../CompoundStepper';
import React from 'react';
import { StepperProps } from '../Stepper';

export const TEMPStepProgressBar = (props: Omit<StepperProps, 'children'>) => {
  return (
    <Stepper {...props}>
      <Stepper.Step isComplete />
      <Stepper.Step isInvalid />
    </Stepper>
  );
};
