import React, { forwardRef, type ReactNode } from 'react';
import { cx } from '@emotion/css';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { useTableContext } from '../tableContext';
import { getTableBodyStyles } from './TableBody.styles';

type TableBodyInternalProps = CommonProps & {
  children: ReactNode;
};

export type TableBodyProps = PropsWithHTMLElement<
  TableBodyInternalProps,
  'tbody'
>;

function TableBodyBase(
  { className, children, testId = 'cf-ui-table-body', ...otherProps },
  forwardedRef,
) {
  const {
    isStackable,
    hasColumnTitles = false,
    stackableBreakpoint = '700px',
  } = useTableContext();
  const styles = getTableBodyStyles();
  return (
    <Box
      {...otherProps}
      as="tbody"
      className={cx(
        {
          [styles.stackable(hasColumnTitles, stackableBreakpoint)]: isStackable,
        },
        className,
      )}
      ref={forwardedRef}
      testId={testId}
    >
      {children}
    </Box>
  );
}

TableBodyBase.displayName = 'TableBody';

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  ExpandProps<TableBodyProps>
>(TableBodyBase);
