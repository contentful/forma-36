import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { getStyles } from './Step.styles';
import { DoneIcon, CloseIcon, WarningIcon } from '@contentful/f36-icons';

export interface StepProps extends CommonProps {
  isActive?: boolean;
  isInvalid?: boolean;
  isWarning?: boolean;
  isDisabled?: boolean;
  isComplete?: boolean;
  stepStyle?: 'number' | 'icon';
  stepNumber: number;
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
        return (
          <WarningIcon size="tiny" variant="white" className={styles.icon} />
        );
      default:
        return <div />;
    }
  };

  return (
    <li style={{ listStyle: 'none' }}>
      <button
        type="button"
        className={cx(styles.number, {
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
  );
}

/**
 * TODO: Add description of component here.
 */
export const Step = React.forwardRef(_Step);
