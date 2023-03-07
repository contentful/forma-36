import { cx } from 'emotion';
import React, { forwardRef } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { getTableStyles } from './Table.styles';

export type TableInternalProps = CommonProps & {
  layout?: 'inline' | 'embedded';
};

export type TableProps = PropsWithHTMLElement<TableInternalProps, 'table'>;

export const Table = forwardRef<HTMLTableElement, ExpandProps<TableProps>>(
  (
    {
      children,
      className,
      layout = 'inline',
      testId = 'cf-ui-table',
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
        className={cx(
          styles.root,
          {
            [styles.inline]: layout === 'inline',
          },
          className,
        )}
        testId={testId}
      >
        {children}
      </Box>
    );
  },
);

Table.displayName = 'Table';
