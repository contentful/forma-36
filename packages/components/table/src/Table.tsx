import { cx, css } from 'emotion';
import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import { Box } from '@contentful/f36-core';
import type { BoxProps } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

export type TableInternalProps = HTMLProps<HTMLTableElement> &
  Omit<BoxProps<'table'>, 'as'> & {
    layout?: 'inline' | 'embedded';
  };

export type TableProps = TableInternalProps;

const styles = {
  inline: css({
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: `0 0 0 1px ${tokens.colorElementLight}`,
    'th:first-child': {
      borderTopLeftRadius: tokens.borderRadiusMedium,
    },
    'th:last-child': {
      borderTopRightRadius: tokens.borderRadiusMedium,
    },
    'tr:last-child td:first-child': {
      borderBottomLeftRadius: tokens.borderRadiusMedium,
    },
    'tr:last-child td:last-child': {
      borderBottomRightRadius: tokens.borderRadiusMedium,
    },
  }),
  root: css({
    width: '100%',
  }),
};

export const Table = forwardRef<HTMLTableElement, TableInternalProps>(
  function Table(
    {
      children,
      className,
      layout = 'inline',
      testId = 'cf-ui-table',
      ...otherProps
    },
    forwardedRef,
  ) {
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
