import { CommonProps } from '@contentful/f36-core';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'transparent';

export type ButtonStylesProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  isActive: boolean;
  isDisabled: boolean;
  isFullWidth: boolean;
};

interface BaseButtonProps extends CommonProps {
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
   * Adds dropdown indicator icon
   */
  isDropdown?: boolean;
  /**
   * Expects any of the icon components
   */
  icon?: React.ReactElement;
  /**
   * Adds loading indicator icon and disables interactions
   */
  isLoading?: boolean;
  /**
   * Forces button to take 100% of the container
   */
  isFullWidth?: boolean;
  /**
   * The element used for the root node.
   * @default button
   */
  as?: 'a' | 'button';
  /**
   * Button html type attribute
   * @default button
   */
  type?: 'submit' | 'button' | 'reset';
  /**
   * URL if the button should be rendered as an anchor tag
   */
  href?: string;
}

interface ButtonElementProps extends BaseButtonProps {
  as?: 'button';
  href?: never;
}

interface AnchorElementProps extends BaseButtonProps {
  as: 'a';
  href: string;
}

export type ButtonInternalProps = ButtonElementProps | AnchorElementProps;
