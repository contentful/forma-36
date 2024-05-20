import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Flex } from '@contentful/f36-core';
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
    <Flex
      style={{ height: '100%', width: '100%' }}
      flexDirection="column"
      alignItems="baseline"
      justifyContent="center"
    >
      {/* <Flex flexDirection="row" alignItems="baseline" justifyContent="center"> */}
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
      <span
        style={{
          borderTop: `2px solid ${tokens.gray300}`,
          height: 0,
          position: 'absolute',
          top: '30%',
          width: '100%',
          zIndex: '-1',
        }}
      ></span>
      {/* </Flex> */}
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
