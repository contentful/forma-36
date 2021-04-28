import React, { HTMLProps } from 'react';

import { Primitive } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

import type { ButtonVariant, ButtonSize } from './types';
import { styles } from './styles';

type ButtonInternalProps = Omit<
  HTMLProps<HTMLButtonElement | HTMLAnchorElement>,
  'size'
>;

export interface ButtonProps extends CommonProps, ButtonInternalProps {
  children?: React.ReactNode;
  as?: 'button' | 'a';
  /**
   * Determines style variation of Button component
   * @default secondary
   */
  variant?: ButtonVariant;
  /**
   * Determines size variation of Button component
   * @default medium
   */
  size?: ButtonSize;
}

const _Button = (props: ButtonProps, ref) => {
  const {
    children,
    variant = 'secondary',
    size = 'medium',
    href,
    ...otherProps
  } = props;

  return (
    <Primitive
      ref={ref}
      className={styles.button(variant, size)}
      as={href ? 'a' : 'button'}
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
