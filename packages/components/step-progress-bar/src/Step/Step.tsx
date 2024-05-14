import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Flex } from '@contentful/f36-core';
import { getStyles } from './Step.styles';
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
  // onClick?: (event: React.MouseEvent<HTMLElement>) => void;
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
  } = props;

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
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <li className={styles.listItem}>
        <button
          type="button"
          className={cx(styles.button, {
            [styles.isActive]: isActive,
            [styles.isDisabled]: isDisabled,
            [styles.isComplete]: isComplete,
            [styles.isInvalid]: isInvalid,
            [styles.isWarning]: isWarning,
          })}
          disabled={isDisabled}
        >
          {renderStep()}
        </button>
      </li>
      {labelText && (
        <Paragraph className={styles.stepLabel} marginBottom="none">
          {labelText}
        </Paragraph>
      )}
    </Flex>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Step = React.forwardRef(_Step);
