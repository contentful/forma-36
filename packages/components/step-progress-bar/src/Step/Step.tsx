import React from 'react';
import { cx } from 'emotion';
import { type CommonProps, Flex } from '@contentful/f36-core';
import { getStyles } from './Step.styles';
import { DoneIcon, CloseIcon, WarningIcon } from '@contentful/f36-icons';
import { Paragraph } from '@contentful/f36-typography';
import tokens from '@contentful/f36-tokens';

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
  verticalLineHeight?: number;
  isLastStep: boolean;
  onClick?: (stepIndex: number) => void;
  activeStep?: number;
}

function _Step(props: StepProps, ref: React.Ref<HTMLDivElement>) {
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
    verticalLineHeight,
    isLastStep,
    onClick,
    activeStep,
  } = props;

  const isClickable = !!onClick && !isDisabled && stepNumber < activeStep;

  const handleClick = () => {
    if (isClickable) {
      onClick(stepNumber);
    } else return;
  };

  const renderStep = () => {
    switch (true) {
      case stepStyle === 'number':
        return stepNumber;
      case isComplete:
        return <DoneIcon size="tiny" variant="white" className={styles.icon} />;
      case isInvalid:
        return (
          <CloseIcon size="tiny" variant="white" className={styles.icon} />
        );
      case isWarning:
        // TO DO: adjust size/spacing of warning icon
        return (
          <WarningIcon size="tiny" variant="white" className={styles.icon} />
        );
      default:
        return <div />;
    }
  };

  return (
    <Flex style={{ width: isLastStep ? 'auto' : '100%' }}>
      <Flex
        className={
          orientation === 'vertical'
            ? styles.verticalStep
            : styles.horizontalStep
        }
      >
        <Flex
          flexDirection={orientation === 'vertical' ? 'column' : 'row'}
          alignItems="center"
          justifyContent="center"
          style={orientation === 'horizontal' ? { width: '100%' } : {}}
        >
          <li className={styles.listItem}>
            <button
              type="button"
              className={cx(styles.button, {
                [styles.isActive]: isActive,
                [styles.isDisabled]: isDisabled,
                [styles.isComplete]: isComplete,
                [styles.isInvalid]: isInvalid,
                [styles.isWarning]: isWarning,
                [styles.clickable]: isClickable,
              })}
              onClick={handleClick}
              disabled={isDisabled}
            >
              {renderStep()}
            </button>
          </li>
          {!isLastStep && (
            <>
              {orientation === 'horizontal' ? (
                <span
                  style={{
                    borderTop: `2px solid ${
                      stepNumber < activeStep
                        ? tokens.colorPrimary
                        : tokens.gray300
                    }`,
                    height: 0,
                    width: '100%',
                    zIndex: '-1',
                    transition: 'border-color 0.3s ease-in-out',
                  }}
                ></span>
              ) : (
                <span
                  style={{
                    borderLeft: `2px solid ${tokens.gray300}`,
                    height: verticalLineHeight,
                    width: 0,
                    zIndex: '-1',
                  }}
                ></span>
              )}
            </>
          )}
        </Flex>
        {labelText && (
          <Paragraph className={styles.stepLabel} marginBottom="none">
            {labelText}
          </Paragraph>
        )}
      </Flex>
    </Flex>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Step = React.forwardRef(_Step);