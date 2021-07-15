import * as React from 'react';
import * as CSS from 'csstype';
import { css, cx } from 'emotion';
import type { MarginProps, PaddingProps, CommonProps } from '../types';
import { getSpacingStyles } from '../utils/getSpacingStyles';

const DEFAULT_TAG = 'div';

import {
  usePrimitive,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
  PolymorphicComponent,
} from '../Primitive/Primitive';

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

export type BoxProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  BoxInternalProps
>;

export function useBox(props: BoxInternalProps) {
  const {
    display,
    children,
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
    ...otherProps
  } = props;
  const boxProps = {
    className: cx(
      css({
        display,
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
    ...otherProps,
  };
  const { Element, primitiveProps } = usePrimitive(boxProps);
  return {
    boxProps: primitiveProps,
    Element,
  };
}

const _Box: PolymorphicComponentWithRef<
  BoxInternalProps,
  typeof DEFAULT_TAG
> = (props, ref) => {
  const { boxProps, Element } = useBox(props);

  return (
    <Element {...boxProps} ref={ref}>
      {props.children}
    </Element>
  );
};

export const Box: PolymorphicComponent<
  BoxInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Box);
