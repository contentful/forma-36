import React from 'react';
import {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import type { HeadingElement } from './Heading';
import { Text } from './Text';

const DEFAULT_TAG = 'h2';

export interface SubheadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
}

export type SubheadingProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, SubheadingInternalProps>;

const _Subheading: PolymorphicComponentWithRef<
  SubheadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, testId = 'cf-ui-subheading', ...otherProps }, ref) => {
  return (
    <Text
      as={DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingM"
      fontSize="fontSizeL"
      lineHeight="lineHeightL"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
};

export const Subheading: PolymorphicComponent<
  SubheadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Subheading);
