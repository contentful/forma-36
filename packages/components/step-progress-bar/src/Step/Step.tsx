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
  orientation?: 'horizontal' | 'vertical';
  stepStyle?: 'number' | 'icon';
  // onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function _Step(props: StepProps, ref: React.Ref<HTMLDivElement>) {
  const styles = getStyles();
  const { isActive, isInvalid, isWarning, isComplete } = props;

  const renderStep = () => {
    // TODO: implement disabled state
    // TODO: update each state to render properly according to design
    switch (true) {
      case isActive:
        return <div className={styles.numberCurrent}>{''}</div>;
      case isComplete:
        return (
          <DoneIcon
            size="tiny"
            variant="muted"
            className={cx(styles.icon, styles.confirmIcon)}
          />
        );
      case isInvalid:
        return (
          <CloseIcon size="tiny" variant="negative" className={styles.icon} />
        );
      case isWarning:
        return (
          <WarningIcon size="tiny" variant="warning" className={styles.icon} />
        );
      default:
        return <div>{''}</div>;
    }
  };

  return (
    <li style={{ listStyle: 'none' }}>
      <button
        type="button"
        className={cx(styles.number, {
          [styles.numberCurrent]: isActive,
        })}
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
