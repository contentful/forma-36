import React from 'react';
import cn from 'classnames';
import { ErrorCircleOutline } from '@contentful/f36-icons';

import styles from './ValidationMessage.css';

export interface ValidationMessageProps {
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function ValidationMessage({
  className,
  children,
  testId = 'cf-ui-validation-message',
  ...otherProps
}: ValidationMessageProps): React.ReactElement {
  const classNames = cn(styles['ValidationMessage'], className);

  return (
    <div {...otherProps} className={classNames} data-test-id={testId}>
      <ErrorCircleOutline
        className={styles['ValidationMessage__icon']}
        variant="negative"
      />
      <p className={styles['ValidationMessage__text']}>{children}</p>
    </div>
  );
}
