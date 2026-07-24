import { cx } from '@emotion/css';
import React, { forwardRef, useState } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import type * as CSS from 'csstype';

import { getTableStyles } from './Table.styles';
import { TableContextProvider } from './tableContext';

type TableLayoutProps =
  | {
      /**
       * @default 'inline'
       */
      layout?: 'inline' | 'embedded';
      /**
       * @default false
       */
      isFirstColumnSticky?: false;
    }
  | {
      layout: 'scrollable';
      /**
       * @default false
       */
      isFirstColumnSticky?: boolean;
    };

export type TableInternalProps = CommonProps &
  TableLayoutProps & {
    /**
     * @default 'top'
     */
    verticalAlign?: Extract<
      CSS.Property.VerticalAlign,
      'baseline' | 'bottom' | 'middle' | 'top'
    >;
  };

export type TableProps = PropsWithHTMLElement<TableInternalProps, 'table'>;

export const Table = forwardRef<HTMLTableElement, ExpandProps<TableProps>>(
  (
    {
      children,
      className,
      layout = 'inline',
      testId = 'cf-ui-table',
      verticalAlign = 'top',
      isFirstColumnSticky = false,
      ...otherProps
    },
    forwardedRef,
  ) => {
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const styles = getTableStyles({ isHeaderSticky, isFirstColumnSticky });
    const isScrollable = layout === 'scrollable';

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
          }}
        >
          {children}
        </TableContextProvider>
      </Box>
    );

    if (isScrollable) {
      return (
        <section
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- scrollable region requires tabIndex for keyboard access (WCAG 2.1 SC 2.1.1)
          tabIndex={0}
          className={cx(styles.scrollableWrapper, styles.inline)}
        >
          {tableElement}
        </section>
      );
    }
    return tableElement;
  },
);

Table.displayName = 'Table';
