import React from 'react';
import tokens, {
  FontSizeTokens,
  LineHeightTokens,
  FontWeightTokens,
  FontStackTokens,
  ColorTokens,
} from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import {
  PolymorphicComponent,
  CommonProps,
  MarginProps,
  PolymorphicProps,
  Box,
} from '@contentful/f36-core';

export interface TextInternalProps extends CommonProps, MarginProps {
  children?: React.ReactNode;
  fontSize?: FontSizeTokens;
  lineHeight?: LineHeightTokens;
  fontStack?: FontStackTokens;
  fontWeight?: FontWeightTokens;
  fontColor?: ColorTokens;
  isTruncated?: boolean;
}

const DEFAULT_TAG = 'span';

function truncatedStyle() {
  return css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  });
}

export type TextProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<TextInternalProps, E>;

function _Text<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    fontSize = 'fontSizeM',
    fontStack = 'fontStackPrimary',
    fontWeight = 'fontWeightNormal',
    fontColor = 'gray700',
    lineHeight,
    children,
    isTruncated,
    as,
    className,
    ...otherProps
  }: TextProps<E>,
  ref: React.Ref<any>,
) {
  const Element: React.ElementType = as || DEFAULT_TAG;

  return (
    <Box
      {...otherProps}
      as={Element}
      className={cx(
        css({
          margin: 0,
          padding: 0,
          fontFamily: tokens[fontStack],
          fontWeight: tokens[fontWeight],
          color: tokens[fontColor],
          fontSize: tokens[fontSize],
          lineHeight: tokens[lineHeight],
        }),
        isTruncated ? truncatedStyle() : null,
        className,
      )}
      ref={ref}
    >
      {children}
    </Box>
  );
}

export const Text: PolymorphicComponent<
  TextInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Text);
