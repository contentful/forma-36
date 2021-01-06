import React from 'react';
import cn from 'classnames';
import type { HTMLProps, ElementType } from 'react';

import { TableCellContext } from './TableCellContext';
import styles from './TableCell.css';

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export type TableCellSorting = keyof typeof sortingDirections | boolean;

export interface TableCellProps extends HTMLProps<HTMLTableCellElement> {
  align?: 'center' | 'left' | 'right';
  sorting?: TableCellSorting;
  className?: string;
  testId?: string;
  children?: React.ReactNode;
}

export const TableCell = ({
  align = 'left',
  children,
  className,
  sorting = false as TableCellSorting,
  testId = 'cf-ui-table-cell',
  ...otherProps
}: TableCellProps) => {
  return (
    <TableCellContext.Consumer>
      {({ name: context, element, offsetTop }) => {
        const Element = element as ElementType;
        return (
          <Element
            className={cn(styles['TableCell'], className, {
              [styles['TableCell--head']]: context === 'head',
              [styles['TableCell--head__sorting']]: sorting,
            })}
            style={{
              top: offsetTop,
            }}
            align={align}
            data-test-id={testId}
            {...otherProps}
          >
            {children}
          </Element>
        );
      }}
    </TableCellContext.Consumer>
  );
};

export default TableCell;
