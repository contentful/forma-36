import React from 'react';
import type {
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import type { HeadingElement } from '../Heading';
import { Text, type TextProps } from '../Text';
import { useDensity } from '@contentful/f36-utils';

const SUBHEADING_DEFAULT_TAG = 'h3';

export interface SubheadingInternalProps extends Omit<TextProps, 'as'> {
  children?: React.ReactNode;
  as?: HeadingElement;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type SubheadingProps<
  E extends React.ElementType = typeof SUBHEADING_DEFAULT_TAG,
> = PolymorphicProps<SubheadingInternalProps, E>;

function _Subheading<
  E extends React.ElementType = typeof SUBHEADING_DEFAULT_TAG,
>(
  {
    children,
    testId = 'cf-ui-subheading',
    as,
    fontColor = 'gray900',
    ...otherProps
  }: SubheadingProps<E>,
  ref: React.Ref<any>,
) {
  const density = useDensity();
  const Element: React.ElementType = as || SUBHEADING_DEFAULT_TAG;
  return (
    <Text
      as={Element}
      testId={testId}
      marginBottom="spacingM"
      fontSize={density === 'high' ? 'fontSizeLHigh' : 'fontSizeL'}
      lineHeight={density === 'high' ? 'lineHeightLHigh' : 'lineHeightL'}
      fontWeight="fontWeightDemiBold"
      fontColor={fontColor}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

_Subheading.displayName = 'Subheading';

export const Subheading = React.forwardRef(_Subheading) as PolymorphicComponent<
  ExpandProps<SubheadingInternalProps>,
  typeof SUBHEADING_DEFAULT_TAG
>;
