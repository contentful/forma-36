import * as React from 'react';
import * as CSS from 'csstype';
import { css, cx } from 'emotion';
import type { MarginProps, PaddingProps, CommonProps } from '../types';
import { getSpacingStyles } from '../utils/getSpacingStyles';

const DEFAULT_TAG: React.ElementType = 'div';

import { PolymorphicProps, PolymorphicComponent } from '../Primitive/Primitive';

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

export function useBox(props: Omit<BoxInternalProps, 'children'>) {
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
    as: Element = DEFAULT_TAG,
    style,
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
    style,
  };

  return {
    boxProps: boxProps,
    Element,
  };
}

export type BoxProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<BoxInternalProps, E>;

function _Box<E extends React.ElementType = typeof DEFAULT_TAG>(
  props: BoxProps<E>,
  ref: React.Ref<any>,
) {
  const { boxProps, Element } = useBox(props);

  return (
    <Element {...boxProps} ref={ref}>
      {props.children}
    </Element>
  );
}

export const Box: PolymorphicComponent<
  BoxInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Box);
