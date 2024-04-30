import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Flex } from '@contentful/f36-core';
import { getStyles } from './Stepper.styles';

export interface StepperProps extends CommonProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  stepStyle?: 'number' | 'icon';
  activeStep?: number;
  id?: string;
}

function _Stepper(props: StepperProps, ref: React.Ref<HTMLDivElement>) {
  const styles = getStyles();

  return (
    <nav className={styles.progress}>
      <Flex className={styles.list('50%')}>{props.children}</Flex>
    </nav>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Stepper = React.forwardRef(_Stepper);
