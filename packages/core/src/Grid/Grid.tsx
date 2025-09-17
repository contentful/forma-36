import * as React from 'react';
import { css, cx } from '@emotion/css';
import type * as CSS from 'csstype';

import type {
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
} from '../Primitive/Primitive';
import type { MarginProps, PaddingProps, CommonProps, Spacing } from '../types';
import { useBox } from '../Box';
import { convertSpacingToToken } from '../utils/getSpacingStyles';

export interface GridInternalProps
  extends CommonProps,
    MarginProps,
    PaddingProps {
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
  isInline?: boolean;
  /**
   * Defines how grid items are aligned on the inline axis.
   */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * Defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   */
  justifyItems?: CSS.Property.JustifyItems;
  /**
   * Controls how grid items are aligned on the block axis.
   */
  alignItems?: CSS.Property.AlignItems;
  /**
   * Defines the placement of grid items within the grid container.
   */
  placeItems?: CSS.Property.PlaceItems;
  /**
   * Defines how each line is aligned within a grid container.
   */
  alignContent?: CSS.Property.AlignContent;
  /**
   * Defines the placement of grid items within the grid container.
   */
  placeContent?: CSS.Property.PlaceContent;
}

const GRID_DEFAULT_TAG = 'div';

export type GridProps<E extends React.ElementType = typeof GRID_DEFAULT_TAG> =
  PolymorphicProps<GridInternalProps, E>;

function GridBase<E extends React.ElementType = typeof GRID_DEFAULT_TAG>(
  {
    alignContent,
    alignItems,
    children,
    columnGap = 'spacingM',
    columns = 'auto',
    flow,
    isInline,
    justifyContent,
    justifyItems,
    placeContent,
    placeItems,
    rowGap = 'none',
    rows = 'auto',
    as,
    ['data-test-id']: testId,
    ...otherProps
  }: GridProps<E>,
  ref: React.Ref<HTMLElement>,
) {
  const handleGridTemplate = (value?: string | number) => {
    if (typeof value === 'number') {
      return `repeat(${value}, minmax(0, 1fr))`;
    }
    return value;
  };

  const { boxProps, Element } = useBox<React.ElementType>({
    ...otherProps,
    as: as || GRID_DEFAULT_TAG,
  });

  return (
    <Element
      data-test-id={testId}
      {...boxProps}
      className={cx(
        css({
          display: isInline ? 'inline-grid' : 'grid',
          gridTemplateColumns: handleGridTemplate(columns),
          gridTemplateRows: handleGridTemplate(rows),
          flow,
          justifyContent,
          justifyItems,
          alignContent,
          alignItems,
          placeContent,
          placeItems,
          columnGap: convertSpacingToToken(columnGap) ?? 0,
          rowGap: convertSpacingToToken(rowGap) ?? 0,
        }),
        boxProps.className,
      )}
      ref={ref}
    >
      {children}
    </Element>
  );
}

GridBase.displayName = 'Grid';

export const Grid = React.forwardRef(GridBase) as PolymorphicComponent<
  ExpandProps<GridInternalProps>,
  typeof GRID_DEFAULT_TAG
>;
