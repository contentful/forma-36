import React from 'react';
import cn from 'classnames';

import styles from './FieldGroup.css';

export interface FieldGroupProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
  row?: boolean;
}

export const FieldGroup = ({
  children,
  className,
  row = false,
  testId = 'cf-ui-field-group',
  ...otherProps
}: FieldGroupProps) => {
  const classNames = cn(styles.FieldGroup, className, {
    [styles['FieldGroup--row']]: row,
  });

  return (
    <div {...otherProps} data-test-id={testId} className={classNames}>
      {React.Children.map(children, (child) => (
        <div className={styles.FieldGroup__item}>{child}</div>
      ))}
    </div>
  );
};

export default FieldGroup;
