import { css, cx } from 'emotion';
import React, { forwardRef } from 'react';
import { Box } from '@contentful/f36-core';
import type {
  CommonProps,
  PolymorphicComponentProps,
} from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

import { TableCellContext, contextOptions } from './';

export type TableHeadInternalProps = CommonProps & {
  isSticky?: boolean;
  offsetTop?: number | string;
  children: React.ReactNode;
};

export type TableHeadProps = PolymorphicComponentProps<
  'thead',
  TableHeadInternalProps
>;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
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
    const classNames = cx(
      // For some reason Parcel doesn't build properly if we extract this to
      // a variable 🤷
      isSticky
        ? css({
            th: {
              position: 'sticky',
              top: 0,
              zIndex: tokens.zIndexDefault,
            },
          })
        : '',
      className,
    );

    return (
      <TableCellContext.Provider
        value={{ ...contextOptions.head, offsetTop: offsetTop || 0 }}
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
      </TableCellContext.Provider>
    );
  },
);

TableHead.displayName = 'TableHead';
