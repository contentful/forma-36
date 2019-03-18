import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Table.css';

export interface TableProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export class Table extends Component<TableProps> {
  render() {
    const { className, children, ...otherProps } = this.props;

    return (
      <table
        className={cn(className, styles['Table'])}
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
