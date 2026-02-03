import React, { useState } from 'react';
import { Button, Flex, ProgressStepper } from '@contentful/f36-components';

export default function ProgressStepperInteractiveExample() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
    { label: 'Step 5' },
  ];

  const getSteps = () => {
    return steps.map((step, index) => {
      if (index === currentStep) {
        return (
          <ProgressStepper.Step
            key={step.label}
            state="active"
            labelText={step.label}
          />
        );
      } else if (index < currentStep) {
        return (
          <ProgressStepper.Step
            key={step.label}
            state="complete"
            labelText={step.label}
          />
        );
      }

      return (
        <ProgressStepper.Step
          key={step.label}
          state="incomplete"
          labelText={step.label}
        />
      );
    });
  };

  return (
    <>
      <ProgressStepper
        stepStyle="icon"
        activeStep={currentStep}
        ariaLabel="Interactive progress stepper"
      >
        {getSteps()}
      </ProgressStepper>
      <Flex marginTop="spacingM" gap="spacingXs">
        <Button
          onClick={() => setCurrentStep(currentStep - 1)}
          isDisabled={currentStep === 0}
        >
          Previous Step
        </Button>
        <Button
          onClick={() => setCurrentStep(currentStep + 1)}
          isDisabled={currentStep > steps.length - 1}
        >
          Next Step
        </Button>
      </Flex>
    </>
  );
}
