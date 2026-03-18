import React from 'react';
import { ProgressStepper } from '@contentful/f36-components';

export default function ProgressStepperVerticalExample() {
  return (
    <div
      style={{
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ProgressStepper
        activeStep={2}
        orientation="vertical"
        ariaLabel="Vertical progress stepper"
      >
        <ProgressStepper.Step state="complete" />
        <ProgressStepper.Step state="complete" />
        <ProgressStepper.Step state="active" />
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
}
