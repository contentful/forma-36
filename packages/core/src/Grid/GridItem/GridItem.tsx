import * as React from 'react';

import {
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '../../Primitive/Primitive';
import { Box } from '../../Box';
import type { MarginProps, PaddingProps } from '../../types';
import type * as CSS from 'csstype';

const DEFAULT_TAG = 'div';

export interface GridItemInternalProps extends MarginProps, PaddingProps {
  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
  /**
   * one of grid-column-start css values */
  columnStart?: CSS.Property.GridColumnStart;
  /**
   * one of grid-column-end css values */
  columnEnd?: CSS.Property.GridColumnEnd;
  /**
   * one of grid-column-start css values */
  rowStart?: CSS.Property.GridRowStart;
  /**
   * one of grid-row-end css values */
  rowEnd?: CSS.Property.GridRowEnd;
  /**
   * one of grid-area css values */
  area?: CSS.Property.GridArea;
  /**
   * order css property */
  order?: number;
}

export type GridItemProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, GridItemInternalProps>;

function GridItem<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    children,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    order,
    className,
    ...otherProps
  }: GridItemProps<E>,
  ref: typeof otherProps.ref,
) {
  const calculatedArea = area
    ? area
    : [
        rowStart || 'auto',
        columnStart || 'auto',
        rowEnd || 'auto',
        columnEnd || 'auto',
      ].join(' / ');

  return (
    <Box
      as={DEFAULT_TAG}
      {...otherProps}
      css={{
        gridArea: calculatedArea,
        order,
      }}
      className={className}
      ref={ref}
    >
      {children}
    </Box>
  );
}

export const _GridItem: PolymorphicComponent<
  GridItemInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(GridItem);

export { _GridItem as GridItem };
