import React, { forwardRef } from 'react';
import tokens from '@contentful/forma-36-tokens';
import cn from 'classnames';
import { Primitive } from '@contentful/f36-primitive';
import type { PrimitiveProps } from '@contentful/f36-primitive';
import type * as Polymorphic from '@contentful/f36-polymorphic';
import type * as CSS from 'csstype';

import styles from './Flex.css';

export type SpacingTypes =
  | 'none'
  | 'spacing2Xs'
  | 'spacingXs'
  | 'spacingS'
  | 'spacingM'
  | 'spacingL'
  | 'spacingXl'
  | 'spacing2Xl'
  | 'spacing3Xl'
  | 'spacing4Xl';

export type FlexProps = Polymorphic.Merge<
  PrimitiveProps,
  {
    /**
     * Child nodes to be rendered in the component */
    children?: React.ReactNode;
    /**
     * Sets width: 100% */
    fullWidth?: boolean;
    /**
     * Sets hegiht: 100% */
    fullHeight?: boolean;
    /**
     * Sets display:inline-flex */
    inlineFlex?: boolean;
    /**
     * Sets flex-shrink: 0 */
    noShrink?: boolean;
    /**
     * One of flex-wrap css values */
    flexWrap?: CSS.Property.FlexWrap;
    /**
     * One of flex-direction css values */
    flexDirection?: CSS.Property.FlexDirection;
    /**
     * One of flex-grow css values */
    flexGrow?: CSS.Property.FlexGrow;
    /**
     * One of justify-content css values */
    justifyContent?: CSS.Property.JustifyContent;
    /**
     * One of justify-content css values */
    justifyItems?: CSS.Property.JustifyContent;
    /**
     * One of justify-self css values */
    justifySelf?: CSS.Property.JustifySelf;
    /**
     * One of align-items css values */
    alignItems?: CSS.Property.AlignItems;
    /**
     * One of align-self css values */
    alignSelf?: CSS.Property.AlignItems;
    /**
     * sets margin to one of the corresponding spacing tokens, default is none */
    margin?: SpacingTypes;
    /**
     * sets margin-top to one of the corresponding spacing tokens, default is none */
    marginTop?: SpacingTypes;
    /**
     * sets margin-right to one of the corresponding spacing tokens, default is none */
    marginRight?: SpacingTypes;
    /**
     * sets margin-bottom to one of the corresponding spacing tokens, default is none */
    marginBottom?: SpacingTypes;
    /**
     * sets margin-left to one of the corresponding spacing tokens, default is none */
    marginLeft?: SpacingTypes;
    /**
     * sets padding to one of the corresponding spacing tokens, default is none */
    padding?: SpacingTypes;
    /**
     * sets padding-top to one of the corresponding spacing tokens, default is none */
    paddingTop?: SpacingTypes;
    /**
     * sets padding-right to one of the corresponding spacing tokens, default is none */
    paddingRight?: SpacingTypes;
    /**
     * sets padding-bottom to one of the corresponding spacing tokens, default is none */
    paddingBottom?: SpacingTypes;
    /**
     * sets padding-left to one of the corresponding spacing tokens, default is none */
    paddingLeft?: SpacingTypes;
    /**
     * style prop, for inline styles */
    style?: React.CSSProperties;
  }
>;

const handleSpacing = (value: SpacingTypes) =>
  value === 'none' ? 0 : tokens[value];

const DEFAULT_TAG = 'div';

export const Flex = forwardRef(function Flex(
  {
    alignItems,
    alignSelf,
    as = DEFAULT_TAG,
    children,
    className,
    flexDirection,
    flexGrow,
    flexWrap,
    fullHeight,
    fullWidth,
    inlineFlex,
    justifyContent,
    justifyItems,
    justifySelf,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    noShrink,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    style,
    testId = 'cf-ui-flex',
    ...otherProps
  }: FlexProps,
  forwardedRef,
) {
  const fullMargins = { margin: margin && handleSpacing(margin) };
  const sidesMargins = {
    marginTop: marginTop && handleSpacing(marginTop),
    marginRight: marginRight && handleSpacing(marginRight),
    marginBottom: marginBottom && handleSpacing(marginBottom),
    marginLeft: marginLeft && handleSpacing(marginLeft),
  };

  const fullPaddings = { padding: padding && handleSpacing(padding) };
  const sidesPaddings = {
    paddingTop: paddingTop && handleSpacing(paddingTop),
    paddingRight: paddingRight && handleSpacing(paddingRight),
    paddingBottom: paddingBottom && handleSpacing(paddingBottom),
    paddingLeft: paddingLeft && handleSpacing(paddingLeft),
  };
  const marginResult = margin ? fullMargins : sidesMargins;
  const paddingsResult = padding ? fullPaddings : sidesPaddings;

  const inlineStyle = {
    flexDirection,
    justifyContent,
    justifyItems,
    justifySelf,
    alignItems,
    alignSelf,
    flexWrap,
    flexGrow,
  };

  const classNames = cn(styles.Flex, className, {
    [styles.Flex__inline]: inlineFlex,
    [styles.Flex__fullWidth]: fullWidth,
    [styles.Flex__fullHeight]: fullHeight,
    [styles.Flex__noShrink]: noShrink,
  });

  return (
    <Primitive
      {...otherProps}
      as={as}
      className={classNames}
      ref={forwardedRef}
      style={{ ...inlineStyle, ...marginResult, ...paddingsResult, ...style }}
      testId={testId}
    >
      {children}
    </Primitive>
  );
}) as Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, FlexProps>;
