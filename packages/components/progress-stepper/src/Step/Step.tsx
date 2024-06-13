import React from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import { getStyles } from './Step.styles';
import { DoneIcon, CloseIcon, WarningIcon } from '@contentful/f36-icons';

export interface StepProps extends CommonProps {
  variant?:
    | 'active'
    | 'error'
    | 'warning'
    | 'disabled'
    | 'complete'
    | 'incomplete';
  labelText?: string;
  stepNumber?: number;
  stepStyle?: 'number' | 'icon';
  orientation?: 'horizontal' | 'vertical';
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

  const renderStep = () => {
    switch (true) {
      case stepStyle === 'number':
        return stepNumber;
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

/**
 * TODO: Add description of component here.
 */
export const Step = React.forwardRef(_Step);
