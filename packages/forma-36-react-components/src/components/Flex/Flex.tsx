import React from 'react';
import tokens from '@contentful/forma-36-tokens';
import cn from 'classnames';
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

export interface FlexProps {
  /**
   * Class names to be appended to the className prop of the component */
  className?: string;
  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id) */
  testId?: string;
  /**
   * Html tag used as container
   */
  htmlTag?: React.ElementType;
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

const handleSpacing = (value: SpacingTypes) =>
  value === 'none' ? 0 : tokens[value];

const defaultProps = {
  testId: 'cf-ui-flex',
};

export const Flex = (props: FlexProps) => {
  const {
    htmlTag: Container = 'div',
    fullWidth,
    fullHeight,
    noShrink,
    flexWrap,
    flexDirection,
    flexGrow,
    inlineFlex,
    justifyContent,
    justifyItems,
    justifySelf,
    alignItems,
    alignSelf,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    className,
    children,
    testId,
    style,
    ...otherProps
  } = props;

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
    [styles.Flex__fullHight]: fullHeight,
    [styles.Flex__noShrink]: noShrink,
  });

  return (
    <Container
      {...otherProps}
      style={{ ...inlineStyle, ...marginResult, ...paddingsResult, ...style }}
      className={classNames}
      data-test-id={testId}
    >
      {children}
    </Container>
  );
};
Flex.defaultProps = defaultProps;

export default Flex;
