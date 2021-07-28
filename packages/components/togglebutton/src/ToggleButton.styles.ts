import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const getToggleButtonStyle = ({
  isActive,
  isDisabled,
}: {
  isActive: boolean;
  isDisabled: boolean;
}) => {
  const activeStyle = {
    background: tokens.blue100,
    borderColor: tokens.blue600,
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
    '&:focus': {
      boxShadow: tokens.glowPrimary,
    },
    '&:active': activeStyle,
  };

  if (isActive) {
    return {
      ...baseStyle,
      ...activeStyle,
    };
  }

  return baseStyle;
};

export default ({ isActive, isDisabled }) => ({
  toggleButton: css(getToggleButtonStyle({ isActive, isDisabled })),
});
