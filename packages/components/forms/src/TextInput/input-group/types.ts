import type { SpacingTokens } from '@contentful/f36-tokens';

export type InputGroupSpacing = SpacingTokens | 'none';

export type GetStyleArguments = {
  spacing: InputGroupSpacing;
};
