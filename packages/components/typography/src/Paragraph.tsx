import React from 'react';
import {
  PolymorphicComponent,
  PolymorphicComponentWithRef,
  PolymorphicComponentProps,
  CommonProps,
  MarginProps,
} from '@contentful/f36-core';
import { Text } from './Text';

const DEFAULT_TAG = 'p';

export type ParagraphInternalProps = CommonProps &
  MarginProps & {
    children: React.ReactNode;
    as?: typeof DEFAULT_TAG;
    isTruncated?: boolean;
  };

export type ParagraphProps = PolymorphicComponentProps<
  'p',
  ParagraphInternalProps
>;

const _Paragraph: PolymorphicComponentWithRef<
  ParagraphInternalProps,
  typeof DEFAULT_TAG
> = ({ children, testId = 'cf-ui-paragraph', ...otherProps }, ref) => {
  return (
    <Text
      as={DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingM"
      lineHeight="lineHeightM"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
};

export const Paragraph: PolymorphicComponent<
  ParagraphInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Paragraph);
