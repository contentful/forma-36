import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./FieldGroup.css');

export type FieldGroupProps = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
  row?: boolean;
} & typeof defaultProps;

const defaultProps = {
  row: false,
  testId: 'cf-ui-field-group',
};

export class FieldGroup extends Component<FieldGroupProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, row, testId, ...otherProps } = this.props;

    const classNames = cn(styles.FieldGroup, styles.className, {
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
