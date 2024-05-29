import React from 'react';
import { Flex, type CommonProps, type MarginProps } from '@contentful/f36-core';
import { getStyles } from './Stepper.styles';

export interface StepperProps extends CommonProps, MarginProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  stepStyle?: 'number' | 'icon';
  activeStep?: number;
  id?: string;
  height?: number;
  onClick?: (stepIndex: number) => void;
}

function _Stepper(props: StepperProps, ref: React.Ref<HTMLDivElement>) {
  const {
    children,
    orientation = 'horizontal',
    stepStyle = 'number',
    activeStep,
    id,
    height,
    onClick,
  } = props;
  const styles = getStyles();

  const stepsToRender = React.Children.toArray(children);
  const percentComplete = ((activeStep - 1) / (stepsToRender.length - 2)) * 100;
  const orderedListStyling =
    orientation === 'vertical'
      ? styles.verticalList(`${percentComplete}%`)
      : styles.horizontalList(`${percentComplete}%`);
  const calculateVerticalLineHeight = () => {
    if (orientation === 'vertical' && height) {
      const heightOfButton = 24;
      return (
        (height - heightOfButton * stepsToRender.length) /
        (stepsToRender.length - 1)
      );
    }
    return 0;
  };

  const renderSteps = () => {
    const steps = stepsToRender.map((child, index) => {
      const stepChild = React.cloneElement(child as React.ReactElement, {
        key: `steps-rendered-${index}`,
        stepStyle: stepStyle,
        stepNumber: index + 1,
        orientation,
        verticalLineHeight: calculateVerticalLineHeight(),
        isLastStep: stepsToRender.length - 1 === index,
        onClick,
        activeStep,
      });
      return (
        <Flex flexGrow={1} flexBasis={0} alignItems="center">
          {stepChild}
        </Flex>
      );
    });
    return steps;
  };

  return (
    <nav
      className={
        orientation === 'horizontal'
          ? styles.horizontalProgress
          : styles.verticalProgress
      }
    >
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
