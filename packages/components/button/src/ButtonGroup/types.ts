import { CommonProps } from '@contentful/f36-core';
import type { SpacingTokens } from '@contentful/f36-tokens';

export type ButtonGroupVariants = 'spaced' | 'collapsed';

export type ButtonGroupSpacing = SpacingTokens;

interface BaseButtonGroupProps extends CommonProps {
  /**
   * Determines how the Button Group will display the buttons
   * @default collapse
   */
  variant?: ButtonGroupVariants;
  /**
   * Determines if the divider should be rendered between collapsed buttons
   * @default false
   */
  withDivider?: boolean;
  /**
   * Sets the spacing of the buttons if variant is separate.
   * @default spacingS
   */
  spacing?: ButtonGroupSpacing;
  children: React.ReactElement[];
}

interface SpacedButtonGroupProps extends BaseButtonGroupProps {
  variant: 'spaced';
  withDivider?: never;
}

interface CollapsedButtonGroupProps extends BaseButtonGroupProps {
  variant?: 'collapsed';
  spacing?: never;
}

export type ButtonGroupProps =
  | SpacedButtonGroupProps
  | CollapsedButtonGroupProps;

export type GetStyleArguments = {
  variant: ButtonGroupVariants;
  withDivider: boolean;
  spacing: ButtonGroupSpacing;
};
