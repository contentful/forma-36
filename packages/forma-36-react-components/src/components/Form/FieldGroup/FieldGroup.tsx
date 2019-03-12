import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./FieldGroup.css');

export interface FieldGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  extraClassNames?: string;
  children: React.ReactNode;
  row?: boolean;
}

export class FieldGroup extends Component<FieldGroupProps> {
  static defaultProps = {
    row: false,
  };

  render() {
    const { extraClassNames, children, row, ...otherProps } = this.props;

    const classNames = cn(styles.FieldGroup, styles.extraClassNames, {
      [styles['FieldGroup--row']]: row,
    });

    return (
      <div className={classNames} {...otherProps}>
        {React.Children.map(children, child => (
          <div className={styles.FieldGroup__item}>{child}</div>
        ))}
      </div>
    );
  }
}

export default FieldGroup;
