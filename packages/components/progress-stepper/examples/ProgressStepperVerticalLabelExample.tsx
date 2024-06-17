import React from 'react';
import { ProgressStepper } from '@contentful/f36-progress-stepper';

export default function ProgressStepperVerticalLabelExample() {
  return (
    <div
      style={{
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ProgressStepper activeStep={3} orientation="vertical">
        <ProgressStepper.Step variant="complete" labelText="Label 1" />
        <ProgressStepper.Step variant="complete" labelText="Label 2" />
        <ProgressStepper.Step variant="active" labelText="Label 3" />
        <ProgressStepper.Step labelText="Label 4" />
        <ProgressStepper.Step labelText="Label 5" />
      </ProgressStepper>
    </div>
  );
}
