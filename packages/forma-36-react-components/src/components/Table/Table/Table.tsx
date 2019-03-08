import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Table.css';

export interface TableProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

export class Table extends Component<TableProps> {
  render() {
    const { extraClassNames, children, ...otherProps } = this.props;

    return (
      <table
        className={cn(extraClassNames, styles['Table'])}
        cellPadding="0"
        cellSpacing="0"
        {...otherProps}
      >
        {children}
      </table>
    );
  }
}

export default Table;
