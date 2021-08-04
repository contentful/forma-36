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

export interface ButtonInternalProps extends CommonProps {
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
}
