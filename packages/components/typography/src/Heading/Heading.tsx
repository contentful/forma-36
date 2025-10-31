import React from 'react';
import type {
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import { Text, type TextProps } from '../Text';
import { useDensity } from '@contentful/f36-utils';

const HEADING_DEFAULT_TAG = 'h1';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingInternalProps extends Omit<TextProps, 'as'> {
  as?: HeadingElement;
  children?: React.ReactNode;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type HeadingProps<
  E extends React.ElementType = typeof HEADING_DEFAULT_TAG,
> = PolymorphicProps<HeadingInternalProps, E>;

function HeadingBase<E extends React.ElementType = typeof HEADING_DEFAULT_TAG>(
  {
    children,
    testId = 'cf-ui-heading',
    as,
    fontColor = 'gray900',
    marginBottom = 'spacingM',
    ...otherProps
  }: HeadingProps<E>,
  ref: React.Ref<HTMLHeadingElement>,
) {
  const density = useDensity();
  const Element: React.ElementType = as || HEADING_DEFAULT_TAG;

  return (
    <Text
      as={Element}
      testId={testId}
      marginBottom={marginBottom}
      fontWeight="fontWeightDemiBold"
      fontColor={fontColor}
      fontSize={density === 'high' ? 'fontSizeXlHigh' : 'fontSizeXl'}
      lineHeight={density === 'high' ? 'lineHeightXlHigh' : 'lineHeightXl'}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

HeadingBase.displayName = 'Heading';

export const Heading = React.forwardRef(HeadingBase) as PolymorphicComponent<
  ExpandProps<HeadingInternalProps>,
  typeof HEADING_DEFAULT_TAG
>;
