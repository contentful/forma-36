import React, { Component } from 'react';
import cn from 'classnames';

import styles from './TableRow.css';

export interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

export class TableRow extends Component<TableRowProps> {
  render() {
    const { className, children, ...otherProps } = this.props;

    return (
      <tr className={cn(styles['TableRow'], className)} {...otherProps}>
        {children}
      </tr>
    );
  }
}

export default TableRow;
