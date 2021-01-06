import React from 'react';
import cn from 'classnames';
import type { HTMLProps } from 'react';

import styles from './TableRow.css';

export interface TableRowProps extends HTMLProps<HTMLTableRowElement> {
  className?: string;
  testId?: string;
  children: React.ReactNode;
}

export const TableRow = ({
  className,
  children,
  testId = 'cf-ui-table-row',
  ...otherProps
}: TableRowProps) => {
  return (
    <tr
      className={cn(styles['TableRow'], className)}
      data-test-id={testId}
      {...otherProps}
    >
      {children}
    </tr>
  );
};

export default TableRow;
