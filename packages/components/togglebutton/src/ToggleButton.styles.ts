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
    background: tokens.colorBlueLightest,
    borderColor: tokens.colorBlueMid,
    '&:hover': {
      background: tokens.colorBlueLightest,
    },
  };

  const baseStyle = {
    background: tokens.colorWhite,
    '&:hover': {
      background: tokens.colorWhite,
      borderColor: isDisabled ? tokens.colorElementDark : tokens.colorBlueMid,
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
