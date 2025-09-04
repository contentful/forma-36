import * as React from 'react';
import { css, cx } from 'emotion';
import type * as CSS from 'csstype';

import type {
  PolymorphicProps,
  PolymorphicComponent,
} from '../../Primitive/Primitive';
import { useBox } from '../../Box';
import type { MarginProps, PaddingProps, CommonProps } from '../../types';

const GRID_ITEM_DEFAULT_TAG = 'div';

export interface GridItemInternalProps
  extends CommonProps,
    MarginProps,
    PaddingProps {
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
   * Defines how grid items are aligned on the inline axis.
   */
  justifySelf?: CSS.Property.JustifySelf;
  /**
   * Controls how grid items are aligned on the block axis.
   */
  alignSelf?: CSS.Property.AlignSelf;
  /**
   * Defines the placement of grid items within the grid container.
   */
  placeSelf?: CSS.Property.PlaceSelf;
}

export type GridItemProps<
  E extends React.ElementType = typeof GRID_ITEM_DEFAULT_TAG,
> = PolymorphicProps<GridItemInternalProps, E>;

function _GridItem<E extends React.ElementType = typeof GRID_ITEM_DEFAULT_TAG>(
  {
    children,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    order,
    alignSelf,
    justifySelf,
    placeSelf,
    as,
    ...otherProps
  }: GridItemProps<E>,
  ref: React.Ref<any>,
) {
  const calculatedArea = area
    ? area
    : [
        rowStart || 'auto',
        columnStart || 'auto',
        rowEnd || 'auto',
        columnEnd || 'auto',
      ].join(' / ');

  const { boxProps, Element } = useBox<React.ElementType>({
    ...otherProps,
    as: as || GRID_ITEM_DEFAULT_TAG,
  });

  return (
    <Element
      {...boxProps}
      className={cx(
        css({
          gridArea: calculatedArea,
          order,
          alignSelf,
          justifySelf,
          placeSelf,
        }),
        boxProps.className,
      )}
      ref={ref}
    >
      {children}
    </Element>
  );
}

_GridItem.displayName = 'GridItem';

export const GridItem = React.forwardRef(_GridItem) as PolymorphicComponent<
  GridItemInternalProps,
  typeof GRID_ITEM_DEFAULT_TAG
>;
