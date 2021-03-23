import React from 'react';

export interface TabFocusTrapProps {
  className?: string;
  children: React.ReactNode;
}

export function TabFocusTrap({
  children,
  ...otherProps
}: TabFocusTrapProps): React.ReactElement {
  return (
    <span
      tabIndex={-1}
      css={{ display: 'inherit', outline: 0 }}
      {...otherProps}
    >
      {children}
    </span>
  );
}
