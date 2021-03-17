import * as React from 'react';
import * as CSS from 'csstype';
import type { MarginProps, PaddingProps } from '../types';
import { getSpacingStyles } from '../utils/getSpacingStyles';

const DEFAULT_TAG = 'div';

import {
  Primitive,
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '../Primitive/Primitive';

export interface BoxInternalProps extends MarginProps, PaddingProps {
  display?: CSS.Property.Display;
  children?: React.ReactNode;
}

export type BoxProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  BoxInternalProps
>;

function Box<E extends React.ElementType = typeof DEFAULT_TAG>(
  { display = 'block', className, children, ...otherProps }: BoxProps<E>,
  ref: typeof otherProps.ref,
) {
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
}

export const _Box: PolymorphicComponent<
  BoxInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(Box);

export { _Box as Box };
