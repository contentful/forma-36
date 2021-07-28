import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { TextLinkProps } from './TextLink';
import { TextLinkVariant } from './types';

const variantToStyles = (variant: TextLinkVariant): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        color: tokens.colorBlueMid,
        '&:hover, &:focus': {
          color: tokens.colorBlueDark,
        },
      };
    case 'secondary':
      return {
        color: tokens.colorTextMid,
        '&:hover, &:focus': {
          color: tokens.colorTextDark,
        },
      };
    case 'positive':
      return {
        color: tokens.colorGreenBase,
        '&:hover, &:focus': {
          color: tokens.colorGreenDark,
        },
      };
    case 'negative':
      return {
        color: tokens.colorRedBase,
        '&:hover, &:focus': {
          color: tokens.colorRedDark,
        },
      };
    case 'muted':
      return {
        color: tokens.colorTextLight,
        '&:hover, &:focus': {
          color: tokens.colorTextMid,
        },
      };
    case 'white':
      return {
        color: tokens.colorWhite,
        '&:hover, &:focus': {
          color: tokens.colorWhite,
          opacity: 0.75,
        },
      };
    default:
      return { color: tokens.colorWhite };
  }
};

const textLink = ({
  variant,
  isDisabled,
}: Pick<TextLinkProps, 'variant' | 'isDisabled'>) =>
  css({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    border: 0,
    padding: 0,
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeM,
    fontWeight: tokens.fontWeightMedium,
    transition: `color ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
    textDecoration: 'none',
    background: 'none',
    appearance: 'none',
    whiteSpace: 'normal',
    textAlign: 'left',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
    ...variantToStyles(variant),
    '&:focus, &:hover': {
      textDecoration: isDisabled ? 'none' : 'underline',
    },
    '&:focus': {
      boxShadow: tokens.glowPrimary,
      outline: 'none',
      borderRadius: tokens.borderRadiusSmall,
    },
  });

const textLinkIcon = css({
  fill: 'currentColor',
  transition: `fill ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
});

const textLinkText = ({ alignIcon }: Pick<TextLinkProps, 'alignIcon'>) => {
  if (alignIcon === 'start') {
    return css({
      marginLeft: '0.125rem',
    });
  }

  if (alignIcon === 'end') {
    return css({
      marginRight: '0.125rem',
    });
  }
};

export const styles = {
  textLink,
  textLinkIcon,
  textLinkText,
};
