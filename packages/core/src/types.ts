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
  | '2xs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

export interface MarginProps {
  m?: Spacing;
  margin?: Spacing;
  ml?: Spacing;
  marginLeft?: Spacing;
  mr?: Spacing;
  marginRight?: Spacing;
  mt?: Spacing;
  marginTop?: Spacing;
  mb?: Spacing;
  marginBottom?: Spacing;
}

export interface PaddingProps {
  p?: Spacing;
  padding?: Spacing;
  pl?: Spacing;
  paddingLeft?: Spacing;
  pr?: Spacing;
  paddingRight?: Spacing;
  pt?: Spacing;
  paddingTop?: Spacing;
  pb?: Spacing;
  paddingBottom?: Spacing;
}
