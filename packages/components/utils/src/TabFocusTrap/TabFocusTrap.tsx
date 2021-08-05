import React from 'react';
import { cx, css } from 'emotion';

export interface TabFocusTrapProps {
  className?: string;
  children: React.ReactNode;
}

export function TabFocusTrap({
  className,
  children,
  ...otherProps
}: TabFocusTrapProps): React.ReactElement {
  return (
    <span
      tabIndex={-1}
      className={cx(
        css({
          display: 'inherit',
          outline: 0,
        }),
        className,
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
}
