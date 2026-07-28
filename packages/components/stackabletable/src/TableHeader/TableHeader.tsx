import React from 'react';
import { TableHead, TableRow, TableCell } from '@contentful/f36-table-next';
import { getTableHeaderStyles } from './TableHeader.styles';
import type { StackableBreakpointValue } from '../tableContext';

type TableHeaderProps = {
  columnTitles: Array<string>;
  /**
   * @default 0
   */
  offsetTop?: number | string;
  stackableBreakpoint: StackableBreakpointValue;
  isHeaderSticky?: boolean;
};

export const TableHeader = ({
  columnTitles,
  offsetTop = 0,
  stackableBreakpoint,
  isHeaderSticky = false,
}: TableHeaderProps) => {
  const styles = getTableHeaderStyles(stackableBreakpoint);

  return (
    <TableHead
      className={styles.stackableHeader}
      isSticky={isHeaderSticky}
      offsetTop={offsetTop}
    >
      <TableRow>
        {columnTitles.map((title) => (
          <TableCell key={`table-header-cell-${title.replace(/\s+/g, '')}`}>
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
