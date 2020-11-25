import React, { HTMLProps } from 'react';
import cn from 'classnames';
import styles from './Table.css';

export interface TableProps extends HTMLProps<HTMLTableElement> {
  testId?: string;
  className?: string;
  children: React.ReactNode;
}

const defaultProps: Partial<TableProps> = {
  testId: 'cf-ui-table',
};

const Table = (props: TableProps) => {
  const { className, children, testId, ...otherProps } = props;

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
};

Table.defaultProps = defaultProps;

export default Table;
