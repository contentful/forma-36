import { CommonProps } from '@contentful/f36-core';
import type { SpacingTokens } from '@contentful/f36-tokens';

export type InputGroupSpacing = SpacingTokens | 'none';

export interface InputGroupProps extends CommonProps {
  /**
   * Sets the spacing of the elements if variant is separate.
   * @default spacingS
   */
  spacing?: InputGroupSpacing;
  children: React.ReactNode;
}

export type GetStyleArguments = {
  spacing: InputGroupSpacing;
};
