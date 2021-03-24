import * as React from 'react';
import * as CSS from 'csstype';
import type { MarginProps, PaddingProps } from '../types';
import { getSpacingStyles } from '../utils/getSpacingStyles';

const DEFAULT_TAG = 'div';

import {
  Primitive,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
  PolymorphicComponent,
} from '../Primitive/Primitive';

export interface BoxInternalProps extends MarginProps, PaddingProps {
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

const _Box: PolymorphicComponentWithRef<
  BoxInternalProps,
  typeof DEFAULT_TAG
> = ({ display = 'block', children, ...otherProps }, ref) => {
  return (
    <Primitive
      css={{ display, ...getSpacingStyles(otherProps) }}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Primitive>
  );
};

export const Box: PolymorphicComponent<
  BoxInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Box);
