import React, { Children, forwardRef } from 'react';
import { type ExpandProps } from '@contentful/f36-core';
import {
  TableRow,
  TableCell,
  type TableRowProps,
} from '@contentful/f36-table-next';
import { useStackableTableContext } from '../tableContext';
import { getStackableTableRowStyles } from './StackableTableRow.styles';

export const StackableTableRow = forwardRef<
  HTMLTableRowElement,
  ExpandProps<TableRowProps>
>((props, forwardedRef) => {
  const { columnTitles, stackableBreakpoint } = useStackableTableContext();
  const styles = getStackableTableRowStyles();

  const { children, ...otherProps } = props;
  const originalCells = Children.toArray(children);
  const columnTitleCount = columnTitles.length;
  const cellCount = Math.max(columnTitleCount, originalCells.length);

  if (
    process.env.NODE_ENV !== 'production' &&
    columnTitleCount > 0 &&
    columnTitleCount !== originalCells.length
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      `[StackableTable.Row] Some row cells do not have matching column titles, which can make the cell content harder to understand. ` +
        `Received ${columnTitleCount} columnTitles for ${originalCells.length} row cells.`,
    );
  }

  const updatedCells: React.ReactNode[] = [];
  for (let i = 0; i < cellCount; i++) {
    const title = columnTitles[i];
    if (i > 0 && title) {
      updatedCells.push(
        <TableCell
          key={`stacked-title-${title.replace(/\s+/g, '')}-${i}`}
          className={styles.ghostTitle(stackableBreakpoint)}
          aria-hidden
        >
          {title}
        </TableCell>,
      );
    }
    if (originalCells.length > i) {
      updatedCells.push(originalCells[i]);
    }
  }

  return (
    <TableRow {...otherProps} ref={forwardedRef}>
      {updatedCells}
    </TableRow>
  );
});

StackableTableRow.displayName = 'StackableTableRow';
