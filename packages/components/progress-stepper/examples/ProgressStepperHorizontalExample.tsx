import React from 'react';
import { ProgressStepper } from '@contentful/f36-components';

export default function ProgressStepperHorizontalExample() {
  return (
    <ProgressStepper activeStep={2} ariaLabel="Horizontal progress stepper">
      <ProgressStepper.Step state="complete" />
      <ProgressStepper.Step state="complete" />
      <ProgressStepper.Step state="active" />
      <ProgressStepper.Step />
      <ProgressStepper.Step />
    </ProgressStepper>
  );
}
