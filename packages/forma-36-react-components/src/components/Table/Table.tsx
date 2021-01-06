import React from 'react';
import cn from 'classnames';
import type { HTMLProps } from 'react';

import styles from './Table.css';

export interface TableProps extends HTMLProps<HTMLTableElement> {
  testId?: string;
  className?: string;
  children: React.ReactNode;
}

export const Table = ({
  className,
  children,
  testId = 'cf-ui-table',
  ...otherProps
}: TableProps) => {
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

export default Table;
