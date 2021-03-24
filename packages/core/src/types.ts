import type { F36Spacing } from '@contentful/f36-tokens';
import type { CSSProperties } from 'react';

export type CommonProps = {
  /**
   * CSS class to be appended to the root element
   */
  className?: string;
  /**
   * A [data-test-id] attribute used for testing purposes
   */
  testId?: string;
  /** Accepts a JavaScript object with camelCased properties rather than a CSS string */
  style?: CSSProperties;
};

/**
 * Forma 36 component variants
 */
export type ComponentVariant =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'warning';

/**
 * Contentful entity status
 */
export type EntityStatus =
  | 'archived'
  | 'changed'
  | 'deleted'
  | 'draft'
  | 'new'
  | 'published';

export type Spacing = F36Spacing | 'none';

export interface MarginProps {
  /**
   * sets margin to one of the corresponding spacing tokens
   */
  margin?: Spacing;
  /**
   * sets margin-top to one of the corresponding spacing tokens
   */
  marginTop?: Spacing;
  /**
   * sets margin-right to one of the corresponding spacing tokens
   */
  marginRight?: Spacing;
  /**
   * sets margin-bottom to one of the corresponding spacing tokens
   */
  marginBottom?: Spacing;
  /**
   * sets margin-left to one of the corresponding spacing tokens */
  marginLeft?: Spacing;
}

export interface PaddingProps {
  /**
   * sets padding to one of the corresponding spacing tokens */
  padding?: Spacing;
  /**
   * sets padding-top to one of the corresponding spacing tokens */
  paddingTop?: Spacing;
  /**
   * sets padding-right to one of the corresponding spacing tokens */
  paddingRight?: Spacing;
  /**
   * sets padding-bottom to one of the corresponding spacing tokens */
  paddingBottom?: Spacing;
  /**
   * sets padding-left to one of the corresponding spacing tokens */
  paddingLeft?: Spacing;
}

export type PickUnion<UnionType, Keys> = Exclude<
  UnionType,
  Exclude<UnionType, Keys>
>;
