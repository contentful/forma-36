import { CommonProps } from '@contentful/f36-core';
import type { SpacingTokens } from '@contentful/f36-tokens';

export type ButtonGroupVariants = 'spaced' | 'merged' | 'collapsed';

export type ButtonGroupSpacing = SpacingTokens;

interface BaseButtonGroupProps extends CommonProps {
  /**
   * Determines how the Button Group will display the buttons
   * @default merged
   * Note that `collapsed` is a synonym of `merged`
   */
  variant?: ButtonGroupVariants;
  /**
   * Determines if the divider should be rendered between merged buttons
   * @default false
   */
  withDivider?: boolean;
  /**
   * Sets the spacing of the buttons if variant is separate.
   * @default spacingS
   */
  spacing?: ButtonGroupSpacing;
  children: React.ReactElement[] | React.ReactElement;
}

interface SpacedButtonGroupProps extends BaseButtonGroupProps {
  variant: 'spaced';
  withDivider?: never;
}

interface MergedButtonGroupProps extends BaseButtonGroupProps {
  variant?: 'merged';
  spacing?: never;
}

/**
 * @deprecated should be removed in v5
 */
interface CollapsedButtonGroupProps extends BaseButtonGroupProps {
  variant?: 'collapsed';
  spacing?: never;
}

export type ButtonGroupProps =
  | SpacedButtonGroupProps
  | MergedButtonGroupProps
  | CollapsedButtonGroupProps;

export type GetStyleArguments = {
  withDivider: boolean;
};
