import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Table.css';

export type TableProps = {
  testId?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & Partial<typeof defaultProps>;

const defaultProps = {
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
