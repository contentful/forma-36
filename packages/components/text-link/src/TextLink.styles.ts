import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { Theme } from '@contentful/f36-core';
import { TextLinkProps } from './TextLink';
import { TextLinkVariant } from './types';

const variantToStyles = (variant: TextLinkVariant, theme: Theme) => {
  switch (variant) {
    case 'primary':
      return {
        color: theme.textLinkPrimary.color,
        '&:hover, &:focus': {
          color: theme.textLinkPrimary.hoverColor,
        },
      };
    case 'secondary':
      return {
        color: theme.textLinkSecondary.color,
        '&:hover, &:focus': {
          color: theme.textLinkSecondary.hoverColor,
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
  theme,
  variant,
  isDisabled,
}: {
  theme: Theme;
  variant: TextLinkProps['variant'];
  isDisabled: TextLinkProps['isDisabled'];
}) =>
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
    ...variantToStyles(variant, theme),
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

export const styles = {
  textLink,
  textLinkIcon,
  textLinkText,
};
