import React from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';
import { Button } from '@contentful/f36-button';
import { getStyles } from './Step.styles';
import { CheckIcon, XIcon, WarningIcon } from '@contentful/f36-icons';

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
  /**
   * Private prop for the ProgressStepper component
   * @private
   * @param stepNumber
   */
  onClick?: (stepNumber: number) => void;
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
    onClick,
  } = props;

  const isBeforeActiveStep = stepNumber < activeStep;
  const isActiveStep = stepNumber === activeStep;
  const stepNumberToDisplay = stepNumber + 1;

  const renderStepContent = () => {
    switch (true) {
      case stepStyle === 'number':
        return stepNumberToDisplay;
      case state === 'complete':
        return <CheckIcon size="tiny" color={tokens.colorWhite} />;
      case state === 'error':
        return <XIcon size="tiny" color={tokens.colorWhite} />;
      case state === 'warning':
        return <WarningIcon size="tiny" color={tokens.colorWhite} />;
      default:
        return <div />;
    }
  };

  const getStepText = () => {
    if (labelText) {
      return labelText;
    }

    if (stepStyle === 'number') {
      return `Step ${stepNumberToDisplay}`;
    }

    return state.charAt(0).toUpperCase() + state.slice(1);
  };

  const handleStepClick = (
    e: React.MouseEvent<HTMLElement>,
    stepNumber: number,
  ) => {
    e.preventDefault();
    onClick(stepNumber);
  };

  const renderStepLabel = (isClickable: boolean) => {
    if (!labelText) {
      return null;
    }

    const classNames = cx(
      styles.label,
      orientation === 'horizontal'
        ? styles.horizontalLabel
        : styles.verticalLabel,
      {
        [styles.incompleteLabel]: state === 'incomplete',
        [styles.disabledLabel]: state === 'disabled',
      },
    );

    return isClickable ? (
      <Button
        type="button"
        className={classNames}
        variant="transparent"
        size="small"
        onClick={(e) => handleStepClick(e, stepNumber)}
        aria-label={labelText}
        tabIndex={-1}
      >
        {labelText}
      </Button>
    ) : (
      <span className={classNames}>{labelText}</span>
    );
  };

  const renderStep = () => {
    const classNames = cx(styles.listItemContent, {
      [styles.active]: state === 'active',
      [styles.disabled]: state === 'disabled',
      [styles.complete]: state === 'complete',
      [styles.error]: state === 'error',
      [styles.warning]: state === 'warning',
    });

    const content = renderStepContent();
    const isClickable = onClick && state !== 'disabled';
    const step = isClickable ? (
      <button
        type="button"
        className={classNames}
        onClick={(e) => handleStepClick(e, stepNumber)}
        aria-label={getStepText()}
      >
        {content}
      </button>
    ) : (
      <span className={classNames}>{content}</span>
    );
    return (
      <>
        {step}
        {renderStepLabel(isClickable)}
      </>
    );
  };

  return (
    <li
      className={
        orientation === 'horizontal'
          ? styles.horizontalListItem(isBeforeActiveStep, isActiveStep)
          : styles.verticalListItem(isBeforeActiveStep, isActiveStep)
      }
      ref={ref}
      data-test-id={`cf-ui-step-${state}`}
      aria-label={`Step ${stepNumberToDisplay} ${state}`}
    >
      {renderStep()}
    </li>
  );
}

export const Step = React.forwardRef(_Step);
