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

const defaultProps: Partial<FieldGroupProps> = {
  row: false,
  testId: 'cf-ui-field-group',
};

export const FieldGroup = (props: FieldGroupProps) => {
  const { className, children, row, testId, ...otherProps } = props;

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

FieldGroup.defaultProps = defaultProps;

export default FieldGroup;
