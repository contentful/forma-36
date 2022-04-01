import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { Theme } from '@contentful/f36-core';

type StyleProps = {
  align: 'start' | 'end';
  isExpanded: boolean;
  theme: Theme;
};

const getHeaderStyles = ({ align, theme }: StyleProps) =>
  cx(
    css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      border: '0',
      padding: tokens.spacingM,
      backgroundColor: 'transparent',
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeL,
      fontWeight: tokens.fontWeightDemiBold,
      lineHeight: tokens.lineHeightL,
      color: theme.accordionHeader.color,
      width: '100%',
      minWidth: '9px',
      cursor: 'pointer',
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
        box-shadow ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        backgroundColor: theme.accordionHeader.hover.backgroundColor,
      },
      '&:focus': {
        backgroundColor: tokens.gray100,
        borderRadius: tokens.borderRadiusMedium,
        boxShadow: tokens.glowPrimary,
        outline: 'none',
      },
      '&:focus:not(:focus-visible)': {
        backgroundColor: 'transparent',
        borderRadius: 'unset',
        boxShadow: 'unset',
      },
      '&:focus-visible': {
        backgroundColor: tokens.gray100,
        borderRadius: tokens.borderRadiusMedium,
        boxShadow: tokens.glowPrimary,
      },
    }),
    align === 'end' &&
      css({
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
      }),
  );

const getIconStyles = ({ align, isExpanded, theme }: StyleProps) =>
  cx(
    css({
      transform: 'rotate(0deg)',
      transition: `transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    }),
    align === 'end' && css({ marginLeft: tokens.spacingM }),
    align === 'start' && css({ marginRight: tokens.spacingM }),
    isExpanded &&
      css({
        transform: 'rotate(180deg)',
      }),
  );

export const getAccordionHeaderStyles = (props: StyleProps) => ({
  accordionHeader: getHeaderStyles(props),
  accordionHeaderIcon: getIconStyles(props),
});
