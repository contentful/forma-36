import React from 'react';
import { FontWeightTokens } from '@contentful/f36-tokens';
import type {
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import { Text, type TextProps } from '../Text';
import { useDensity } from '@contentful/f36-utils';

const CAPTION_DEFAULT_TAG = 'span';

export interface CaptionInternalProps extends Omit<TextProps, 'as'> {
  children?: React.ReactNode;
  fontWeight?: Extract<
    FontWeightTokens,
    'fontWeightNormal' | 'fontWeightMedium'
  >;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type CaptionProps<
  E extends React.ElementType = typeof CAPTION_DEFAULT_TAG,
> = PolymorphicProps<CaptionInternalProps, E>;

function CaptionBase<E extends React.ElementType = typeof CAPTION_DEFAULT_TAG>(
  {
    children,
    fontWeight = 'fontWeightNormal',
    testId = 'cf-ui-caption',
    as,
    fontColor = 'gray900',
    ...otherProps
  }: CaptionProps<E>,
  ref: React.Ref<HTMLElement>,
) {
  const density = useDensity();
  const Element: React.ElementType = as || CAPTION_DEFAULT_TAG;
  return (
    <Text
      as={Element}
      testId={testId}
      fontSize={density === 'high' ? 'fontSizeSHigh' : 'fontSizeS'}
      lineHeight={density === 'high' ? 'lineHeightSHigh' : 'lineHeightS'}
      fontColor={fontColor}
      fontWeight={fontWeight}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

CaptionBase.displayName = 'Caption';

export const Caption = React.forwardRef(CaptionBase) as PolymorphicComponent<
  ExpandProps<CaptionInternalProps>,
  typeof CAPTION_DEFAULT_TAG
>;
