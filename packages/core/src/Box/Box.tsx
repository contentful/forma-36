import * as React from 'react';
import * as CSS from 'csstype';
import { css, cx } from 'emotion';
import type { MarginProps, PaddingProps, CommonProps } from '../types';
import { getSpacingStyles } from '../utils/getSpacingStyles';

const BOX_DEFAULT_TAG: React.ElementType = 'div';

import {
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
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
  as?: React.ElementType<any>;
}

export type BoxProps<
  E extends React.ElementType = typeof BOX_DEFAULT_TAG
> = PolymorphicProps<BoxInternalProps, E>;

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
  ref: React.Ref<any>,
) {
  const { boxProps, Element } = useBox<E>(props);

  return (
    <Element {...boxProps} ref={ref}>
      {props.children}
    </Element>
  );
}

export const Box: PolymorphicComponent<
  ExpandProps<BoxInternalProps>,
  typeof BOX_DEFAULT_TAG
> = React.forwardRef(_Box);
