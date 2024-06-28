import React from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import { getStyles } from './Step.styles';
import { DoneIcon, CloseIcon, WarningIcon } from '@contentful/f36-icons';

export interface StepProps extends CommonProps {
  /**
   * @default incomplete
   */
  variant?:
    | 'active'
    | 'error'
    | 'warning'
    | 'disabled'
    | 'complete'
    | 'incomplete';
  labelText?: string;
  /**
   * Private prop for the ProgressStepper component
   * @private
   */
  stepNumber?: number;
  /**
   * Private prop for the ProgressStepper component
   * @private
   */
  stepStyle?: 'number' | 'icon';
  /**
   * Private prop for the ProgressStepper component
   * @private
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Private prop for the ProgressStepper component
   * @private
   */
  activeStep?: number;
}

function _Step(props: StepProps, ref: React.Ref<HTMLLIElement>) {
  const styles = getStyles();
  const {
    variant = 'incomplete',
    labelText,
    stepNumber,
    stepStyle,
    orientation,
    activeStep,
  } = props;

  const isBeforeActiveStep = stepNumber < activeStep;
  const isActiveStep = stepNumber === activeStep;
  const stepNumberToDisplay = stepNumber + 1;

  const renderStep = () => {
    switch (true) {
      case stepStyle === 'number':
        return stepNumberToDisplay;
      case variant === 'complete':
        return <DoneIcon size="tiny" variant="white" />;
      case variant === 'error':
        return <CloseIcon size="tiny" variant="white" />;
      case variant === 'warning':
        return <WarningIcon size="tiny" variant="white" />;
      default:
        return <div />;
    }
  };

  return (
    <li
      className={
        orientation === 'horizontal'
          ? styles.horizontalListItem(isBeforeActiveStep, isActiveStep)
          : styles.verticalListItem(isBeforeActiveStep, isActiveStep)
      }
      ref={ref}
      data-test-id={`cf-ui-step-${variant}`}
      aria-label={`Step ${stepNumberToDisplay} ${variant}`}
    >
      <span
        className={cx(styles.listItemContent, {
          [styles.active]: variant === 'active',
          [styles.disabled]: variant === 'disabled',
          [styles.complete]: variant === 'complete',
          [styles.error]: variant === 'error',
          [styles.warning]: variant === 'warning',
        })}
      >
        {renderStep()}
      </span>
      {labelText && (
        <p
          className={cx(
            orientation === 'horizontal'
              ? styles.horizontalLabel
              : styles.verticalLabel,
            {
              [styles.incompleteLabel]: variant === 'incomplete',
              [styles.disabledLabel]: variant === 'disabled',
            },
          )}
        >
          {labelText}
        </p>
      )}
    </li>
  );
}

export const Step = React.forwardRef(_Step);
