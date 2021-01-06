import React from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
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
      <Icon
        icon="ErrorCircle"
        className={styles['ValidationMessage__icon']}
        color="negative"
      />
      <p className={styles['ValidationMessage__text']}>{children}</p>
    </div>
  );
}

export default ValidationMessage;
