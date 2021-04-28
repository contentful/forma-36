import React, { HTMLProps } from 'react';
import { cx } from 'emotion';
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
  /**
   * Applies active styles
   * @default false
   */
  isActive?: boolean;
}

const _Button = (props: ButtonProps, ref) => {
  const {
    children,
    variant = 'secondary',
    size = 'medium',
    href,
    isActive,
    ...otherProps
  } = props;

  const rootClassNames = cx(styles.button(variant, size), {
    [styles.isActive(variant)]: isActive,
  });

  return (
    <Primitive
      ref={ref}
      className={rootClassNames}
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
