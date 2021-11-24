import React from 'react';
import { FontSizeTokens, LineHeightTokens } from '@contentful/f36-tokens';
import {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { Text } from './Text';
import type { HeadingElement } from './Heading';

const DISPLAY_TEXT_DEFAULT_TAG = 'h2';

export interface DisplayTextInternalProps extends CommonProps, MarginProps {
  size?: 'default' | 'large' | 'huge';
  as?: HeadingElement;
  isTruncated?: boolean;
}

export type DisplayTextProps<
  E extends React.ElementType = typeof DISPLAY_TEXT_DEFAULT_TAG
> = PolymorphicProps<DisplayTextInternalProps, E>;

function _DisplayText<
  E extends React.ElementType = typeof DISPLAY_TEXT_DEFAULT_TAG
>(
  {
    children,
    size = 'default',
    testId = 'cf-ui-display-text',
    ...otherProps
  }: DisplayTextProps<E>,
  ref: React.Ref<any>,
) {
  let fontSize: FontSizeTokens = 'fontSize2Xl';
  let lineHeight: LineHeightTokens = 'lineHeight2Xl';

  if (size === 'huge') {
    fontSize = 'fontSize4Xl';
    lineHeight = 'lineHeight4Xl';
  } else if (size === 'large') {
    fontSize = 'fontSize3Xl';
    lineHeight = 'lineHeight3Xl';
  }

  return (
    <Text
      as={DISPLAY_TEXT_DEFAULT_TAG}
      testId={testId}
      marginBottom={size === 'default' ? 'spacingL' : 'spacingXl'}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontColor="gray900"
      fontWeight="fontWeightDemiBold"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

export const DisplayText: PolymorphicComponent<
  DisplayTextInternalProps,
  typeof DISPLAY_TEXT_DEFAULT_TAG
> = React.forwardRef(_DisplayText);
