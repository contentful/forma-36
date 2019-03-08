import React, { Component } from 'react';
import cn from 'classnames';

import styles from './TableRow.css';

export interface TableRowProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

export class TableRow extends Component<TableRowProps> {
  render() {
    const { extraClassNames, children, ...otherProps } = this.props;

    return (
      <tr className={cn(styles['TableRow'], extraClassNames)} {...otherProps}>
        {children}
      </tr>
    );
  }
}

export default TableRow;
