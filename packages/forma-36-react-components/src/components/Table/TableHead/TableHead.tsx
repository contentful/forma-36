import React, { HTMLProps } from 'react';
import cn from 'classnames';
import styles from './TableHead.css';

import { TableCellContext, contextOptions } from '../TableCell';

export interface TableHeadProps extends HTMLProps<HTMLTableSectionElement> {
  isSticky?: boolean;
  offsetTop?: number | string;
  className?: string;
  testId?: string;
  children: React.ReactNode;
}

const defaultProps: Partial<TableHeadProps> = {
  isSticky: false,
  testId: 'cf-ui-table-head',
};

const TableHead = (props: TableHeadProps) => {
  const {
    className,
    testId,
    offsetTop,
    isSticky,
    children,
    ...otherProps
  } = props;

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

TableHead.defaultProps = defaultProps;

export default TableHead;
