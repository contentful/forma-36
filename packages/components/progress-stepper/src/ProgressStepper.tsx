import React from 'react';
import { type CommonProps, type MarginProps } from '@contentful/f36-core';
import { getStyles } from './ProgressStepper.styles';

export interface ProgressStepperProps extends CommonProps, MarginProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  stepStyle?: 'number' | 'icon';
  activeStep?: number;
}

function _ProgressStepper(
  props: ProgressStepperProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    children,
    orientation = 'horizontal',
    stepStyle = 'number',
    activeStep = 1,
    testId = 'cf-ui-progress-stepper',
  } = props;
  const styles = getStyles();

  const stepsToRender = React.Children.toArray(children);

  const renderSteps = () => {
    const steps = stepsToRender.map((child, index) => {
      const stepChild = React.cloneElement(child as React.ReactElement, {
        orientation,
        stepStyle,
        activeStep,
        key: `steps-rendered-${index}`,
        stepNumber: index + 1,
      });
      return stepChild;
    });
    return steps;
  };

  return (
    <nav
      className={orientation === 'vertical' ? styles.verticalNav : ''}
      data-test-id={testId}
    >
      <ol
        className={
          orientation === 'horizontal'
            ? styles.orderedList
            : styles.verticalList
        }
      >
        {renderSteps()}
      </ol>
    </nav>
  );
}

/**
 * TODO: Add description of component here.
 */
export const ProgressStepper = React.forwardRef(_ProgressStepper);
