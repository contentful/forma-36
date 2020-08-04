import React from 'react';
import * as CSS from 'csstype';
import tokens from '@contentful/forma-36-tokens';
import cn from 'classnames';

import styles from './Flex.css';

export type SpacingTypes = 'none' | 'spacing2xs' | 'spacingXs' | 'spacingS' | 'spacingM' | 'spacingL' | 'spacingXl' | 'spacing2Xl' | 'spacing3Xl' | 'spacing4Xl';

export type FlexContainerType =
  | 'a'
  | 'article'
  | 'aside'
  | 'div'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'input'
  | 'li'
  | 'main'
  | 'nav'
  | 'ol'
  | 'p'
  | 'pre'
  | 'section'
  | 'span'
  | 'textarea'
  | 'ul';

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
  htmlTag?: any,
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
  flexWrap?: CSS.FlexWrapProperty,
  /**
   * One of flex-direction css values */
  flexDirection?: CSS.FlexDirectionProperty;
  /**
   * One of justify-content css values */
  justifyContent?: CSS.JustifyContentProperty;
   /**
   * One of justify-content css values */
  justifyItems?: CSS.JustifyContentProperty;
  /**
   * One of justify-self css values */
  justifySelf?: CSS.JustifySelfProperty;
  /**
   * One of align-items css values */
  alignItems?: CSS.AlignItemsProperty;
  /**
   * One of align-self css values */
  alignSelf?: CSS.AlignItemsProperty;
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

const handleSpacing = (value: SpacingTypes) => value === 'none' ? 0 : tokens[value];

const defaultProps = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
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

  const fullMargins = {margin: margin && handleSpacing(margin)}
  const sidesMargins = {
    marginTop: marginTop && handleSpacing(marginTop),
    marginRight: marginRight && handleSpacing(marginRight),
    marginBottom: marginBottom && handleSpacing(marginBottom),
    marginLeft: marginLeft && handleSpacing(marginLeft),
  }

  const fullPaddings = {padding: padding && handleSpacing(padding)}
  const sidesPaddings = {
    paddingTop: paddingTop && handleSpacing(paddingTop),
    paddingRight: paddingRight && handleSpacing(paddingRight),
    paddingBottom: paddingBottom && handleSpacing(paddingBottom),
    paddingLeft: paddingLeft && handleSpacing(paddingLeft),
  }
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
  }

  const classNames = cn(styles.Flex, className, {
    [styles.Flex__inline]: inlineFlex,
    [styles.Flex__fullWidth]: fullWidth,
    [styles.Flex__fullHight]: fullHeight,
    [styles.Flex__noShrink]: noShrink,
  });


  return (
    <Container {...otherProps} style={{...inlineStyle, ...marginResult, ...paddingsResult, ...style}} className={classNames} data-test-id={testId}>
      {children}
    </Container>
  );
}
Flex.defaultProps = defaultProps;

export default Flex;
