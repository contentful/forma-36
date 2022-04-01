import React from 'react';
import tokens, {
  FontSizeTokens,
  LineHeightTokens,
  FontWeightTokens,
  FontStackTokens,
  ColorTokens,
} from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import { Box, useTheme } from '@contentful/f36-core';
import type {
  PolymorphicComponent,
  CommonProps,
  MarginProps,
  PolymorphicProps,
  ExpandProps,
  Theme,
} from '@contentful/f36-core';

export interface TextInternalProps extends CommonProps, MarginProps {
  children?: React.ReactNode;
  fontSize?: FontSizeTokens;
  lineHeight?: LineHeightTokens;
  fontStack?: FontStackTokens;
  fontWeight?: FontWeightTokens;
  fontColor?: ColorTokens;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

const TEXT_DEFAULT_TAG = 'span';

function truncatedStyle() {
  return css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  });
}

function wordBreakStyle() {
  return css({
    wordBreak: 'break-word',
  });
}

export type TextProps<
  E extends React.ElementType = typeof TEXT_DEFAULT_TAG
> = PolymorphicProps<TextInternalProps, E>;

function _Text<E extends React.ElementType = typeof TEXT_DEFAULT_TAG>(
  {
    fontSize = 'fontSizeM',
    fontStack = 'fontStackPrimary',
    fontWeight = 'fontWeightNormal',
    fontColor,
    lineHeight = 'lineHeightM',
    children,
    isTruncated,
    isWordBreak,
    as,
    className,
    margin = 'none',
    ...otherProps
  }: TextProps<E>,
  ref: React.Ref<any>,
) {
  const theme: Theme = useTheme();
  const Element: React.ElementType = as || TEXT_DEFAULT_TAG;

  return (
    <Box
      {...otherProps}
      as={Element}
      className={cx(
        css({
          padding: 0,
          fontFamily: tokens[fontStack],
          fontWeight: tokens[fontWeight],
          color: tokens[fontColor] ?? theme.text.color,
          fontSize: tokens[fontSize],
          lineHeight: tokens[lineHeight],
        }),
        isTruncated ? truncatedStyle() : null,
        isWordBreak ? wordBreakStyle() : null,
        className,
      )}
      margin={margin}
      ref={ref}
    >
      {children}
    </Box>
  );
}

_Text.displayName = 'Text';

export const Text: PolymorphicComponent<
  ExpandProps<TextInternalProps>,
  typeof TEXT_DEFAULT_TAG
> = React.forwardRef(_Text);
