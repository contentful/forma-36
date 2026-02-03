import React, { useState } from 'react';
import { ProgressStepper } from '@contentful/f36-components';

export default function ProgressStepperOnlyPreviousStepsClickableExample() {
  const [activeStep, setActiveStep] = useState(2);

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
  };

  const steps = [
    <ProgressStepper.Step state="complete" key="step-0" />,
    <ProgressStepper.Step state="complete" key="step-1" />,
    <ProgressStepper.Step state="active" key="step-2" />,
    <ProgressStepper.Step key="step-3" />,
    <ProgressStepper.Step key="step-4" />,
  ];

  const getStepState = (stepNumber) => {
    if (stepNumber < activeStep) {
      return 'complete';
    } else if (stepNumber === activeStep) {
      return 'active';
    } else {
      return 'incomplete';
    }
  };

  const getSteps = () => {
    return steps.map((step, index) => {
      const onClickStep =
        activeStep > index
          ? (stepIndex) => handleStepClick(stepIndex)
          : undefined;

      return React.cloneElement(step, {
        state: getStepState(index),
        onClick: onClickStep,
      });
    });
  };

  return (
    <ProgressStepper
      activeStep={activeStep}
      ariaLabel="Clickable progress stepper"
    >
      {getSteps()}
    </ProgressStepper>
  );
}
