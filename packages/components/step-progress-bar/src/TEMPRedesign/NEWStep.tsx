import React from 'react';
import { cx } from 'emotion';
import { type CommonProps, Flex } from '@contentful/f36-core';
import { getStyles } from './NEWStep.styles';
import { DoneIcon, CloseIcon, WarningIcon } from '@contentful/f36-icons';
import { Paragraph } from '@contentful/f36-typography';

export interface StepProps extends CommonProps {
  isActive?: boolean;
  isInvalid?: boolean;
  isWarning?: boolean;
  isDisabled?: boolean;
  isComplete?: boolean;
  stepStyle?: 'number' | 'icon';
  // make this optional prop because parent component determines its value
  stepNumber?: number;
  labelText?: string;
  orientation?: 'horizontal' | 'vertical';
  // verticalLineHeight?: number;
  // isLastStep?: boolean;
  activeStep?: number;
}

function _NEWStep(props: StepProps, ref: React.Ref<HTMLDivElement>) {
  const styles = getStyles();
  const {
    isActive,
    isInvalid,
    isWarning,
    isComplete,
    isDisabled,
    stepStyle,
    stepNumber,
    labelText,
    orientation,
    // verticalLineHeight,
    // isLastStep,
    activeStep,
  } = props;

  const isBeforeActiveStep = stepNumber < activeStep;
  const isActiveStep = stepNumber === activeStep;

  const renderStep = () => {
    switch (true) {
      case stepStyle === 'number':
        return stepNumber;
      case isComplete:
        return <DoneIcon size="tiny" variant="white" />;
      case isInvalid:
        return <CloseIcon size="tiny" variant="white" />;
      case isWarning:
        // TO DO: adjust size/spacing of warning icon
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
          [styles.isActive]: isActive,
          [styles.isDisabled]: isDisabled,
          [styles.isComplete]: isComplete,
          [styles.isInvalid]: isInvalid,
          [styles.isWarning]: isWarning,
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
export const NEWStep = React.forwardRef(_NEWStep);
