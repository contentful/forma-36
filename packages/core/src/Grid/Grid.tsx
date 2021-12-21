import * as React from 'react';
import { css, cx } from 'emotion';
import {
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
} from '../Primitive/Primitive';
import { useBox } from '../Box';
import type * as CSS from 'csstype';
import type { MarginProps, PaddingProps, CommonProps, Spacing } from '../types';
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
   * One of justify-content css values */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * One of justify-content css values */
  alignContent?: CSS.Property.AlignContent;
}

const GRID_DEFAULT_TAG = 'div';

export type GridProps<
  E extends React.ElementType = typeof GRID_DEFAULT_TAG
> = PolymorphicProps<GridInternalProps, E>;

function _Grid<E extends React.ElementType = typeof GRID_DEFAULT_TAG>(
  {
    alignContent,
    children,
    columnGap = 'spacingM',
    columns = 'auto',
    flow,
    isInline,
    justifyContent,
    rowGap = 'none',
    rows = 'auto',
    as,
    ...otherProps
  }: GridProps<E>,
  ref: React.Ref<any>,
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
      {...boxProps}
      className={cx(
        css({
          display: isInline ? 'inline-grid' : 'grid',
          gridTemplateColumns: handleGridTemplate(columns),
          gridTemplateRows: handleGridTemplate(rows),
          flow,
          justifyContent,
          alignContent,
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

export const Grid: PolymorphicComponent<
  ExpandProps<GridInternalProps>,
  typeof GRID_DEFAULT_TAG
> = React.forwardRef(_Grid);
