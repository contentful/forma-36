import { cx } from '@emotion/css';
import React, { forwardRef } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import type * as CSS from 'csstype';

import { getTableStyles } from './TableNext.styles';
import { TableContextProvider } from './tableContext';

type TableNextInternalProps = CommonProps & {
  /**
   * "scrollable" wraps the table in a horizontally scrollable container (default).
   * "plain" renders the table without any wrapper, for use inside StackableTable.
   */
  layout?: 'scrollable' | 'plain';

  /**
   * @default false
   */
  isFirstColumnSticky?: boolean;

  /**
   * Whether the table header is sticky. Affects the height of the scroll container.
   * Only relevant when layout="scrollable".
   * @default false
   */
  isHeaderSticky?: boolean;

  /**
   * @default 'top'
   */
  verticalAlign?: Extract<
    CSS.Property.VerticalAlign,
    'baseline' | 'bottom' | 'middle' | 'top'
  >;

  variant?: 'inline' | 'embedded';
};

export type TableNextProps = PropsWithHTMLElement<
  TableNextInternalProps,
  'table'
>;

export const TableNext = forwardRef<
  HTMLTableElement,
  ExpandProps<TableNextProps>
>(
  (
    {
      children,
      className,
      layout = 'scrollable',
      variant = 'inline',
      testId = 'cf-ui-table-next',
      verticalAlign = 'top',
      isFirstColumnSticky = false,
      isHeaderSticky = false,
      ...otherProps
    },
    forwardedRef,
  ) => {
    const isScrollable = layout === 'scrollable';
    const styles = getTableStyles({ isHeaderSticky, isFirstColumnSticky });

    const tableElement = (
      <Box
        cellPadding="0"
        cellSpacing="0"
        {...otherProps}
        as="table"
        display="table"
        ref={forwardedRef}
        className={cx(
          styles.root,
          isScrollable ? styles.scrollable : undefined,
          className,
        )}
        testId={testId}
      >
        <TableContextProvider value={{ verticalAlign, isHeaderSticky }}>
          {children}
        </TableContextProvider>
      </Box>
    );

    if (isScrollable) {
      return (
        <section
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- scrollable region requires tabIndex for keyboard access (WCAG 2.1 SC 2.1.1)
          tabIndex={0}
          className={cx(styles[variant], styles.scrollableWrapper)}
        >
          {tableElement}
        </section>
      );
    }

    return tableElement;
  },
);

TableNext.displayName = 'TableNext';
