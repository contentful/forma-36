import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const styles = {
  accordionHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '0',
    padding: tokens.spacingM,
    backgroundColor: 'transparent',
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeL,
    fontWeight: tokens.fontWeightDemiBold,
    lineHeight: tokens.lineHeightDefault,
    color: tokens.gray800,
    width: '100%',
    cursor: 'pointer',
    transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    '&:hover': {
      backgroundColor: tokens.colorElementLightest,
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: tokens.colorElementLightest,
    },
  } as CSSObject,
  alignHeaderStart: {
    minWidth: '9px',
    marginRight: tokens.spacingXs,
  } as CSSObject,
  alignHeaderEnd: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  } as CSSObject,
  accordionHeaderIcon: {
    transform: 'rotate(0deg)',
    transition: `transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
  } as CSSObject,
  accordionHeaderIconExpanded: { transform: 'rotate(180deg)' } as CSSObject,
};

const getHeaderStyles = (align) =>
  cx(css(styles.accordionHeader), {
    [css(styles.alignHeaderEnd)]: align === 'end',
    [css(styles.alignHeaderStart)]: align === 'start',
  });

const getIconStyles = (isExpanded) =>
  cx(css(styles.accordionHeaderIcon), {
    [css(styles.accordionHeaderIconExpanded)]: isExpanded,
  });

export const getAccordionHeaderStyles = ({
  align,
  isExpanded,
}: {
  align: 'start' | 'end';
  isExpanded: boolean;
}) => ({
  accordionHeader: getHeaderStyles(align),
  accordionHeaderIcon: getIconStyles(isExpanded),
});
