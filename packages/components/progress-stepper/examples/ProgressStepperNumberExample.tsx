import React from 'react';
import { ProgressStepper } from '@contentful/f36-components';

export default function ProgressStepperNumberExample() {
  return (
    <ProgressStepper
      activeStep={0}
      stepStyle="number"
      ariaLabel="Number progress stepper"
    >
      <ProgressStepper.Step state="active" labelText="Active" />
      <ProgressStepper.Step state="complete" labelText="Complete" />
      <ProgressStepper.Step labelText="Incomplete" />
      <ProgressStepper.Step state="disabled" labelText="Disabled" />
      <ProgressStepper.Step state="error" labelText="Error" />
      <ProgressStepper.Step state="warning" labelText="Warning" />
    </ProgressStepper>
  );
}
