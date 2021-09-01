import React, { forwardRef } from 'react';
import type { ReactElement } from 'react';
import { Box } from '@contentful/f36-core';
import type { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

export type TableBodyInternalProps = CommonProps & {
  children: ReactElement | ReactElement[];
};

export type TableBodyProps = PropsWithHTMLElement<
  TableBodyInternalProps,
  'tbody'
>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody(
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
  },
);
