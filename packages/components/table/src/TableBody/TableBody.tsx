import React, { forwardRef, type ReactNode } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';

export type TableBodyInternalProps = CommonProps & {
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
  return (
    <Box
      {...otherProps}
      as="tbody"
      className={className}
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
