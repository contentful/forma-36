import React from 'react';
import { type CommonProps, type MarginProps } from '@contentful/f36-core';
import { getStyles } from './ProgressStepper.styles';

export interface ProgressStepperProps extends CommonProps, MarginProps {
  children: React.ReactNode;
  /**
   * @default horizontal
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * @default number
   */
  stepStyle?: 'number' | 'icon';
  /**
   * @default 0
   */
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
    activeStep = 0,
    testId,
  } = props;
  const styles = getStyles();
  const hydratedTestId =
    testId || `cf-ui-progress-stepper-${orientation}-${stepStyle}`;

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
      data-test-id={hydratedTestId}
      ref={ref}
    >
      <ol
        className={
          orientation === 'horizontal'
            ? styles.horizontalList
            : styles.verticalList(stepsToRender.length)
        }
      >
        {renderSteps()}
      </ol>
    </nav>
  );
}

export const ProgressStepper = React.forwardRef(_ProgressStepper);
