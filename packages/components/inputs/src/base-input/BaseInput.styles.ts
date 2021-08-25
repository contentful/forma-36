import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export type GetStyleArguments = {
  isDisabled: boolean;
  isInvalid: boolean;
};

const getInputStyles = ({ isDisabled, isInvalid }: GetStyleArguments) => {
  const invalidStyle = {
    borderColor: tokens.red600,

    '&:focus': {
      boxShadow: tokens.glowNegative,
    },

    '&:active, &:active:hover': {
      boxShadow: tokens.glowNegative,
    },
  };

  const disabledStyle = {
    cursor: 'not-allowed',
    background: tokens.gray100,

    '&:focus': {
      borderColor: tokens.gray300,
      boxShadow: 'none',
    },

    '&:active, &:active:hover': {
      borderColor: tokens.gray300,
      boxShadow: 'none',
    },
  };

  const baseStyle = {
    outline: 'none',
    boxShadow: tokens.insetBoxShadowDefault,
    boxSizing: 'border-box',
    backgroundColor: tokens.colorWhite,
    border: `1px solid ${tokens.gray300}`,
    borderRadius: tokens.borderRadiusMedium,
    maxHeight: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
    color: tokens.gray700,
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    padding: '10px 12px',
    margin: 0,

    '&::placeholder': {
      color: tokens.gray500,
    },

    '&:active, &:active:hover': {
      borderColor: tokens.blue600,
      boxShadow: tokens.glowPrimary,
    },

    '&:focus': {
      zIndex: tokens.zIndexDefault,
      borderColor: tokens.blue600,
      boxShadow: tokens.glowPrimary,
    },
  };

  if (isDisabled) {
    return {
      ...baseStyle,
      ...disabledStyle,
    };
  }

  if (isInvalid) {
    return {
      ...baseStyle,
      ...invalidStyle,
    };
  }

  return baseStyle;
};

export default ({ isDisabled, isInvalid }: GetStyleArguments) => ({
  input: css(getInputStyles({ isDisabled, isInvalid })),
});
