import React from 'react';
import cn from 'classnames';

import styles from './ModalContent.css';

export interface ModalContentProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function ModalContent({
  testId,
  className,
  children,
  ...rest
}: ModalContentProps): React.ReactElement {
  return (
    <div
      {...rest}
      className={cn(styles.ModalContent, className)}
      data-test-id={testId}
    >
      {children}
    </div>
  );
}

ModalContent.defaultProps = {
  testId: 'cf-ui-modal-content',
};

export default ModalContent;
