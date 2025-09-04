import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import type { ButtonSize, ButtonVariant, ButtonStylesProps } from '../types';
import { hexToRGBA, type Density } from '@contentful/f36-utils';

const variantActiveStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return { backgroundColor: tokens.blue700 };
    case 'secondary':
      return { backgroundColor: tokens.gray200 };
    case 'positive':
      return { backgroundColor: tokens.green700 };
    case 'negative':
      return { backgroundColor: tokens.gray200 };
    case 'transparent':
      return { backgroundColor: hexToRGBA(tokens.gray900, 0.1) };
    default:
      return {};
  }
};

const variantToStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.blue500,
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: tokens.blue600,
          color: tokens.colorWhite,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus-visible': {
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
          color: tokens.gray900,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          boxShadow: tokens.glowPrimary,
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'unset',
        },
        '&:focus-visible': {
          boxShadow: tokens.glowPrimary,
        },
      };
    case 'positive':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.green500,
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: tokens.green600,
          color: tokens.colorWhite,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus-visible': {
          boxShadow: tokens.glowPositive,
        },
      };
    case 'negative':
      return {
        color: tokens.red600,
        backgroundColor: tokens.colorWhite,
        borderColor: tokens.gray300,
        '&:hover': {
          backgroundColor: tokens.gray100,
          color: tokens.red600,
        },
        '&:active': variantActiveStyles(variant),
        '&:focus-visible': {
          boxShadow: tokens.glowNegative,
        },
      };
    case 'transparent':
      return {
        color: tokens.gray900,
        background: 'none',
        borderColor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: hexToRGBA(tokens.gray900, 0.05),
        },
        '&:active': variantActiveStyles(variant),
        '&:focus': {
          boxShadow: tokens.glowPrimary,
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'unset',
        },
        '&:focus-visible': {
          boxShadow: tokens.glowPrimary,
        },
      };
    default:
      return {};
  }
};

const sizeToStyles = (size: ButtonSize, density: Density) => {
  const isHighDensity = density === 'high';

  switch (size) {
    case 'small':
      return {
        fontSize: isHighDensity ? tokens.fontSizeS : tokens.fontSizeM,
        lineHeight: tokens.lineHeightCondensed,
        padding: isHighDensity
          ? `${tokens.spacing2Xs} ${tokens.spacingXs}`
          : `${tokens.spacing2Xs} ${tokens.spacingS}`,
        minHeight: isHighDensity ? tokens.spacingL : tokens.spacingXl,
      };
    case 'medium':
      return {
        fontSize: isHighDensity ? tokens.fontSizeS : tokens.fontSizeM,
        lineHeight: tokens.lineHeightCondensed,
        padding: isHighDensity
          ? `${tokens.spacingXs} ${tokens.spacingS}`
          : `${tokens.spacingXs} ${tokens.spacingM}`,
        minHeight: isHighDensity ? tokens.spacingXl : '40px',
      };
    case 'large':
      return {
        fontSize: tokens.fontSizeXl,
        lineHeight: tokens.lineHeightXl,
        padding: `${tokens.spacingXs} ${tokens.spacingM}`,
        minHeight: '48px',
      };
    default:
      return {};
  }
};

const getButtonIconStyle = ({ hasChildren, variant }) => {
  const align = {
    '&:first-child': { marginRight: tokens.spacing2Xs },
    '&:last-child': { marginLeft: tokens.spacing2Xs },
  };

  const margin = hasChildren ? align : {};

  return css([
    margin,
    // we want to allow variants for icons, but only in the transparent IconButton
    variant !== 'transparent' &&
      hasChildren && {
        '& svg': {
          fill: 'currentColor',
        },
      },
  ]);
};

export const getStyles = () => ({
  button: ({
    variant,
    size,
    density,
    isActive,
    isDisabled,
    isFullWidth,
  }: ButtonStylesProps & { density: Density }) =>
    css({
      boxSizing: 'border-box',
      border: '1px solid',
      boxShadow: '0px 1px 0px rgb(25, 37, 50, 0.08)',
      borderRadius:
        density === 'high'
          ? tokens.borderRadiusSmall
          : tokens.borderRadiusMedium,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      fontFamily: tokens.fontStackPrimary,
      opacity: isDisabled ? 0.5 : 1,
      display: isFullWidth ? 'flex' : 'inline-flex',
      minWidth: isFullWidth ? '100%' : 'auto',
      maxWidth: isFullWidth ? '100%' : '240px',
      overflow: 'hidden',
      flexShrink: 0,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: tokens.fontWeightMedium,
      outline: 'none',
      textDecoration: 'none',
      margin: 0, // remove the default margin in Safari.
      transition: `background ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault},
        opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
        border-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      ...variantToStyles(variant),
      ...sizeToStyles(size, density),
      ...(isActive
        ? {
            transition: 'none',
            '&, &:focus': variantActiveStyles(variant),
          }
        : {}),
    }),
  buttonIcon: getButtonIconStyle,
  buttonContent: css({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
});
