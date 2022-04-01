import { css, cx } from 'emotion';
import React, { forwardRef, useContext } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box, Forma36Context } from '@contentful/f36-core';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
  Theme,
} from '@contentful/f36-core';

const getStyles = ({ theme }: { theme: Theme }) => {
  return {
    root: css({
      '&:last-child td': {
        borderBottom: 'none',
      },
      '&:hover td': {
        backgroundColor: theme.tableRow.hover.backgroundColor,
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
    const { theme } = useContext(Forma36Context);
    const styles = getStyles({ theme });
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
