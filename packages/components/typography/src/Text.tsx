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
  PolymorphicComponentWithRef,
  CommonProps,
  MarginProps,
  PolymorphicComponentProps,
  useBox,
} from '@contentful/f36-core';

export interface TextInternalProps extends CommonProps, MarginProps {
  children?: React.ReactNode;
  fontSize?: FontSizeTokens;
  lineHeight?: LineHeightTokens;
  fontStack?: FontStackTokens;
  fontWeight?: FontWeightTokens;
  fontColor?: ColorTokens;
}

const DEFAULT_TAG = 'span';

export type TextProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  TextInternalProps
>;

const _Text: PolymorphicComponentWithRef<
  TextInternalProps,
  typeof DEFAULT_TAG
> = (
  {
    fontSize = 'fontSizeM',
    fontStack = 'fontStackPrimary',
    fontWeight = 'fontWeightNormal',
    fontColor = 'gray700',
    lineHeight,
    children,
    as = DEFAULT_TAG,
    ...otherProps
  },
  ref,
) => {
  const { boxProps, Element } = useBox({
    ...otherProps,
    as,
  });
  return (
    <Element
      {...boxProps}
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
        boxProps.className,
      )}
      ref={ref}
    >
      {children}
    </Element>
  );
};

export const Text: PolymorphicComponent<
  TextInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Text);
