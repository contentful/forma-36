import { cx, css } from 'emotion';
import React, { forwardRef } from 'react';
import { Box, CommonProps } from '@contentful/f36-core';
import type { PolymorphicComponentProps } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

const getStyles = () => {
  return {
    inline: css({
      borderRadius: tokens.borderRadiusMedium,
      boxShadow: `0 0 0 1px ${tokens.gray200}`,
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
};

export type TableInternalProps = CommonProps & {
  layout?: 'inline' | 'embedded';
};

export type TableProps = PolymorphicComponentProps<'table', TableInternalProps>;

export const Table = forwardRef<HTMLTableElement, TableProps>(
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
    const styles = getStyles();
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
