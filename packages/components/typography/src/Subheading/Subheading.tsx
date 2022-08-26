import React from 'react';
import type {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import type { HeadingElement } from '../Heading';
import { Text } from '../Text';

const SUBHEADING_DEFAULT_TAG = 'h3';

export interface SubheadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type SubheadingProps<
  E extends React.ElementType = typeof SUBHEADING_DEFAULT_TAG
> = PolymorphicProps<SubheadingInternalProps, E>;

function _Subheading<
  E extends React.ElementType = typeof SUBHEADING_DEFAULT_TAG
>(
  { children, testId = 'cf-ui-subheading', ...otherProps }: SubheadingProps<E>,
  ref: React.Ref<any>,
) {
  return (
    <Text
      as={SUBHEADING_DEFAULT_TAG}
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

_Subheading.displayName = 'Subheading';

export const Subheading: PolymorphicComponent<
  ExpandProps<SubheadingInternalProps>,
  typeof SUBHEADING_DEFAULT_TAG
> = React.forwardRef(_Subheading);
