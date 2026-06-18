import { css, cx } from '@emotion/css';
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
    const { columnTitles } = useTableContext();

    const originalCells = Children.toArray(children);
    const updatedCells = [];
    columnTitles?.forEach((title, i) => {
      if (i > 0) {
        updatedCells.push(<TableCell aria-hidden>{title} x</TableCell>);
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
          },
          className,
        )}
        ref={forwardedRef}
        testId={testId}
      >
        {updatedCells}
      </Box>
    );
  },
);

TableRow.displayName = 'TableRow';
