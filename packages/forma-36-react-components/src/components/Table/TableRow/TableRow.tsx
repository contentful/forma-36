import React, { Component } from 'react';
import cn from 'classnames';

import styles from './TableRow.css';

export type TableRowProps = {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  children: React.ReactNode;
} & Partial<typeof defaultProps>;

const defaultProps = {
  testId: 'cf-ui-table-row',
};

export class TableRow extends Component<TableRowProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    return (
      <tr
        className={cn(styles['TableRow'], className)}
        data-test-id={testId}
        {...otherProps}
      >
        {children}
      </tr>
    );
  }
}

export default TableRow;
