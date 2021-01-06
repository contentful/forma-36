import React from 'react';
import cn from 'classnames';

import styles from './ModalControls.css';

export interface ModalControlsProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function ModalControls({
  testId = 'cf-ui-modal-controls',
  className,
  children,
  ...rest
}: ModalControlsProps): React.ReactElement {
  return (
    <div
      {...rest}
      className={cn(styles.ModalControls, className)}
      data-test-id={testId}
    >
      {children}
    </div>
  );
}

export default ModalControls;
