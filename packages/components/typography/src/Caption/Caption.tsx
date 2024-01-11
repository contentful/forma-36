import React from 'react';
import { FontWeightTokens } from '@contentful/f36-tokens';
import type {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import { Text } from '../Text';
import { useDensity } from '@contentful/f36-utils';

const CAPTION_DEFAULT_TAG = 'span';

export interface CaptionInternalProps extends CommonProps, MarginProps {
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

function _Caption<E extends React.ElementType = typeof CAPTION_DEFAULT_TAG>(
  {
    children,
    fontWeight = 'fontWeightNormal',
    testId = 'cf-ui-caption',
    ...otherProps
  }: CaptionProps<E>,
  ref: React.Ref<any>,
) {
  const density = useDensity();

  return (
    <Text
      as={CAPTION_DEFAULT_TAG}
      testId={testId}
      fontSize={density === 'high' ? 'fontSizeSHigh' : 'fontSizeS'}
      lineHeight="lineHeightS"
      fontColor="gray900"
      fontWeight={fontWeight}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

_Caption.displayName = 'Caption';

export const Caption: PolymorphicComponent<
  ExpandProps<CaptionInternalProps>,
  typeof CAPTION_DEFAULT_TAG
> = React.forwardRef(_Caption);
