import React, { forwardRef } from 'react';
import type { ReactElement } from 'react';
import { Box } from '@contentful/f36-core';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';

export type TableBodyInternalProps = CommonProps & {
  children: ReactElement | ReactElement[];
};

export type TableBodyProps = PropsWithHTMLElement<
  TableBodyInternalProps,
  'tbody'
>;

function _TableBody(
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

_TableBody.displayName = 'TableBody';

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  ExpandProps<TableBodyProps>
>(_TableBody);
