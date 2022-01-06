import { cx } from 'emotion';
import React from 'react';
import { getStyles } from './ScreenReaderOnly.styles';
import type { CommonProps } from '../types';

export interface ScreenReaderOnlyProps extends CommonProps {
  children?: React.ReactNode;
  as?: 'div' | 'span';
}

export const ScreenReaderOnly = ({
  children,
  className,
  testId = 'cf-ui-ScreenReaderOnly',
  as = 'div',
  ...otherProps
}: ScreenReaderOnlyProps) => {
  const styles = getStyles();

  const Element: React.ElementType = as;

  return (
    <Element
      {...otherProps}
      data-test-id={testId}
      className={cx(styles.screenReaderOnly, className)}
    >
      {children}
    </Element>
  );
};
