import React, { useMemo } from 'react';

import { DoneIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';

// import { Flex, ScreenReaderOnly } from 'core/forma';
import { Flex, ScreenReaderOnly } from '@contentful/f36-components';

const styles = {
  progress: css({
    position: 'relative',
  }),
  list: (width: string) =>
    css({
      position: 'relative',
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '0',
        height: '2px',
        zIndex: tokens.zIndexNegative,
        transform: 'translateY(-50%)',
      },
      '&::before': {
        backgroundColor: tokens.gray300,
        width: '100%',
      },
      '&::after': {
        backgroundColor: tokens.colorPrimary,
        width,
        transition: `width ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
      },
    }),
  lastItem: css({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  }),
  number: css({
    borderRadius: '50%',
    border: `2px solid ${tokens.gray300}`,
    color: tokens.gray300,
    width: tokens.spacingL,
    height: tokens.spacingL,
    display: 'inline-block',
    textAlign: 'center',
    backgroundColor: 'white',
    fontWeight: tokens.fontWeightDemiBold,
    fontSize: tokens.fontSizeS,
    padding: 0,
    '&:hover:enabled': {
      cursor: 'pointer',
      backgroundColor: tokens.gray200,
    },
    '&:focus': {
      outline: '0',
      boxShadow: tokens.glowPrimary,
    },
  }),
  numberCurrent: css({
    color: tokens.colorPrimary,
    borderColor: tokens.colorPrimary,
  }),
  icon: css({
    transform: 'translateY(2px)',
  }),
  confirmIcon: css({
    fill: tokens.gray300,
  }),
  clickable: css({
    cursor: 'pointer',
  }),
};

type ProgressBarProps = {
  id: string;
  numSteps: number;
  currentStepIndex: number;
  /**
   * If true will render the progress as 50% done between current and next step.
   * @default false
   */
  isInBetweenSteps?: boolean;
  onClick?: (stepIndex: number) => void;
};

// The last step of the progress is visually hidden
// Instead, we render a grey checkmark for the second to last step that becomes blue on the last step
const renderStep = (step: number, numSteps: number, currentStep: number) => {
  if (step === numSteps - 1) {
    if (currentStep === numSteps) {
      return <DoneIcon size="tiny" variant="primary" className={styles.icon} />;
    } else {
      return (
        <DoneIcon
          size="tiny"
          variant="muted"
          className={cx(styles.icon, styles.confirmIcon)}
        />
      );
    }
  }
  return step;
};

type StepInfo = {
  stepIndex: number;
  isCurrent: boolean;
  isDone: boolean;
  isClickable: boolean;
};

export function ProgressBar(props: ProgressBarProps) {
  const {
    id,
    numSteps,
    currentStepIndex,
    isInBetweenSteps = false,
    onClick,
  } = props;
  const currentStep = isInBetweenSteps
    ? currentStepIndex + 0.5
    : currentStepIndex;
  const width = ((currentStep - 1) / (numSteps - 2)) * 100;
  const stepInfo = useMemo(() => {
    const steps: StepInfo[] = [...Array(numSteps)].map((_item, i) => {
      const step = i + 1;
      return {
        stepIndex: step,
        isCurrent: step === currentStepIndex,
        isDone: step <= currentStepIndex,
        isClickable: step < currentStepIndex && !!onClick,
      };
    });

    return steps;
  }, [numSteps, currentStepIndex, onClick]);

  return (
    <>
      <nav aria-describedby={id} className={styles.progress}>
        <Flex
          as="ol"
          justifyContent="space-between"
          fullWidth
          className={styles.list(`${width}%`)}
        >
          {stepInfo.map(({ stepIndex, isCurrent, isDone, isClickable }) => (
            <Flex
              as="li"
              key={stepIndex}
              aria-current={isCurrent && 'step'}
              onClick={isClickable ? () => onClick?.(stepIndex) : undefined}
              className={cx({
                [styles.lastItem]: numSteps === stepIndex,
                [styles.clickable]: isClickable,
              })}
            >
              <button
                disabled={!isClickable}
                aria-label={`Step ${stepIndex}`}
                className={cx(styles.number, {
                  [styles.numberCurrent]: isDone,
                })}
              >
                {renderStep(stepIndex, numSteps, currentStep)}
              </button>
            </Flex>
          ))}
        </Flex>
      </nav>
      <ScreenReaderOnly>
        <div id={id} aria-live="polite">
          Current step is {currentStep} of {numSteps}.
        </div>
      </ScreenReaderOnly>
    </>
  );
}
