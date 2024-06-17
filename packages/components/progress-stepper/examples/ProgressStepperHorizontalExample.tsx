import React from 'react';
import { ProgressStepper } from '@contentful/f36-progress-stepper';

export default function ProgressStepperHorizontalExample() {
  return (
    <ProgressStepper activeStep={3}>
      <ProgressStepper.Step variant="complete" />
      <ProgressStepper.Step variant="complete" />
      <ProgressStepper.Step variant="active" />
      <ProgressStepper.Step />
      <ProgressStepper.Step />
    </ProgressStepper>
  );
}
