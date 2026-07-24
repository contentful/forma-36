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
import { TableHeader } from './TableHead/TableHeader';

export type StackableBreakpoint =
  number | `${number}px` | `${number}rem` | `${number}em`;

export type StackableBreakpointValue = Exclude<StackableBreakpoint, number>;

type TableNextLayoutProps =
  | {
      /**
       * @default 'scrollable'
       */
      layout?: 'stackable';

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
       * @default false
       */
      isFirstColumnSticky?: false;
    }
  | {
      layout: 'scrollable';

      /**
       * Only supported with layout="stackable".
       */
      stackableBreakpoint?: never;

      /**
       * @default false
       */
      isFirstColumnSticky?: boolean;
    };

type TableHeaderTitleProps =
  | {
      columnTitles?: undefined;
      isHeaderSticky?: false;
    }
  | {
      columnTitles?: Array<string>;
      isHeaderSticky?: boolean;
    };

type TableNextInternalProps = CommonProps &
  TableNextLayoutProps &
  TableHeaderTitleProps & {
    /**
     * @default 'top'
     */
    verticalAlign?: Extract<
      CSS.Property.VerticalAlign,
      'baseline' | 'bottom' | 'middle' | 'top'
    >;
    variant?: 'inline' | 'embedded';
    offsetTop?: number | string;
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
      isHeaderSticky = false,
      offsetTop = 0,
      stackableBreakpoint,
      ...otherProps
    },
    forwardedRef,
  ) => {
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
            isStackable,
            columnTitles,
            hasColumnTitles,
            stackableBreakpoint: stackableBreakpointValue,
          }}
        >
          {columnTitles && (
            <TableHeader offsetTop={offsetTop} columnTitles={columnTitles} />
          )}
          {children}
        </TableContextProvider>
      </Box>
    );

    return (
      <section
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- scrollable region requires tabIndex for keyboard access (WCAG 2.1 SC 2.1.1)
        tabIndex={0}
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
