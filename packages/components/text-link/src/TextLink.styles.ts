import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { TextLinkProps } from './TextLink';
import { TextLinkVariant } from './types';

const variantToStyles = (variant: TextLinkVariant): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        color: tokens.blue600,
        '&:hover, &:focus': {
          color: tokens.blue700,
        },
      };
    case 'secondary':
      return {
        color: tokens.gray600,
        '&:hover, &:focus': {
          color: tokens.gray700,
        },
      };
    case 'positive':
      return {
        color: tokens.green600,
        '&:hover, &:focus': {
          color: tokens.green700,
        },
      };
    case 'negative':
      return {
        color: tokens.red600,
        '&:hover, &:focus': {
          color: tokens.red700,
        },
      };
    case 'muted':
      return {
        color: tokens.gray400,
        '&:hover, &:focus': {
          color: tokens.gray500,
        },
      };
    case 'white':
      return {
        color: tokens.colorWhite,
        '&:hover, &:focus': {
          color: tokens.gray100,
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
