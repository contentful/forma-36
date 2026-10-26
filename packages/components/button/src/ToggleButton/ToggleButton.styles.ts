import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { GetStyleArguments } from './types';

const getToggleButtonStyle = ({
  isActive,
  isDisabled,
  size,
  variant,
}: GetStyleArguments) => {
  const isTransparent = variant === 'transparent';
  const activeBorderColor = isTransparent ? 'transparent' : tokens.blue600;

  const activeStyle = {
    background: tokens.blue100,
    borderColor: activeBorderColor,
    '&': {
      zIndex: tokens.zIndexDefault + 1,
    },
    '&:hover': {
      background: tokens.blue100,
    },
  };

  const baseStyle = {
    ...(size === 'tiny'
      ? {
          height: tokens.spacingL,
          padding: `0 ${tokens.spacingXs}`,
        }
      : {}),
    ...(isTransparent && !isDisabled
      ? {
          '&:hover': {
            background: tokens.gray100,
          },
        }
      : {}),
    '& > span:first-child:not(:last-child)': {
      marginRight: size === 'medium' ? tokens.spacingXs : tokens.spacing2Xs,
    },
    '&:focus': {
      boxShadow: tokens.glowPrimary,
    },
    '&:focus-visible:not([disabled])': {
      zIndex: tokens.zIndexDefault + 2,
    },
    '&:active, &:active:hover': isDisabled
      ? {
          background: isTransparent ? 'none' : tokens.colorWhite,
          borderColor: isTransparent ? 'transparent' : tokens.gray300,
        }
      : {
          background: tokens.blue100,
          borderColor: activeBorderColor,
        },
  };

  if (isActive) {
    return {
      ...baseStyle,
      ...activeStyle,
    };
  }

  return baseStyle;
};

export default ({
  isActive,
  isDisabled,
  size,
  variant,
}: GetStyleArguments) => ({
  toggleButton: css(
    getToggleButtonStyle({ isActive, isDisabled, size, variant }),
  ),
});
