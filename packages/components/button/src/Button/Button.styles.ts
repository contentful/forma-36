import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { ButtonSize, ButtonVariant, ButtonStylesProps } from '../types';
import type { Theme } from '@contentful/f36-core';

const variantActiveStyles = ({
  theme,
  variant,
}: {
  theme: Theme;
  variant: ButtonVariant;
}): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: theme.buttonPrimary.mainColorActive,
        borderColor: theme.buttonPrimary.mainColorActive,
      };
    case 'secondary':
      return { backgroundColor: theme.buttonSecondary.mainColorActive };
    case 'positive':
      return {
        backgroundColor: theme.buttonPositive.mainColorActive,
        borderColor: theme.buttonPositive.mainColorActive,
      };
    case 'negative':
      return {
        backgroundColor: theme.buttonNegative.mainColorActive,
        borderColor: theme.buttonNegative.mainColorActive,
      };
    case 'transparent':
      return {
        backgroundColor: theme.buttonTransparent.mainColorActive,
        borderColor: theme.buttonTransparent.mainColorActive,
      };
    default:
      return {};
  }
};

const variantToStyles = ({
  theme,
  variant,
}: {
  theme: Theme;
  variant: ButtonVariant;
}): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        color: theme.buttonPrimary.textColor,
        backgroundColor: theme.buttonPrimary.mainColor,
        borderColor: theme.buttonPrimary.mainColor,
        '&:hover': {
          backgroundColor: theme.buttonPrimary.mainColorStates,
          borderColor: theme.buttonPrimary.mainColorStates,
          color: theme.buttonPrimary.textColor,
        },
        '&:active': variantActiveStyles({ theme, variant }),
        '&:focus': {
          borderColor: theme.buttonPrimary.mainColorStates,
          boxShadow: theme.buttonPrimary.boxShadow,
        },
        '&:focus:not(:focus-visible)': {
          borderColor: theme.buttonPrimary.mainColor,
          boxShadow: 'unset',
        },
        '&:focus-visible': {
          borderColor: theme.buttonPrimary.mainColorStates,
          boxShadow: theme.buttonPrimary.boxShadow,
        },
      };
    case 'secondary':
      return {
        color: theme.buttonSecondary.textColor,
        backgroundColor: theme.buttonSecondary.mainColor,
        borderColor: theme.buttonSecondary.borderColor,
        '&:hover': {
          backgroundColor: theme.buttonSecondary.mainColorStates,
          color: theme.buttonSecondary.textColor,
        },
        '&:active': variantActiveStyles({ theme, variant }),
        '&:focus': {
          boxShadow: theme.buttonSecondary.boxShadow,
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'unset',
        },
        '&:focus-visible': {
          boxShadow: theme.buttonSecondary.boxShadow,
        },
      };
    case 'positive':
      return {
        color: theme.buttonPositive.textColor,
        backgroundColor: theme.buttonPositive.mainColor,
        borderColor: theme.buttonPositive.mainColor,
        '&:hover': {
          backgroundColor: theme.buttonPositive.mainColorStates,
          borderColor: theme.buttonPositive.mainColorStates,
          color: theme.buttonPositive.textColor,
        },
        '&:active': variantActiveStyles({ theme, variant }),
        '&:focus': {
          borderColor: theme.buttonPositive.mainColorStates,
          boxShadow: theme.buttonPositive.boxShadow,
        },
        '&:focus:not(:focus-visible)': {
          borderColor: theme.buttonPositive.mainColor,
          boxShadow: 'unset',
        },
        '&:focus-visible': {
          borderColor: theme.buttonPositive.mainColorStates,
          boxShadow: theme.buttonPositive.boxShadow,
        },
      };
    case 'negative':
      return {
        color: theme.buttonNegative.textColor,
        backgroundColor: theme.buttonNegative.mainColor,
        borderColor: theme.buttonNegative.mainColor,
        '&:hover': {
          backgroundColor: theme.buttonNegative.mainColorStates,
          borderColor: theme.buttonNegative.mainColorStates,
          color: theme.buttonNegative.textColor,
        },
        '&:active': variantActiveStyles({ theme, variant }),
        '&:focus': {
          borderColor: theme.buttonNegative.mainColorStates,
          boxShadow: theme.buttonNegative.boxShadow,
        },
        '&:focus:not(:focus-visible)': {
          borderColor: theme.buttonNegative.mainColor,
          boxShadow: 'unset',
        },
        '&:focus-visible': {
          borderColor: theme.buttonNegative.mainColorStates,
          boxShadow: theme.buttonNegative.boxShadow,
        },
      };
    case 'transparent':
      return {
        color: theme.buttonTransparent.textColor,
        background: 'none',
        borderColor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: theme.buttonTransparent.mainColorStates,
          color: theme.buttonTransparent.textColorActive,
        },
        '&:active': variantActiveStyles({ theme, variant }),
        '&:focus': {
          backgroundColor: 'transparent',
          boxShadow: theme.buttonTransparent.boxShadow,
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'unset',
        },
        '&:focus-visible': {
          boxShadow: theme.buttonTransparent.boxShadow,
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
        minHeight: '32px',
      };
    case 'medium':
      return {
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightCondensed,
        padding: `${tokens.spacingXs} ${tokens.spacingM}`,
        minHeight: '40px',
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

export const getStyles = ({ theme }: { theme: any }) => ({
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
      transition: `background ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault},
        opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
        border-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      ...variantToStyles({ theme, variant }),
      ...sizeToStyles(size),
      ...(isActive
        ? {
            transition: 'none',
            '&, &:hover': variantActiveStyles({ theme, variant }),
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
