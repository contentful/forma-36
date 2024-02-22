import React from 'react';
import type {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import { Text } from '../Text';
import { useDensity } from '@contentful/f36-utils';

const HEADING_DEFAULT_TAG = 'h1';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
  children?: React.ReactNode;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type HeadingProps<
  E extends React.ElementType = typeof HEADING_DEFAULT_TAG,
> = PolymorphicProps<HeadingInternalProps, E>;

function _Heading<E extends React.ElementType = typeof HEADING_DEFAULT_TAG>(
  { children, testId = 'cf-ui-heading', ...otherProps }: HeadingProps<E>,
  ref: React.Ref<any>,
) {
  const density = useDensity();

  return (
    <Text
      as={HEADING_DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingM"
      fontWeight="fontWeightDemiBold"
      fontColor="gray900"
      fontSize={density === 'high' ? 'fontSizeXlHigh' : 'fontSizeXl'}
      lineHeight={density === 'high' ? 'lineHeightXlHigh' : 'lineHeightXl'}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

_Heading.displayName = 'Heading';

export const Heading: PolymorphicComponent<
  ExpandProps<HeadingInternalProps>,
  typeof HEADING_DEFAULT_TAG
> = React.forwardRef(_Heading);
