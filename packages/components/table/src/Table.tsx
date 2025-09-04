import { cx } from '@emotion/css';
import React, { forwardRef } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import type * as CSS from 'csstype';

import { getTableStyles } from './Table.styles';
import { TableContextProvider } from './tableContext';

export type TableInternalProps = CommonProps & {
  /**
   * @default 'inline'
   */
  layout?: 'inline' | 'embedded';
  /**
   * @default 'top'
   */
  verticalAlign?: Extract<
    CSS.Property.VerticalAlign,
    'baseline' | 'bottom' | 'middle' | 'top'
  >;
};

export type TableProps = PropsWithHTMLElement<TableInternalProps, 'table'>;

export const Table = forwardRef<HTMLTableElement, ExpandProps<TableProps>>(
  (
    {
      children,
      className,
      layout = 'inline',
      testId = 'cf-ui-table',
      verticalAlign = 'top',
      ...otherProps
    },
    forwardedRef,
  ) => {
    const styles = getTableStyles();

    return (
      <Box
        cellPadding="0"
        cellSpacing="0"
        {...otherProps}
        as="table"
        display="table"
        ref={forwardedRef}
        className={cx(styles.root, styles[layout], className)}
        testId={testId}
      >
        <TableContextProvider value={{ verticalAlign }}>
          {children}
        </TableContextProvider>
      </Box>
    );
  },
);

Table.displayName = 'Table';
