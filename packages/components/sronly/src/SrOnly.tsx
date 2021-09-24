import { cx } from 'emotion';
import React from 'react';
import { getStyles } from './SrOnly.styles';
import type { CommonProps } from '@contentful/f36-core';

export interface SrOnlyProps extends CommonProps {
  children?: React.ReactNode;
  as?: 'div' | 'span';
}

export const SrOnly = ({
  children,
  className,
  testId = 'cf-ui-sronly',
  as = 'div',
  ...otherProps
}: SrOnlyProps) => {
  const styles = getStyles();

  const Element: React.ElementType = as;

  return (
    <Element
      {...otherProps}
      data-testid={testId}
      className={cx(styles.srOnly, className)}
    >
      {children}
    </Element>
  );
};
