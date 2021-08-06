import React from 'react';
import {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import { Text } from './Text';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
  children?: React.ReactNode;
}

export type HeadingProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, HeadingInternalProps>;

const DEFAULT_TAG = 'h1';

const _Heading: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, testId = 'cf-ui-heading', ...otherProps }, ref) => {
  return (
    <Text
      as={DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingM"
      fontWeight="fontWeightDemiBold"
      color="gray900"
      fontSize="fontSizeXl"
      lineHeight="lineHeightXl"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
};

export const Heading: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Heading);
