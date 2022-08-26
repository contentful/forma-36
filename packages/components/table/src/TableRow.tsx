import { css, cx } from 'emotion';
import React, { forwardRef } from 'react';
import tokens from '@contentful/f36-tokens';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';

const getStyles = () => {
  return {
    root: css({
      '&:last-child td': {
        borderBottom: 'none',
      },
      '&:hover td': {
        backgroundColor: tokens.gray100,
      },
    }),
    selected: css({
      'td, th': {
        backgroundColor: tokens.blue100,
      },
      'td:last-child': {
        boxShadow: `inset -2px 0 0 ${tokens.blue500}`,
      },
    }),
  };
};

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
    const styles = getStyles();
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
