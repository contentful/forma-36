import React from 'react';
import {
  Primitive,
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '@contentful/f36-core';
import type * as CSS from 'csstype';

const DEFAULT_TAG = 'div';

export type GridItemInternalProps = {
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
};

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
    style: styleProp,
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

  const style = {
    gridArea: calculatedArea,
    order,
    ...styleProp,
  };

  return (
    <Primitive as={DEFAULT_TAG} {...otherProps} ref={ref} style={style}>
      {children}
    </Primitive>
  );
}

const _GridItem: PolymorphicComponent<
  GridItemInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(GridItem);

export { _GridItem as GridItem };
