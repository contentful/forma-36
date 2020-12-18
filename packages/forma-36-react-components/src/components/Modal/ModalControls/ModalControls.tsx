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
  testId,
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

ModalControls.defaultProps = {
  testId: 'cf-ui-modal-controls',
};

export default ModalControls;
