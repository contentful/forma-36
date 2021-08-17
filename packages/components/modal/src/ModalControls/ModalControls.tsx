import React from 'react';
import cn from 'classnames';

import styles from './ModalControls.css';

export interface ModalControlsProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  position?: 'left' | 'right';
}

export function ModalControls({
  testId = 'cf-ui-modal-controls',
  position = 'left',
  className,
  children,
  ...otherProps
}: ModalControlsProps): React.ReactElement {
  return (
    <div
      {...otherProps}
      className={cn(
        styles.ModalControls,
        {
          [styles['ModalControls--right']]: position === 'right',
        },
        className,
      )}
      data-test-id={testId}
    >
      {children}
    </div>
  );
}
