import * as React from 'react';
import {
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '../Primitive/Primitive';
import { Grid } from '../Grid';
import type { GridInternalProps } from '../Grid/Grid';
import type { MarginProps, PaddingProps, Spacing } from '../types';

function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[];
}
export interface StackInternalProps extends MarginProps, PaddingProps {
  /**
   * Spacing between elements
   * @default spacingM
   */
  gap?: Spacing;
  /**
   * Stack direction
   * @default row
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
}

export type StackProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  StackInternalProps
>;

const DEFAULT_TAG = 'div';

function Stack<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    children,
    direction = 'row',
    gap = 'spacingM',
    divider,
    ...otherProps
  }: StackProps<E>,
  ref: typeof otherProps.ref,
) {
  const validChildren = getValidChildren(children);

  const gridProps: Partial<GridInternalProps> = {};

  if (direction === 'row' || direction === 'row-reverse') {
    gridProps.columns = validChildren.length;
    gridProps.rows = 'none';
    gridProps.rowGap = 'none';
    gridProps.columnGap = gap;
  } else if (direction === 'column' || direction === 'column-reverse') {
    gridProps.rows = validChildren.length;
    gridProps.rowGap = gap;
    gridProps.columns = 'none';
    gridProps.columnGap = 'none';
  }

  if (direction === 'row-reverse' || direction === 'column-reverse') {
    validChildren.reverse();
  }

  return (
    <Grid as={DEFAULT_TAG} inline {...gridProps} {...otherProps} ref={ref}>
      {validChildren}
    </Grid>
  );
}

export const _Stack: PolymorphicComponent<
  StackInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(Stack);

export { _Stack as Stack };
