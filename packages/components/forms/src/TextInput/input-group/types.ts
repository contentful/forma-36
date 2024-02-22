import type { SpacingTokens } from '@contentful/f36-tokens';
import type { Density } from '@contentful/f36-utils';

export type InputGroupSpacing = SpacingTokens | 'none';

export type GetStyleArguments = {
  spacing: InputGroupSpacing;
  density: Density;
};
