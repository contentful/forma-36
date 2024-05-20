import React from 'react';
import { Flex, CommonProps, MarginProps } from '@contentful/f36-core';
import { getStyles } from './Stepper.styles';

export interface StepperProps extends CommonProps, MarginProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  stepStyle?: 'number' | 'icon';
  activeStep?: number;
  id?: string;
}

function _Stepper(props: StepperProps, ref: React.Ref<HTMLDivElement>) {
  const {
    children,
    orientation = 'horizontal',
    stepStyle = 'number',
    activeStep,
    id,
  } = props;
  const styles = getStyles();

  const stepsToRender = React.Children.toArray(children);
  const percentComplete = ((activeStep - 1) / (stepsToRender.length - 2)) * 100;
  const orderedListStyling =
    orientation === 'vertical'
      ? styles.verticalList(`${percentComplete}%`)
      : styles.list(`${percentComplete}%`);

  const renderSteps = () => {
    const steps = stepsToRender.map((child, index) => {
      const stepChild = React.cloneElement(child as React.ReactElement, {
        key: `steps-rendered-${index}`,
        stepStyle: stepStyle,
        stepNumber: index + 1,
      });
      return (
        <Flex flexGrow={1} alignItems="center">
          {stepChild}
          {/* {stepsToRender.length - 1 !== index ? (
            <span className={styles.stepConnector}></span>
          ) : null} */}
        </Flex>
      );
    });
    return steps;
  };

  return (
    <nav className={styles.progress}>
      <Flex as="ol" className={orderedListStyling}>
        {renderSteps()}
      </Flex>
    </nav>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Stepper = React.forwardRef(_Stepper);
