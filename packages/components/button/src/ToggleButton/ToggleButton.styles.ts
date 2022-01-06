import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { GetStyleArguments } from './types';

const getToggleButtonStyle = ({ isActive, isDisabled }: GetStyleArguments) => {
  const activeStyle = {
    background: tokens.blue100,
    borderColor: tokens.blue600,
    '&': {
      zIndex: tokens.zIndexDefault + 1,
    },
    '&:hover': {
      background: tokens.blue100,
    },
  };

  const baseStyle = {
    background: tokens.colorWhite,
    '&:hover': {
      background: tokens.colorWhite,
      borderColor: isDisabled ? tokens.gray300 : tokens.blue600,
    },
    '&&:focus': {
      boxShadow: tokens.glowPrimary,
      zIndex: tokens.zIndexDefault + 2,
    },
    '&:active, &:active:hover': isDisabled
      ? {
          background: tokens.colorWhite,
          borderColor: tokens.gray300,
        }
      : {
          background: tokens.blue100,
          borderColor: tokens.blue600,
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

export default ({ isActive, isDisabled }: GetStyleArguments) => ({
  toggleButton: css(getToggleButtonStyle({ isActive, isDisabled })),
});
