import React, { Component } from 'react';
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

export class FieldGroup extends Component<FieldGroupProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, row, testId, ...otherProps } = this.props;

    const classNames = cn(styles.FieldGroup, className, {
      [styles['FieldGroup--row']]: row,
    });

    return (
      <div {...otherProps} data-test-id={testId} className={classNames}>
        {React.Children.map(children, child => (
          <div className={styles.FieldGroup__item}>{child}</div>
        ))}
      </div>
    );
  }
}

export default FieldGroup;
