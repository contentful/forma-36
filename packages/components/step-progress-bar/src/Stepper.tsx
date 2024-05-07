import React from 'react';
import { cx } from 'emotion';
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
  const { children, orientation, stepStyle, activeStep, id } = props;
  const styles = getStyles();

  const stepsToRender = React.Children.toArray(props.children);

  return (
    <nav className={styles.progress}>
      <Flex as="ol" className={styles.list('0%')}>
        {stepsToRender.map((child, index) => {
          return React.cloneElement(child as React.ReactElement, {
            key: `steps-rendered-${index}`,
            stepStyle: stepStyle,
            stepNumber: index + 1,
          });
        })}
      </Flex>
    </nav>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Stepper = React.forwardRef(_Stepper);
