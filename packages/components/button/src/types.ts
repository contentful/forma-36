import type { CommonProps } from '@contentful/f36-core';
import { IconProps } from '@contentful/f36-icon';

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
   * Expects any of the icon components. Renders the icon aligned to the start
   */
  startIcon?: React.ReactElement<IconProps>;
  /**
   * Expects any of the icon components. Renders the icon aligned to the end
   */
  endIcon?: React.ReactElement<IconProps>;
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
