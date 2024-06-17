import React from 'react';
import { ProgressStepper } from '@contentful/f36-progress-stepper';

export default function ProgressStepperVerticalExample() {
  return (
    <div
      style={{
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ProgressStepper activeStep={3} orientation="vertical">
        <ProgressStepper.Step variant="complete" />
        <ProgressStepper.Step variant="complete" />
        <ProgressStepper.Step variant="active" />
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>
    </div>
  );
}
