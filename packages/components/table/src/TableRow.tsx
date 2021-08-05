import { css, cx } from 'emotion';
import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

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

export type TableRowInternalProps = HTMLProps<HTMLTableRowElement> &
  CommonProps & {
    selected?: boolean;
    children: React.ReactNode;
  };

export type TableRowProps = TableRowInternalProps;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow(
    {
      className,
      children,
      selected = false,
      testId = 'cf-ui-table-row',
      ...otherProps
    },
    forwardedRef,
  ) {
    const styles = getStyles();
    return (
      <Box
        {...otherProps}
        as="tr"
        className={cx(
          styles.root,
          {
            [styles.selected]: selected,
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
