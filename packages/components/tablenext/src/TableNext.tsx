import { cx } from '@emotion/css';
import React, { forwardRef, useState } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import type * as CSS from 'csstype';

import { getTableStyles } from './TableNext.styles';
import { TableContextProvider } from './tableContext';

export type StackableBreakpoint =
  number | `${number}px` | `${number}rem` | `${number}em`;

export type StackableBreakpointValue = Exclude<StackableBreakpoint, number>;

type TableNextLayoutProps =
  | {
      layout: 'stackable';

      /**
       * Container width at which the table switches to the stacked layout.
       * Numbers are interpreted as px.
       *
       * Only available when layout is "stackable".
       *
       * @default 700
       */
      stackableBreakpoint?: StackableBreakpoint;

      /**
       * Column titles used as inline labels in stacked rows at small container
       * sizes. Only valid with layout="stackable". The order must match the
       * column order of your TableHead row.
       */
      columnTitles?: Array<string>;

      /**
       * @default false
       */
      isFirstColumnSticky?: false;
    }
  | {
      /**
       * @default 'scrollable'
       */
      layout?: 'scrollable';

      /**
       * Only supported with layout="stackable".
       */
      stackableBreakpoint?: never;

      /**
       * Only supported with layout="stackable".
       */
      columnTitles?: never;

      /**
       * @default false
       */
      isFirstColumnSticky?: boolean;
    };

type TableNextInternalProps = CommonProps &
  TableNextLayoutProps & {
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

const DEFAULT_STACKABLE_BREAKPOINT = 700;

const getStackableBreakpointValue = (
  breakpoint: StackableBreakpoint = DEFAULT_STACKABLE_BREAKPOINT,
): StackableBreakpointValue =>
  typeof breakpoint === 'number' ? `${breakpoint}px` : breakpoint;

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
      columnTitles,
      isFirstColumnSticky = false,
      stackableBreakpoint,
      ...otherProps
    },
    forwardedRef,
  ) => {
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const styles = getTableStyles({ isHeaderSticky, isFirstColumnSticky });
    const isScrollable = layout === 'scrollable';
    const isStackable = layout === 'stackable';
    const hasColumnTitles = (columnTitles?.length ?? 0) > 0;

    const stackableBreakpointValue =
      getStackableBreakpointValue(stackableBreakpoint);

    const tableElement = (
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
        <TableContextProvider
          value={{
            verticalAlign,
            isHeaderSticky,
            setIsHeaderSticky,
            isStackable,
            columnTitles,
            hasColumnTitles,
            stackableBreakpoint: stackableBreakpointValue,
          }}
        >
          {children}
        </TableContextProvider>
      </Box>
    );

    return (
      <section
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- scrollable region requires tabIndex for keyboard access (WCAG 2.1 SC 2.1.1)
        tabIndex={isScrollable && isHeaderSticky ? 0 : undefined}
        className={cx(styles[variant], {
          [styles.scrollableWrapper]: isScrollable,
          [styles.stackableWrapper]: isStackable,
        })}
      >
        {tableElement}
      </section>
    );
  },
);

TableNext.displayName = 'TableNext';
