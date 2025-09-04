import * as React from 'react';
import * as CSS from 'csstype';
import { cx, css } from '@emotion/css';
import type { MarginProps, PaddingProps, CommonProps } from '../types';
import { getSpacingStyles } from '../utils/getSpacingStyles';
import {
  PolymorphicComponentPropsWithRef,
  AsProps,
  PolyForwardComponent,
} from '../utils/polymorphicForwardRef';

const BOX_DEFAULT_TAG: React.ElementType = 'div';

// Removed previous Primitive polymorphic helpers in favor of the new fast polymorphic types

export interface BoxInternalProps
  extends CommonProps,
    MarginProps,
    PaddingProps {
  /**
   * Sets the display behavior of the element
   */
  display?: CSS.Property.Display;
  children?: React.ReactNode;
}
// Build polymorphic BoxProps using the new utility types
export type BoxProps<E extends React.ElementType = typeof BOX_DEFAULT_TAG> =
  AsProps<E, BoxInternalProps, PolymorphicComponentPropsWithRef<E>>;

export function useBox<E extends React.ElementType = typeof BOX_DEFAULT_TAG>(
  props: BoxProps<E>,
) {
  const {
    display,
    className,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    testId,
    as: Element = BOX_DEFAULT_TAG,
    ...otherProps
  } = props;
  const boxProps = {
    className: cx(
      css({
        display,
      }),
      css({
        ...getSpacingStyles({
          margin,
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          padding,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
        }),
      }),
      className,
    ),
    ['data-test-id']: testId,
    ...otherProps,
  };

  return {
    boxProps: boxProps,
    Element,
  };
}

function _Box<E extends React.ElementType = typeof BOX_DEFAULT_TAG>(
  props: BoxProps<E>,
  ref: React.ComponentPropsWithRef<E>['ref'],
): React.ReactElement | null {
  const { boxProps, Element } = useBox<E>(props);

  return (
    <Element {...boxProps} ref={ref}>
      {props.children}
    </Element>
  );
}

_Box.displayName = 'Box';

export const Box = React.forwardRef(_Box) as PolyForwardComponent<
  typeof BOX_DEFAULT_TAG,
  BoxInternalProps
>;
