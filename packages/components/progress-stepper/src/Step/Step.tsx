import React from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import { getStyles } from './Step.styles';
import { DoneIcon, CloseIcon, WarningIcon } from '@contentful/f36-icons';

export interface StepProps extends CommonProps {
  /**
   * @default incomplete
   */
  state?:
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
    state = 'incomplete',
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
      case state === 'complete':
        return <DoneIcon size="tiny" variant="white" />;
      case state === 'error':
        return <CloseIcon size="tiny" variant="white" />;
      case state === 'warning':
        return <WarningIcon size="tiny" variant="white" />;
      default:
        return <div />;
    }
  };

  return (
    <li
      className={cx(
        orientation === 'horizontal'
          ? styles.horizontalListItem(isBeforeActiveStep, isActiveStep)
          : styles.verticalListItem(isBeforeActiveStep, isActiveStep),
        {
          [styles.incomplete]: state === 'incomplete',
          [styles.active]: state === 'active',
          [styles.disabled]: state === 'disabled',
          [styles.complete]: state === 'complete',
          [styles.error]: state === 'error',
          [styles.warning]: state === 'warning',
          [styles.incompleteIcon]:
            state === 'incomplete' && stepStyle === 'icon',
          [styles.activeIcon]: state === 'active' && stepStyle === 'icon',
          [styles.disabledIcon]: state === 'disabled' && stepStyle === 'icon',
          [styles.completeIcon]: state === 'complete' && stepStyle === 'icon',
          [styles.errorIcon]: state === 'error' && stepStyle === 'icon',
          [styles.warningIcon]: state === 'warning' && stepStyle === 'icon',
        },
      )}
      ref={ref}
      data-test-id={`cf-ui-step-${state}`}
      aria-label={`Step ${stepNumberToDisplay} ${state}`}
    >
      <p>{labelText}</p>
      {/* <span
        className={cx(styles.listItemContent, {
          [styles.active]: state === 'active',
          [styles.disabled]: state === 'disabled',
          [styles.complete]: state === 'complete',
          [styles.error]: state === 'error',
          [styles.warning]: state === 'warning',
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
              [styles.incompleteLabel]: state === 'incomplete',
              [styles.disabledLabel]: state === 'disabled',
            },
          )}
        >
          {labelText}
        </p>
      )} */}
    </li>
  );
}

export const Step = React.forwardRef(_Step);
