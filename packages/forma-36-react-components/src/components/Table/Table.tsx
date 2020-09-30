import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Table.css';

export interface TableProps {
  testId?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const defaultProps: Partial<TableProps> = {
  testId: 'cf-ui-table',
};

export class Table extends Component<TableProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    return (
      <table
        className={cn(className, styles['Table'])}
        cellPadding="0"
        cellSpacing="0"
        data-test-id={testId}
        {...otherProps}
      >
        {children}
      </table>
    );
  }
}

export default Table;
