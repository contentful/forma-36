import * as React from 'react';
import { css, cx } from 'emotion';
import {
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
  PolymorphicComponent,
} from '../../Primitive/Primitive';
import { useBox } from '../../Box';
import type { MarginProps, PaddingProps, CommonProps } from '../../types';
import type * as CSS from 'csstype';

const DEFAULT_TAG = 'div';

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
}

export type GridItemProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, GridItemInternalProps>;

const _GridItem: PolymorphicComponentWithRef<
  GridItemInternalProps,
  typeof DEFAULT_TAG
> = (
  {
    children,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    order,
    ...otherProps
  },
  ref,
) => {
  const calculatedArea = area
    ? area
    : [
        rowStart || 'auto',
        columnStart || 'auto',
        rowEnd || 'auto',
        columnEnd || 'auto',
      ].join(' / ');

  const { boxProps, Element } = useBox(otherProps);

  return (
    <Element
      as={DEFAULT_TAG}
      {...boxProps}
      className={cx(
        css({
          gridArea: calculatedArea,
          order,
        }),
        boxProps.className,
      )}
      ref={ref}
    >
      {children}
    </Element>
  );
};

export const GridItem: PolymorphicComponent<
  GridItemInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_GridItem);
