import * as React from 'react';
import { css, cx } from 'emotion';
import {
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
} from '../Primitive/Primitive';
import { useBox } from '../Box';
import type { MarginProps, PaddingProps, CommonProps, Spacing } from '../types';
import type * as CSS from 'csstype';
import tokens from '@contentful/f36-tokens';

export interface FlexInternalProps
  extends CommonProps,
    MarginProps,
    PaddingProps {
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
   * Defines a gap between flexbox items. */
  gap?: Spacing | string;
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

export type FlexProps<
  E extends React.ElementType = typeof FLEX_DEFAULT_TAG
> = PolymorphicProps<FlexInternalProps, E>;

const FLEX_DEFAULT_TAG = 'div';

function _Flex<E extends React.ElementType = typeof FLEX_DEFAULT_TAG>(
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
    gap,
    justifyContent,
    justifyItems,
    justifySelf,
    order,
    children,
    as,
    ...otherProps
  }: FlexProps<E>,
  ref: React.Ref<any>,
) {
  const { boxProps, Element } = useBox<React.ElementType>({
    ...otherProps,
    as: as || FLEX_DEFAULT_TAG,
  });
  return (
    <Element
      {...boxProps}
      className={cx(
        css({
          display: isInline ? 'inline-flex' : 'flex',
          width: fullWidth ? '100%' : undefined,
          height: fullHeight ? '100%' : undefined,
          flex,
          flexBasis,
          flexShrink,
          flexDirection,
          gap: tokens[gap] ?? gap,
          justifyContent,
          justifyItems,
          justifySelf,
          alignItems,
          alignSelf,
          alignContent,
          order,
          flexWrap,
          flexGrow,
        }),
        boxProps.className,
      )}
      ref={ref}
    >
      {children}
    </Element>
  );
}

export const Flex: PolymorphicComponent<
  ExpandProps<FlexInternalProps>,
  typeof FLEX_DEFAULT_TAG
> = React.forwardRef(_Flex);
