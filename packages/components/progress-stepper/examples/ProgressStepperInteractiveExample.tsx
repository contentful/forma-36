import React, { useState } from 'react';
import { ProgressStepper } from '@contentful/f36-progress-stepper';
import { Button, Flex } from '@contentful/f36-components';
import { StepProps } from '../src';

export default function ProgressStepperInteractiveExample() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { title: 'Step 1' },
    { title: 'Step 2' },
    { title: 'Step 3' },
    { title: 'Step 4' },
    { title: 'Step 5' },
  ];

  const getSteps = () => {
    return steps.map((step, index) => {
      const stepProps = {
        labelText: step.title,
        variant: 'incomplete',
      };

      if (index + 1 === currentStep) {
        stepProps['variant'] = 'active';
      } else if (index + 1 < currentStep) {
        stepProps['variant'] = 'complete';
      }

      return (
        <ProgressStepper.Step key={step.title} {...(stepProps as StepProps)} />
      );
    });
  };

  return (
    <>
      <ProgressStepper stepStyle="icon" activeStep={currentStep}>
        {getSteps()}
      </ProgressStepper>
      <Flex marginTop="spacingM" gap="spacingXs">
        <Button
          onClick={() => setCurrentStep(currentStep - 1)}
          isDisabled={currentStep <= 1}
        >
          Previous Step
        </Button>
        <Button
          onClick={() => setCurrentStep(currentStep + 1)}
          isDisabled={currentStep > steps.length}
        >
          Next Step
        </Button>
      </Flex>
    </>
  );
}
