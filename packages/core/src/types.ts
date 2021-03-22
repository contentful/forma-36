import type { CSSProperties } from 'react';

export type CommonProps = {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * A selection ID used for testing purposes applied as a data attribute
   * (data-test-id)
   */
  testId?: string;
  /** Styles */
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

export type Spacing =
  | 'none'
  | 'spacing2Xs'
  | 'spacingXs'
  | 'spacingS'
  | 'spacingM'
  | 'spacingL'
  | 'spacingXl'
  | 'spacing2Xl'
  | 'spacing3Xl'
  | 'spacing4Xl';

export interface MarginProps {
  /**
   * sets margin to one of the corresponding spacing tokens, default is none */
  margin?: Spacing;
  /**
   * sets margin-top to one of the corresponding spacing tokens, default is none */
  marginTop?: Spacing;
  /**
   * sets margin-right to one of the corresponding spacing tokens, default is none */
  marginRight?: Spacing;
  /**
   * sets margin-bottom to one of the corresponding spacing tokens, default is none */
  marginBottom?: Spacing;
  /**
   * sets margin-left to one of the corresponding spacing tokens, default is none */
  marginLeft?: Spacing;
}

export interface PaddingProps {
  /**
   * sets padding to one of the corresponding spacing tokens, default is none */
  padding?: Spacing;
  /**
   * sets padding-top to one of the corresponding spacing tokens, default is none */
  paddingTop?: Spacing;
  /**
   * sets padding-right to one of the corresponding spacing tokens, default is none */
  paddingRight?: Spacing;
  /**
   * sets padding-bottom to one of the corresponding spacing tokens, default is none */
  paddingBottom?: Spacing;
  /**
   * sets padding-left to one of the corresponding spacing tokens, default is none */
  paddingLeft?: Spacing;
}

export type PickUnion<UnionType, Keys> = Exclude<
  UnionType,
  Exclude<UnionType, Keys>
>;
