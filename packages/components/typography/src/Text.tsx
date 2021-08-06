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
  color?: ColorTokens;
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
    testId = 'cf-ui-text',
    fontSize = 'fontSizeM',
    lineHeight = 'lineHeightM',
    fontStack = 'fontStackPrimary',
    fontWeight = 'fontWeightNormal',
    color = 'gray700',
    ...otherProps
  },
  ref,
) => {
  const { boxProps, Element } = useBox(otherProps);
  return (
    <Element
      {...boxProps}
      testId={testId}
      className={cx(
        css({
          fontFamily: tokens[fontStack],
          fontWeight: tokens[fontWeight],
          color: tokens[color],
          fontSize: tokens[fontSize],
          lineHeight: tokens[lineHeight],
          textRendering: 'optimizeLegibility',
        }),
        boxProps.className,
      )}
      ref={ref}
    />
  );
};

export const Text: PolymorphicComponent<
  TextInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Text);
