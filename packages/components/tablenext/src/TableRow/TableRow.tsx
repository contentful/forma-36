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
import { TableCell } from '../';

export type TableRowInternalProps = CommonProps & {
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
    } = useTableContext();

    const originalCells = Children.toArray(children);
    const updatedCells: React.ReactNode[] = [];

    columnTitles?.forEach((title, i) => {
      if (i > 0) {
        updatedCells.push(
          <TableCell key={`stacked-title-${title}`} aria-hidden>
            {title}
          </TableCell>,
        );
      }
      if (originalCells.length > i) {
        updatedCells.push(originalCells[i]);
      }
    });

    return (
      <Box
        {...otherProps}
        as="tr"
        className={cx(
          styles.root,
          {
            [styles.selected]: isSelected,
            [styles.stackable(hasColumnTitles)]: isStackable,
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
