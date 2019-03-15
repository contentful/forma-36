import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./FieldGroup.css');

export type FieldGroupProps = {
  extraClassNames?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  row?: boolean;
} & typeof defaultProps;

const defaultProps = {
  row: false,
};

export class FieldGroup extends Component<FieldGroupProps> {
  static defaultProps = defaultProps;

  render() {
    const { extraClassNames, children, row, ...otherProps } = this.props;

    const classNames = cn(styles.FieldGroup, styles.extraClassNames, {
      [styles['FieldGroup--row']]: row,
    });

    return (
      <div {...otherProps} className={classNames}>
        {React.Children.map(children, child => (
          <div className={styles.FieldGroup__item}>{child}</div>
        ))}
      </div>
    );
  }
}

export default FieldGroup;
