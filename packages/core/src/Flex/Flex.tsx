import * as React from 'react';

import {
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
  PolymorphicComponent,
} from '../Primitive/Primitive';
import { Box } from '../Box';
import type { MarginProps, PaddingProps } from '../types';
import type * as CSS from 'csstype';

export interface FlexInternalProps extends MarginProps, PaddingProps {
  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
  /**
   * Sets width: 100% */
  fullWidth?: boolean;
  /**
   * Sets height: 100% */
  fullHeight?: boolean;

  /**
   * Sets display: inline-flex */
  isInline?: boolean;

  /**
   * A shorthand property for flex-grow, flex-shrink, flex-basis
   */
  flex?: CSS.Property.Flex;
  /**
   * Defines the initial size of a flexbox item.
   * */
  flexBasis?: CSS.Property.FlexBasis;
  /**
   * Defines how much a flexbox item should shrink if there's not enough space available. */
  flexShrink?: CSS.Property.FlexShrink;
  /**
   * Defines if flexbox items appear on a single line or on multiple lines within a flexbox container. */
  flexWrap?: CSS.Property.FlexWrap;
  /**
   * Defines how flexbox items are ordered within a flexbox container. */
  flexDirection?: CSS.Property.FlexDirection;
  /**
   * Defines how much a flexbox item should grow if there's space available. */
  flexGrow?: CSS.Property.FlexGrow;
  /**
   * Defines how flexbox/grid items are aligned according to the main axis, within a flexbox/grid container. */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * Defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis. */
  justifyItems?: CSS.Property.JustifyContent;
  /**
   * Sets the way a box is justified inside its alignment container along the appropriate axis. */
  justifySelf?: CSS.Property.JustifySelf;
  /**
   * Defines how flexbox items are aligned according to the cross axis, within a line of a flexbox container.
   */
  alignItems?: CSS.Property.AlignItems;
  /**
   * Works like align-items, but applies only to a single flexbox item, instead of all of them.
   */
  alignSelf?: CSS.Property.AlignItems;
  /**
   * Defines how each line is aligned within a flexbox/grid container.
   */
  alignContent?: CSS.Property.AlignContent;
  /**
   * Defines the order of a flexbox item
   */
  order?: CSS.Property.Order;
}

export type FlexProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  FlexInternalProps
>;

const DEFAULT_TAG = 'div';

const _Flex: PolymorphicComponentWithRef<
  FlexInternalProps,
  typeof DEFAULT_TAG
> = (
  {
    isInline,
    alignItems,
    alignSelf,
    alignContent,
    flex,
    flexBasis,
    flexShrink,
    flexDirection,
    flexGrow,
    flexWrap,
    fullHeight,
    fullWidth,
    justifyContent,
    justifyItems,
    justifySelf,
    order,
    children,
    ...otherProps
  },
  ref,
) => {
  return (
    <Box
      as={DEFAULT_TAG}
      display={isInline ? 'inline-flex' : 'flex'}
      css={{
        width: fullWidth ? '100%' : undefined,
        height: fullHeight ? '100%' : undefined,
        flex,
        flexBasis,
        flexShrink,
        flexDirection,
        justifyContent,
        justifyItems,
        justifySelf,
        alignItems,
        alignSelf,
        alignContent,
        order,
        flexWrap,
        flexGrow,
      }}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export const Flex: PolymorphicComponent<
  FlexInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Flex);
