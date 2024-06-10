import React from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import { getStyles } from './Step.styles';
import { DoneIcon, CloseIcon, WarningIcon } from '@contentful/f36-icons';

export interface StepProps extends CommonProps {
  variant?:
    | 'active'
    | 'invalid'
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

function _Step(props: StepProps, ref: React.Ref<HTMLDivElement>) {
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
      case variant === 'invalid':
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
          ? styles.listItem(isBeforeActiveStep, isActiveStep)
          : styles.verticalListItem(isBeforeActiveStep, isActiveStep)
      }
    >
      <span
        className={cx(styles.listItemContent, {
          [styles.isActive]: variant === 'active',
          [styles.isDisabled]: variant === 'disabled',
          [styles.isComplete]: variant === 'complete',
          [styles.isInvalid]: variant === 'invalid',
          [styles.isWarning]: variant === 'warning',
        })}
      >
        {renderStep()}
      </span>
      {labelText && (
        <p
          className={
            orientation === 'horizontal' ? styles.label : styles.verticalLabel
          }
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
