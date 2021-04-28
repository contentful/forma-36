import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { ButtonSize, ButtonVariant } from './types';

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
        '&:active': {
          backgroundColor: tokens.colorBlueDark,
          borderColor: tokens.colorBlueDark,
        },
        '&:focus': {
          borderColor: tokens.colorBlueDark,
          boxShadow: tokens.glowPrimary,
        },
      };
      break;
    case 'secondary':
      return {
        color: tokens.colorTextBase,
        backgroundColor: tokens.colorWhite,
        borderColor: tokens.colorElementDark,
        '&:hover': {
          backgroundColor: tokens.colorElementLightest,
        },
        '&:active': {
          backgroundColor: tokens.colorElementLight,
        },
        '&:focus': {
          boxShadow: tokens.glowMuted,
        },
      };
      break;
    case 'positive':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorPositive,
        borderColor: tokens.colorPositive,
        '&:hover': {
          backgroundColor: tokens.colorGreenBase,
          borderColor: tokens.colorGreenBase,
        },
        '&:active': {
          backgroundColor: tokens.colorGreenDark,
          borderColor: tokens.colorGreenDark,
        },
        '&:focus': {
          borderColor: tokens.colorGreenDark,
          boxShadow: tokens.glowPositive,
        },
      };
      break;
    case 'negative':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorNegative,
        borderColor: tokens.colorNegative,
        '&:hover': {
          backgroundColor: tokens.colorRedBase,
          borderColor: tokens.colorRedBase,
        },
        '&:active': {
          backgroundColor: tokens.colorRedDark,
          borderColor: tokens.colorRedDark,
        },
        '&:focus': {
          borderColor: tokens.colorRedDark,
          boxShadow: tokens.glowNegative,
        },
      };
      break;
    default:
      return {};
      break;
  }
};

const sizeToStyles = (size: ButtonSize): CSSObject => {
  switch (size) {
    case 'small':
      return {
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightCondensed,
        padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
      };
      break;
    case 'medium':
      return {
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightCondensed,
        padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      };
      break;
    case 'large':
      return {
        fontSize: tokens.fontSizeXl,
        lineHeight: tokens.lineHeightXl,
        padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      };
      break;
    default:
      return {};
      break;
  }
};

export const styles = {
  button: (variant: ButtonVariant, size: ButtonSize) =>
    css({
      border: `1px solid`,
      boxShadow: '0px 1px 0px rgb(25, 37, 50, 0.08)',
      borderRadius: tokens.borderRadiusMedium,
      cursor: 'pointer',
      display: 'inline-flex',
      fontWeight: tokens.fontWeightMedium,
      outline: 'none',
      ...variantToStyles(variant),
      ...sizeToStyles(size),
    }),
};
