import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { TextLinkProps } from './TextLink';
import { TextLinkVariant } from './types';

const variantToStyles = (variant: TextLinkVariant) => {
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
    case 'premium':
      return {
        color: tokens.purple600,
        '&:hover, &:focus': {
          color: tokens.purple700,
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
    margin: 0, // remove the default button margin in Safari.
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
    outline: 'none',
    '&:focus, &:focus-visible, &:hover': {
      textDecoration: isDisabled ? 'none' : 'underline',
    },
    '&:focus': {
      boxShadow: isDisabled ? 'none' : tokens.glowPrimary,
      borderRadius: tokens.borderRadiusSmall,
    },
    '&:focus:not(:focus-visible)': {
      borderRadius: 0,
      boxShadow: 'none',
    },
    '&:focus-visible': {
      borderRadius: tokens.borderRadiusSmall,
      boxShadow: isDisabled ? 'none' : tokens.glowPrimary,
    },
  });

const textLinkIcon = () =>
  css({
    fill: 'currentColor',
    transition: `fill ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
  });

const textLinkText = ({ alignIcon }: Pick<TextLinkProps, 'alignIcon'>) => {
  if (alignIcon === 'start') {
    return css({
      marginLeft: tokens.spacing2Xs,
    });
  }

  if (alignIcon === 'end') {
    return css({
      marginRight: tokens.spacing2Xs,
    });
  }
};

const textLinkContent = () => {
  return css({
    display: 'flex',
    alignItems: 'baseline',
  });
};

export const styles = {
  textLink,
  textLinkIcon,
  textLinkText,
  textLinkContent,
};
