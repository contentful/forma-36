import { cx } from '@emotion/css';
import React, { forwardRef, useEffect } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';

import {
  TableCellContextProvider,
  contextOptions,
} from '../TableCell/TableCellContext';
import { getTableHeadStyles } from './TableHead.styles';
import { useTableContext } from '../tableContext';

type TableHeadInternalProps = CommonProps & {
  isSticky?: boolean;
  offsetTop?: number | string;
  children: React.ReactNode;
};

export type TableHeadProps = PropsWithHTMLElement<
  TableHeadInternalProps,
  'thead'
>;

export const TableHead = forwardRef<
  HTMLTableSectionElement,
  ExpandProps<TableHeadProps>
>(
  (
    {
      children,
      className,
      isSticky = false,
      offsetTop,
      testId = 'cf-ui-table-head',
      ...otherProps
    },
    forwardedRef,
  ) => {
    const styles = getTableHeadStyles();
    const {
      isStackable,
      stackableBreakpoint = '700px',
      setIsHeaderSticky,
    } = useTableContext();
    useEffect(() => {
      setIsHeaderSticky?.(isSticky);
    }, [isSticky, setIsHeaderSticky]);
    const classNames = cx(
      styles.root,
      { [styles.sticky]: isSticky },
      isStackable && styles.stackableHidden(stackableBreakpoint),
      className,
    );

    return (
      <TableCellContextProvider
        value={{
          ...contextOptions.head,
          offsetTop: offsetTop || 0,
        }}
      >
        <Box
          {...otherProps}
          as="thead"
          className={classNames}
          ref={forwardedRef}
          testId={testId}
        >
          {children}
        </Box>
      </TableCellContextProvider>
    );
  },
);

TableHead.displayName = 'TableHead';
