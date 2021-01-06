import React from 'react';
import cn from 'classnames';
import type { HTMLProps } from 'react';

import styles from './TableHead.css';
import { TableCellContext, contextOptions } from '../TableCell';

export interface TableHeadProps extends HTMLProps<HTMLTableSectionElement> {
  isSticky?: boolean;
  offsetTop?: number | string;
  className?: string;
  testId?: string;
  children: React.ReactNode;
}

export const TableHead = ({
  children,
  className,
  isSticky = false,
  offsetTop,
  testId = 'cf-ui-table-head',
  ...otherProps
}: TableHeadProps) => {
  const classNames = cn(className, {
    [styles[`TableHead--sticky`]]: isSticky,
  });

  return (
    <TableCellContext.Provider
      value={{ ...contextOptions.head, offsetTop: offsetTop || 0 }}
    >
      <thead className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </thead>
    </TableCellContext.Provider>
  );
};

export default TableHead;
