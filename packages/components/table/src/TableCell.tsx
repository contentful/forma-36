import { css, cx } from 'emotion';
import React, { forwardRef, useContext } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box, Forma36Context } from '@contentful/f36-core';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';

import { TableCellContext } from './tableCellContext';

const getStyles = ({ align, isTableHead, sorting, theme }) => {
  return {
    tableCell: css({
      backgroundColor: isTableHead ? tokens.gray100 : undefined,
      borderBottom: `1px solid ${tokens.gray200}`,
      color: sorting ? theme.tableCell.colorSorting : theme.tableCell.color,
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeM,
      fontWeight: isTableHead
        ? tokens.fontWeightMedium
        : tokens.fontWeightNormal,
      lineHeight: tokens.lineHeightL,
      padding: `${tokens.spacingS} ${tokens.spacingM}`,
      textAlign: align,
      verticalAlign: 'top',
    }),
  };
};

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export type TableCellSorting = keyof typeof sortingDirections | boolean;

export type TableCellInternalProps = CommonProps & {
  align?: 'center' | 'left' | 'right';
  sorting?: TableCellSorting;
  width?: string | number;
  children?: React.ReactNode;
};

export type TableCellProps = PropsWithHTMLElement<
  TableCellInternalProps,
  'th' | 'td'
>;

export const TableCell = forwardRef<
  HTMLTableCellElement,
  ExpandProps<TableCellProps>
>(
  (
    {
      align = 'left',
      children,
      className,
      sorting = false as TableCellSorting,
      testId = 'cf-ui-table-cell',
      ...otherProps
    },
    forwardedRef,
  ) => {
    const { theme } = useContext(Forma36Context);

    return (
      <TableCellContext.Consumer>
        {({ as, name: context, offsetTop }) => {
          const isTableHead = context === 'head';
          const styles = getStyles({
            align,
            isTableHead,
            sorting,
            theme,
          });

          return (
            <Box
              {...otherProps}
              as={as}
              className={cx(styles.tableCell, className)}
              ref={forwardedRef}
              style={{
                ...otherProps.style,
                top: offsetTop || undefined,
              }}
              testId={testId}
            >
              {children}
            </Box>
          );
        }}
      </TableCellContext.Consumer>
    );
  },
);

TableCell.displayName = 'TableCell';
