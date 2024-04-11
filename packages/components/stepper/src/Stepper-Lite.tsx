import React, { useMemo } from 'react';
import { DoneIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import { Flex, ScreenReaderOnly } from '@contentful/f36-components';

// export interface StepperProps extends CommonProps {
//   children: React.ReactNode;
// }

const styles = {
  bar: css({
    position: 'relative',
    zIndex: 0,
    width: '100%',
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
    lineHeight: tokens.lineHeightM,
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
};

// The last step of the progress is visually hidden
// Instead, we render a grey checkmark for the second to last step that becomes blue on the last step
const renderStep = (step: number, numSteps: number, currentStep: number) => {
  if (step === numSteps) {
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

// type StepperProps = {
//   numSteps: number;
//   currentStep: number;
// };

function _Stepper(props: any, ref: React.Ref<HTMLDivElement>) {
  // const styles = getStyles();
  const id = 'experience-type-creation-progress-bar';
  const { numSteps, currentStep } = props;
  const progressWidth = ((currentStep - 1) / (numSteps - 1)) * 100;
  const stepInfo = useMemo(() => {
    const steps = [...Array(numSteps + 1)].map((_item, i) => {
      const step = i + 1;
      return {
        step,
        isCurrent: step === currentStep,
        isDone: step <= currentStep,
      };
    });

    return steps;
  }, [numSteps, currentStep]);

  return (
    <>
      <nav aria-describedby={id} className={styles.bar}>
        <Flex
          as="ol"
          justifyContent="space-between"
          fullWidth
          className={styles.list(`${progressWidth}%`)}
        >
          {stepInfo.map(({ step, isCurrent, isDone }) => (
            <Flex
              as="li"
              key={step}
              aria-current={isCurrent && 'step'}
              marginBottom="none"
              className={cx({
                [styles.lastItem]: numSteps + 1 === step,
              })}
            >
              <div
                className={cx(styles.number, {
                  [styles.numberCurrent]: isDone,
                })}
              >
                {renderStep(step, numSteps, currentStep)}
              </div>
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

/**
 * TODO: Add description of component here.
 */
export const Stepper = React.forwardRef(_Stepper);
