import React, { forwardRef } from 'react';
import type { HTMLProps, ReactElement } from 'react';
import { Primitive } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

export type TableBodyInternalProps = HTMLProps<HTMLTableSectionElement> &
  CommonProps & {
    children: ReactElement | ReactElement[];
  };

export type TableBodyProps = TableBodyInternalProps;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody(
    { className, children, testId = 'cf-ui-table-body', ...otherProps },
    forwardedRef,
  ) {
    return (
      <Primitive
        {...otherProps}
        as="tbody"
        className={className}
        ref={forwardedRef}
        testId={testId}
      >
        {children}
      </Primitive>
    );
  },
);
