import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { ButtonSize, ButtonVariant, ButtonStylesProps } from './types';

const variantActiveStyles = (variant: ButtonVariant): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        ', &:hover': {
          backgroundColor: tokens.blue700,
          borderColor: tokens.blue700,
        },
      };
    case 'secondary':
      return {
        ', &:hover': {
          backgroundColor: tokens.gray200,
        },
      };
    case 'positive':
      return {
        ', &:hover': {
          backgroundColor: tokens.green700,
          borderColor: tokens.green700,
        },
      };
    case 'negative':
      return {
        ', &:hover': {
          backgroundColor: tokens.red800,
          borderColor: tokens.red800,
        },
      };
    case 'transparent':
      return {
        ', &:hover': {
          backgroundColor: tokens.gray100,
          borderColor: tokens.gray100,
        },
      };
    default:
      return {};
  }
};

const variantToStyles = (variant: ButtonVariant): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.blue500,
        borderColor: tokens.blue500,
        '&:hover': {
          backgroundColor: tokens.blue600,
          borderColor: tokens.blue600,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          borderColor: tokens.blue600,
          boxShadow: tokens.glowPrimary,
        },
      };
    case 'secondary':
      return {
        color: tokens.gray900,
        backgroundColor: tokens.colorWhite,
        borderColor: tokens.gray300,
        '&:hover': {
          backgroundColor: tokens.gray100,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          boxShadow: tokens.glowMuted,
        },
      };
    case 'positive':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorPositive,
        borderColor: tokens.colorPositive,
        '&:hover': {
          backgroundColor: tokens.green600,
          borderColor: tokens.green600,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          borderColor: tokens.green600,
          boxShadow: tokens.glowPositive,
        },
      };
    case 'negative':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.red600,
        borderColor: tokens.red600,
        '&:hover': {
          backgroundColor: tokens.red700,
          borderColor: tokens.red700,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          borderColor: tokens.red700,
          boxShadow: tokens.glowNegative,
        },
      };
    case 'transparent':
      return {
        color: tokens.gray800,
        background: `none`,
        borderColor: `transparent`,
        boxShadow: `none`,
        '&:hover': {
          backgroundColor: tokens.gray100,
          color: tokens.gray900,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          backgroundColor: 'none',
          boxShadow: tokens.glowMuted,
        },
      };
    default:
      return {};
  }
};

const sizeToStyles = (size: ButtonSize): CSSObject => {
  switch (size) {
    case 'small':
      return {
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightCondensed,
        padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
        minHeight: `32px`,
      };
    case 'medium':
      return {
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightCondensed,
        padding: `${tokens.spacingXs} ${tokens.spacingM}`,
        minHeight: `40px`,
      };
    case 'large':
      return {
        fontSize: tokens.fontSizeXl,
        lineHeight: tokens.lineHeightXl,
        padding: `${tokens.spacingXs} ${tokens.spacingM}`,
        minHeight: `48px`,
      };
    default:
      return {};
  }
};

export const styles = {
  button: ({
    variant,
    size,
    isActive,
    isDisabled,
    isFullWidth,
  }: ButtonStylesProps) =>
    css({
      boxSizing: 'border-box',
      border: `1px solid`,
      boxShadow: '0px 1px 0px rgb(25, 37, 50, 0.08)',
      borderRadius: tokens.borderRadiusMedium,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      display: isFullWidth ? 'flex' : 'inline-flex',
      minWidth: isFullWidth ? '100%' : 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: tokens.fontWeightMedium,
      outline: 'none',
      textDecoration: 'none',
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      ...variantToStyles(variant),
      ...sizeToStyles(size),
      ...(isActive ? variantActiveStyles(variant) : {}),
    }),
  buttonText: css({
    display: 'inline-block',
  }),
  buttonIcon: css({
    fill: 'currentColor',
  }),
  dropdownIcon: css({
    marginLeft: tokens.spacingXs,
    fill: 'currentColor',
  }),
};
