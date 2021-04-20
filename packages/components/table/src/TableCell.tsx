import { css, cx } from 'emotion';
import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import tokens from '@contentful/f36-tokens';
import { Primitive } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

import { TableCellContext } from './';

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export type TableCellSorting = keyof typeof sortingDirections | boolean;

export type TableCellInternalProps = CommonProps &
  HTMLProps<HTMLTableCellElement> & {
    align?: 'center' | 'left' | 'right';
    sorting?: TableCellSorting;
    children?: React.ReactNode;
  };

export type TableCellProps = TableCellInternalProps;

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  function TableCell(
    {
      align = 'left',
      children,
      className,
      sorting = false as TableCellSorting,
      testId = 'cf-ui-table-cell',
      ...otherProps
    },
    forwardedRef,
  ) {
    return (
      <TableCellContext.Consumer>
        {({ as, name: context, offsetTop }) => {
          const isTableHead = context === 'head';

          return (
            <Primitive
              {...otherProps}
              as={as}
              className={cx(
                css({
                  backgroundColor: isTableHead
                    ? tokens.colorElementLightest
                    : undefined,
                  borderBottom: `1px solid ${tokens.colorElementLight}`,
                  color: sorting ? tokens.colorTextDark : tokens.colorTextMid,
                  fontFamily: tokens.fontStackPrimary,
                  fontSize: tokens.fontSizeM,
                  fontWeight: tokens.fontWeightNormal,
                  lineHeight: tokens.lineHeightDefault,
                  padding: `${tokens.spacingS} ${tokens.spacingM}`,
                  textAlign: align,
                  verticalAlign: 'top',
                }),
                className,
              )}
              ref={forwardedRef}
              style={{
                ...otherProps.style,
                top: offsetTop,
              }}
              testId={testId}
            >
              {children}
            </Primitive>
          );
        }}
      </TableCellContext.Consumer>
    );
  },
);
