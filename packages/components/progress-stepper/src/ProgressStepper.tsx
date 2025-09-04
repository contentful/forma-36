import React from 'react';
import { cx } from '@emotion/css';
import { type CommonProps, type MarginProps } from '@contentful/f36-core';
import { getStyles } from './ProgressStepper.styles';

export interface ProgressStepperProps extends CommonProps, MarginProps {
  children: React.ReactNode;
  /**
   * string for additional classNames
   */
  className?: string;
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
  /**
   * Label to be used on aria-label for the nav element
   */
  ariaLabel: string;
  /**
   * Handler when the step is clicked
   */
  onClick?: (stepNumber: number) => void;
}

function _ProgressStepper(
  props: ProgressStepperProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    children,
    className,
    orientation = 'horizontal',
    stepStyle = 'number',
    activeStep = 0,
    testId,
    ariaLabel,
    onClick = null,
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
        stepNumber: index,
        onClick,
        ...(child as React.ReactElement).props,
      });
      return stepChild;
    });
    return steps;
  };

  return (
    <nav
      className={cx(
        className,
        orientation === 'vertical' && styles.verticalNav,
      )}
      data-test-id={hydratedTestId}
      ref={ref}
      aria-label={ariaLabel}
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
