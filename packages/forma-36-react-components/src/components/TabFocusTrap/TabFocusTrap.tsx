import React from 'react';
import cn from 'classnames';

import styles from './TabFocusTrap.css';

export interface TabFocusTrapProps {
  className?: string;
  children: React.ReactNode;
}

export function TabFocusTrap({
  className,
  children,
  ...otherProps
}: TabFocusTrapProps): React.ReactElement {
  const classNames = cn(styles.TabFocusTrap, className);

  return (
    <span tabIndex={-1} className={classNames} {...otherProps}>
      {children}
    </span>
  );
}
