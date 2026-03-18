import React from 'react';
import { ProgressStepper } from '@contentful/f36-components';

export default function ProgressStepperIconExample() {
  return (
    <ProgressStepper
      activeStep={0}
      stepStyle="icon"
      ariaLabel="Icon progress stepper"
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
