import { CommonProps } from '@contentful/f36-core';

export type BadgeSize = 'default' | 'small';

export type BadgeVariant =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'primary-filled'
  | 'featured';

export type BadgeStylesProps = {
  variant: BadgeVariant;
  size: BadgeSize;
};

export interface BadgeInternalProps extends CommonProps {
  /**
   * Sets the size of the component
   * @default default
   */
  size?: BadgeSize;
  /**
   * Determines the variation of the component
   * @default primary
   */
  variant?: BadgeVariant;
  /**
   * Expects any of the icon components. Renders the icon aligned to the start
   */
  startIcon?: React.ReactElement;
  /**
   * Expects any of the icon components. Renders the icon aligned to the end
   */
  endIcon?: React.ReactElement;

  children: React.ReactNode;
}
