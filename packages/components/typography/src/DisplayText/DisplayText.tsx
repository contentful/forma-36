import React from 'react';
import { FontSizeTokens, LineHeightTokens } from '@contentful/f36-tokens';
import type {
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import { Text, type TextProps } from '../Text';
import type { HeadingElement } from '../Heading';

const DISPLAY_TEXT_DEFAULT_TAG = 'h2';

export interface DisplayTextInternalProps extends Omit<TextProps, 'as'> {
  children?: React.ReactNode;
  size?: 'default' | 'large';
  as?: HeadingElement;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type DisplayTextProps<
  E extends React.ElementType = typeof DISPLAY_TEXT_DEFAULT_TAG,
> = PolymorphicProps<DisplayTextInternalProps, E>;

function _DisplayText<
  E extends React.ElementType = typeof DISPLAY_TEXT_DEFAULT_TAG,
>(
  {
    children,
    size = 'default',
    testId = 'cf-ui-display-text',
    as,
    fontColor = 'gray900',
    ...otherProps
  }: DisplayTextProps<E>,
  ref: React.Ref<any>,
) {
  let fontSize: FontSizeTokens = 'fontSize2Xl';
  let lineHeight: LineHeightTokens = 'lineHeightXl';

  if (size === 'large') {
    fontSize = 'fontSize3Xl';
    lineHeight = 'lineHeight3Xl';
  }
  const Element: React.ElementType = as || DISPLAY_TEXT_DEFAULT_TAG;

  return (
    <Text
      as={Element}
      testId={testId}
      marginBottom={size === 'default' ? 'spacingL' : 'spacingXl'}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontColor={fontColor}
      fontWeight="fontWeightDemiBold"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

_DisplayText.displayName = 'DisplayText';

export const DisplayText = React.forwardRef(
  _DisplayText,
) as PolymorphicComponent<
  ExpandProps<DisplayTextInternalProps>,
  typeof DISPLAY_TEXT_DEFAULT_TAG
>;
