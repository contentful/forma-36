import { cx } from 'emotion';
import React from 'react';
import { getStyles } from './SrOnly.styles';
import type { CommonProps } from '@contentful/f36-core';

export interface SrOnlyProps extends CommonProps {
  children?: React.ReactNode;
}

export const SrOnly = ({
  children,
  className,
  testId = 'cf-ui-sronly',
  ...otherProps
}: SrOnlyProps) => {
  const styles = getStyles();

  return (
    <div
      {...otherProps}
      data-testid={testId}
      className={cx(styles.srOnly, className)}
    >
      {children}
    </div>
  );
};
