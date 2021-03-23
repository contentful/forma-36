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

const Box: PolymorphicComponentWithRef<BoxInternalProps, typeof DEFAULT_TAG> = (
  { display = 'block', className, children, ...otherProps },
  ref: typeof otherProps.ref,
) => {
  return (
    <Primitive
      {...otherProps}
      ref={ref}
      css={{ display, ...getSpacingStyles(otherProps) }}
      className={className}
    >
      {children}
    </Primitive>
  );
};

export const _Box: PolymorphicComponent<
  BoxInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(Box);

_Box.displayName = 'Box';

export { _Box as Box };
