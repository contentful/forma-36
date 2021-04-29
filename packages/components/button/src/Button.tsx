import React, { ElementType, HTMLProps } from 'react';
import { cx } from 'emotion';
import { Flex, CommonProps } from '@contentful/f36-core';
import { ChevronDown } from '@contentful/f36-icons';
import { Icon, IconComponent } from '@contentful/f36-icon';

import type { ButtonVariant, ButtonSize } from './types';
import { styles } from './styles';
import { Spinner } from '@contentful/f36-spinner';

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'size'>,
    CommonProps {
  children?: React.ReactNode;
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
  /**
   * Disabled interaction and applies disabled styles
   * @default false
   */
  disabled?: boolean;
  /**
   * Button html type attribute
   */
  type?: 'submit' | 'button' | 'reset';
  /**
   * Adds dropdown indicator icon
   */
  isDropdown?: boolean;
  /**
   * Expects any of the icon components
   */
  icon?: IconComponent;
  /**
   * Adds loading indicator icon and disables interactions
   */
  isLoading?: boolean;
  /**
   * Forces button to take 100% of the container
   */
  isFullWidth?: boolean;
}

const _Button = (props: ButtonProps, ref) => {
  const {
    children,
    variant = 'secondary',
    size = 'medium',
    href,
    disabled,
    type,
    icon,
    isActive,
    isDropdown,
    isLoading,
    isFullWidth,
    ...otherProps
  } = props;

  const rootClassNames = cx(styles.button(variant, size), {
    [styles.isActive(variant)]: isActive,
    [styles.isDisabled]: disabled,
    [styles.isFullWidth]: isFullWidth,
  });

  const Element: ElementType = href ? 'a' : 'button';

  return (
    <Element
      ref={ref}
      type={type}
      className={rootClassNames}
      href={href}
      disabled={disabled}
      {...otherProps}
    >
      {icon && !isLoading && (
        <Flex as="span" marginRight={children ? 'spacing2Xs' : 'none'}>
          <Icon className={styles.buttonIcon} as={icon} />
        </Flex>
      )}
      <span className={styles.buttonText}>{children}</span>
      {isLoading && (
        <Spinner
          marginLeft={children || !isLoading ? 'spacingXs' : 'none'}
          customSize={18}
          variant={variant === 'secondary' ? 'default' : 'white'}
        />
      )}
      {isDropdown && <ChevronDown className={styles.dropdownIcon} />}
    </Element>
  );
};

/**
 * @description: Buttons communicate the action that will occur when the user clicks it
 */
export const Button = React.forwardRef(_Button);
