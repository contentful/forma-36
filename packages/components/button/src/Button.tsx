import React, {
  HTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

import { PolymorphicComponentWithRef, Primitive } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

import type { ButtonVariant, ButtonSize } from './types';
import { styles } from './styles';

type ButtonInternalProps = Omit<
  HTMLProps<
    | ButtonHTMLAttributes<HTMLButtonElement>
    | AnchorHTMLAttributes<HTMLAnchorElement>
  >,
  'size'
>;

export interface ButtonProps
  extends CommonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  as?: 'button' | 'a';
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const _Button: PolymorphicComponentWithRef<ButtonInternalProps> = (
  props,
  ref,
) => {
  const {
    children,
    variant,
    size = 'default',
    as = 'button',
    ...otherProps
  } = props;

  return (
    <Primitive
      ref={ref}
      className={styles.button(variant, size)}
      as={as}
      {...otherProps}
    >
      {children}
    </Primitive>
  );
};

/**
 * TODO: Add description of component here.
 */
export const Button = React.forwardRef(_Button);
