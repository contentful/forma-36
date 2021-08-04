import React, { ElementType, HTMLProps } from 'react';
import { cx } from 'emotion';
import { Flex, CommonProps } from '@contentful/f36-core';
import { ChevronDown } from '@contentful/f36-icons';
import { Icon, IconComponent } from '@contentful/f36-icon';
import { Spinner } from '@contentful/f36-spinner';

import type { ButtonVariant, ButtonSize } from './types';
import { getStyles } from './styles';

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
  isDisabled?: boolean;
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
  const styles = getStyles();
  const {
    children,
    className,
    testId = 'cf-ui-button',
    variant = 'secondary',
    size = 'medium',
    href,
    type = !href ? 'button' : undefined,
    icon,
    isActive,
    isDisabled,
    isDropdown,
    isLoading,
    isFullWidth,
    ...otherProps
  } = props;

  const rootClassNames = cx(
    styles.button({
      variant,
      size,
      isActive,
      isDisabled,
      isFullWidth,
    }),
    className,
  );

  const Element: ElementType = href ? 'a' : 'button';

  return (
    <Element
      ref={ref}
      type={type}
      className={rootClassNames}
      href={href}
      disabled={isDisabled}
      data-test-id={testId}
      {...otherProps}
    >
      {icon && !isLoading && (
        <Flex as="span" marginRight={children ? 'spacing2Xs' : 'none'}>
          <Icon
            className={styles.buttonIcon}
            as={icon}
            size={size === 'large' ? 'medium' : 'small'}
          />
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
