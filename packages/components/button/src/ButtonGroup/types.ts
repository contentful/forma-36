import type { SpacingTokens } from '@contentful/f36-tokens';

export type ButtonGroupVariants = 'separate' | 'collapse';

export type ButtonGroupSpacing = SpacingTokens;

export type GetStyleArguments = {
  variant: ButtonGroupVariants;
  withDivider: boolean;
  spacing: ButtonGroupSpacing;
};
