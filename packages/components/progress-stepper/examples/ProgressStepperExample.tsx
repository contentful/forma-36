import React, { useState } from 'react';
import { ProgressStepper, StepProps } from '../src';
import { Button } from '@contentful/f36-components';

export default function ProgressStepperBasicExample() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [{ title: 'step 1' }, { title: 'step 2' }, { title: 'step 3' }];

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

      return <ProgressStepper.Step key={step.title} {...stepProps} />;
    });
  };

  return (
    <>
      <div>
        <ProgressStepper stepStyle="number" activeStep={currentStep}>
          {getSteps()}
        </ProgressStepper>
      </div>
      <div>
        <p>This is step {currentStep}</p>
        {currentStep > 1 && (
          <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
        )}
        {currentStep < steps.length + 1 && (
          <Button onClick={() => setCurrentStep(currentStep + 1)}>
            {currentStep < steps.length ? 'Next' : 'Complete'}
          </Button>
        )}
      </div>
    </>
  );
}
