import React from 'react';
import {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import type { HeadingElement } from './Heading';
import { Text } from './Text';

const DEFAULT_TAG = 'h2';

export interface SubheadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
  isTruncated?: boolean;
}

export type SubheadingProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<SubheadingInternalProps, E>;

function _Subheading<E extends React.ElementType = typeof DEFAULT_TAG>(
  { children, testId = 'cf-ui-subheading', ...otherProps }: SubheadingProps<E>,
  ref: React.Ref<any>,
) {
  return (
    <Text
      as={DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingM"
      fontSize="fontSizeL"
      lineHeight="lineHeightL"
      fontWeight="fontWeightDemiBold"
      fontColor="gray900"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

export const Subheading: PolymorphicComponent<
  SubheadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Subheading);
