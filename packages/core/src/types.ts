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
  margin?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
  marginTop?: Spacing;
  marginBottom?: Spacing;
}

export interface PaddingProps {
  padding?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
}
