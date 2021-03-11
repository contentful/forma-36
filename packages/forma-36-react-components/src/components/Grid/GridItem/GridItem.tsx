import React, { forwardRef } from 'react';
import { Primitive } from '@contentful/f36-primitive';
import type { PrimitiveProps } from '@contentful/f36-primitive';
import type * as Polymorphic from '@contentful/f36-polymorphic';
import type * as CSS from 'csstype';

const DEFAULT_TAG = 'div';

export type GridItemProps = Polymorphic.Merge<
  PrimitiveProps,
  {
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
    /**
     * inline css properties */
    style?: React.CSSProperties;
  }
>;

export const GridItem = forwardRef(function GridItem(
  {
    as = DEFAULT_TAG,
    children,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    order,
    style: styleProp,
    ...otherProps
  }: GridItemProps,
  forwardedRef,
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
    <Primitive {...otherProps} as={as} ref={forwardedRef} style={style}>
      {children}
    </Primitive>
  );
}) as Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, GridItemProps>;
