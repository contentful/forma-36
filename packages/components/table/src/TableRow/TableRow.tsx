import { cx } from '@emotion/css';
import React, { forwardRef } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { getTableRowStyles } from './TableRow.styles';

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
        {children}
      </Box>
    );
  },
);

TableRow.displayName = 'TableRow';
