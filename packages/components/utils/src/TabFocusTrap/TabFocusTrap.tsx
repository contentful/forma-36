import React from 'react';
import { cx, css } from 'emotion';

export interface TabFocusTrapProps {
  className?: string;
  children: React.ReactNode;
}

const styles = {
  root: css({
    display: 'inherit',
    outline: 0,
  }),
};

export function TabFocusTrap({
  className,
  children,
  ...otherProps
}: TabFocusTrapProps): React.ReactElement {
  return (
    <span tabIndex={-1} className={cx(styles.root, className)} {...otherProps}>
      {children}
    </span>
  );
}
