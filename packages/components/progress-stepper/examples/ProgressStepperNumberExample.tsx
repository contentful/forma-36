import React from 'react';
import { ProgressStepper } from '@contentful/f36-progress-stepper';

export default function ProgressStepperNumberExample() {
  return (
    <ProgressStepper activeStep={1} stepStyle="number">
      <ProgressStepper.Step variant="active" labelText="Active" />
      <ProgressStepper.Step variant="complete" labelText="Complete" />
      <ProgressStepper.Step labelText="Incomplete" />
      <ProgressStepper.Step variant="disabled" labelText="Disabled" />
      <ProgressStepper.Step variant="error" labelText="Error" />
      <ProgressStepper.Step variant="warning" labelText="Warning" />
    </ProgressStepper>
  );
}
