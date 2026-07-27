import { cx } from '@emotion/css';
import React, { Children, forwardRef } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { getTableRowStyles } from './TableRow.styles';
import { useTableContext } from '../tableContext';
import { TableCell } from '../TableCell/TableCell';

type TableRowInternalProps = CommonProps & {
  isSelected?: boolean;
  children: React.ReactNode;
};

export type TableRowProps = PropsWithHTMLElement<TableRowInternalProps, 'tr'>;

export const TableRow = forwardRef<
  HTMLTableRowElement,
  ExpandProps<TableRowProps>
>(
  (
    {
      className,
      children,
      isSelected = false,
      testId = 'cf-ui-table-row',
      ...otherProps
    },
    forwardedRef,
  ) => {
    const styles = getTableRowStyles();
    const {
      isStackable,
      columnTitles,
      hasColumnTitles = false,
      stackableBreakpoint = '700px',
    } = useTableContext();

    const originalCells = Children.toArray(children);
    const updatedCells: React.ReactNode[] = [];
    const columnTitleCount = columnTitles?.length ?? 0;
    const cellCount = Math.max(columnTitleCount, originalCells.length);

    if (
      process.env.NODE_ENV !== 'production' &&
      hasColumnTitles &&
      columnTitleCount !== originalCells.length
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        `[TableNext.Row] Some row cells do not have matching column titles, which can make the cell content harder to understand. ` +
          `Received ${columnTitleCount} columnTitles for ${originalCells.length} row cells.`,
      );
    }

    for (let i = 0; i < cellCount; i++) {
      const title = columnTitles?.[i];

      if (isStackable && i > 0 && title) {
        updatedCells.push(
          <TableCell
            key={`stacked-title-${title.replace(/\s+/g, '')}-${i}`}
            className={styles.stackableTitle(stackableBreakpoint)}
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
      <Box
        {...otherProps}
        as="tr"
        className={cx(
          styles.root,
          {
            [styles.selected]: isSelected,
            [styles.stackableRow(hasColumnTitles, stackableBreakpoint)]:
              isStackable,
          },
          className,
        )}
        ref={forwardedRef}
        testId={testId}
      >
        {hasColumnTitles ? updatedCells : children}
      </Box>
    );
  },
);

TableRow.displayName = 'TableRow';
