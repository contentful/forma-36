import * as React from 'react';
import { css, cx } from 'emotion';
import type * as CSS from 'csstype';
import tokens from '@contentful/f36-tokens';

import {
  type PolymorphicProps,
  type PolymorphicComponent,
  type ExpandProps,
} from '../Primitive/Primitive';
import { useBox } from '../Box';
import type { MarginProps, PaddingProps, CommonProps, Spacing } from '../types';

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
   * Defines how flexbox items are aligned according to the main axis, within a flexbox container. */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * Use it for flexbox items, not for flexbox containers.
   *
   * Sets the way a box is justified inside its alignment container along the appropriate axis. */
  justifySelf?: CSS.Property.JustifySelf;
  /**
   * Defines how flexbox items are aligned according to the cross axis, within a line of a flexbox container.
   */
  alignItems?: CSS.Property.AlignItems;
  /**
   * Use it for flexbox items, not for flexbox containers.
   *
   * Works like align-items, but applies only to a single flexbox item, instead of all of them.
   */
  alignSelf?: CSS.Property.AlignSelf;
  /**
   * Defines how each line is aligned within a flexbox container.
   */
  alignContent?: CSS.Property.AlignContent;
  /**
   * Defines the order of a flexbox item
   */
  order?: CSS.Property.Order;
}

export type FlexProps<E extends React.ElementType = typeof FLEX_DEFAULT_TAG> =
  PolymorphicProps<FlexInternalProps, E>;

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
    justifySelf,
    order,
    children,
    as,
    ...otherProps
  }: FlexProps<E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We want to support all element types
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
          gap: gap === 'none' ? 0 : tokens[gap] ?? gap,
          justifyContent,
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

_Flex.displayName = 'Flex';

export const Flex: PolymorphicComponent<
  ExpandProps<FlexInternalProps>,
  typeof FLEX_DEFAULT_TAG
> = React.forwardRef(_Flex);
