import React from 'react';
import { ProgressStepper } from '@contentful/f36-components';

export default function ProgressStepperVerticalLabelExample() {
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
        ariaLabel="Vertical progress stepper with labels"
      >
        <ProgressStepper.Step state="complete" labelText="Label 1" />
        <ProgressStepper.Step state="complete" labelText="Label 2" />
        <ProgressStepper.Step state="active" labelText="Label 3" />
        <ProgressStepper.Step labelText="Label 4" />
        <ProgressStepper.Step labelText="Label 5" />
      </ProgressStepper>
    </div>
  );
}
