import React from 'react';
import { css, cx } from 'emotion';

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
  const classNames = cx(styles.root, className);

  return (
    <span tabIndex={-1} className={classNames} {...otherProps}>
      {children}
    </span>
  );
}
