/** @jsx jsx */
import { jsx } from '@emotion/core';

import { forwardRef } from 'react';
import {
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '../Primitive/Primitive';
import { Box } from '../Box';
import type * as CSS from 'csstype';
import type { MarginProps, PaddingProps, Spacing } from '../types';
import { convertSpacingToToken } from '../utils/getSpacingStyles';

export interface GridInternalProps extends MarginProps, PaddingProps {
  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
  /**
   * Defines how many columns, default is `auto` */
  columns?: number | CSS.Property.GridTemplateColumns;
  /**
   * Defines how many rows, default is `auto` */
  rows?: number | CSS.Property.GridTemplateColumns;
  /**
   * Spaces between rows, corresponds to of spacing tokens values, default is none */
  rowGap?: Spacing;
  /**
   * One of Spacing tokens values, default is 0 */
  columnGap?: Spacing;
  /**
   * One of grid-auto-flow css values */
  flow?: CSS.Property.GridAutoFlow;
  /**
   * Sets display:inline-grid */
  inline?: boolean;
  /**
   * One of justify-content css values */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * One of justify-content css values */
  alignContent?: CSS.Property.AlignContent;
}

export type GridProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  GridInternalProps
>;

const DEFAULT_TAG = 'div';

function Grid<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    alignContent,
    children,
    className,
    columnGap = 'spacingM',
    columns = 'auto',
    flow,
    inline,
    justifyContent,
    rowGap = 'none',
    rows = 'auto',
    ...otherProps
  }: GridProps<E>,
  ref: typeof otherProps.ref,
) {
  const handleGridTemplate = (value?: string | number) => {
    if (typeof value === 'number') {
      return `repeat(${value}, minmax(0, 1fr)`;
    }
    return value;
  };

  return (
    <Box
      as={DEFAULT_TAG}
      {...otherProps}
      css={{
        gridTemplateColumns: handleGridTemplate(columns),
        gridTemplateRows: handleGridTemplate(rows),
        flow,
        justifyContent,
        alignContent,
        columnGap: convertSpacingToToken(columnGap) ?? 0,
        rowGap: convertSpacingToToken(rowGap) ?? 0,
      }}
      display={inline ? 'inline-grid' : 'grid'}
      ref={ref}
      className={className}
    >
      {children}
    </Box>
  );
}

const _Grid: PolymorphicComponent<
  GridInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(Grid);

export { _Grid as Grid };
