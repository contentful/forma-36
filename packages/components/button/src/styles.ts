import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { ButtonSize, ButtonVariant, ButtonStylesProps } from './types';

const variantActiveStyles = (variant: ButtonVariant): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        ', &:hover': {
          backgroundColor: tokens.colorBlueDark,
          borderColor: tokens.colorBlueDark,
        },
      };
    case 'secondary':
      return {
        ', &:hover': {
          backgroundColor: tokens.colorElementLight,
        },
      };
    case 'positive':
      return {
        ', &:hover': {
          backgroundColor: tokens.colorGreenDark,
          borderColor: tokens.colorGreenDark,
        },
      };
    case 'negative':
      return {
        ', &:hover': {
          backgroundColor: tokens.colorRedDark,
          borderColor: tokens.colorRedDark,
        },
      };
    case 'transparent':
      return {
        ', &:hover': {
          background: `none`,
          borderColor: tokens.colorElementLight,
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
        backgroundColor: tokens.colorPrimary,
        borderColor: tokens.colorPrimary,
        '&:hover': {
          backgroundColor: tokens.colorBlueBase,
          borderColor: tokens.colorBlueBase,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          borderColor: tokens.colorBlueDark,
          boxShadow: tokens.glowPrimary,
        },
      };
    case 'secondary':
      return {
        color: tokens.colorTextBase,
        backgroundColor: tokens.colorWhite,
        borderColor: tokens.colorElementDark,
        '&:hover': {
          backgroundColor: tokens.colorElementLightest,
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
          backgroundColor: tokens.colorGreenBase,
          borderColor: tokens.colorGreenBase,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          borderColor: tokens.colorGreenDark,
          boxShadow: tokens.glowPositive,
        },
      };
    case 'negative':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorNegative,
        borderColor: tokens.colorNegative,
        '&:hover': {
          backgroundColor: tokens.colorRedBase,
          borderColor: tokens.colorRedBase,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          borderColor: tokens.colorRedDark,
          boxShadow: tokens.glowNegative,
        },
      };
    case 'transparent':
      return {
        color: tokens.colorTextBase,
        background: `none`,
        borderColor: `transparent`,
        boxShadow: `none`,
        '&:hover': {
          backgroundColor: tokens.colorElementLightest,
          color: tokens.colorTextDark,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          background: `none`,
          border: `1px solid ${tokens.colorElementLight}`,
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
