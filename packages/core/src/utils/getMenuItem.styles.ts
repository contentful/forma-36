import { css, cx } from '@emotion/css';

import tokens from '@contentful/f36-tokens';

const activeStyle = {
  backgroundColor: tokens.gray200,
  '&:hover, &:active': {
    backgroundColor: tokens.gray200,
  },
};

const disabledStyle = {
  opacity: 0.5,
  cursor: 'auto',
  '&:hover': {
    backgroundColor: 'unset',
  },
};

export const getMenuItemStyles = ({
  isActive = false,
  isDisabled = false,
}: {
  isActive?: boolean;
  isDisabled?: boolean;
}) =>
  cx(
    css({
      alignItems: 'center',
      display: 'flex',
      background: 'none',
      borderWidth: '1px 0',
      borderColor: 'transparent',
      borderRadius: tokens.borderRadiusSmall,
      borderStyle: 'solid',
      outline: 'none',
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightM,
      fontWeight: tokens.fontWeightNormal,
      position: 'relative',
      textAlign: 'left',
      // Magic number to get a height of 32px on the item
      padding: `5px ${tokens.spacingXs}`,
      wordBreak: 'break-word',
      whiteSpace: 'break-spaces',
      cursor: 'pointer',
      hyphens: 'auto',
      minWidth: '150px',
      textDecoration: 'none',
      color: tokens.gray700,

      '&:focus, &:hover': {
        backgroundColor: tokens.gray100,
      },
      '&:focus': {
        boxShadow: `inset ${tokens.glowPrimary}`,
      },
      '&:focus:not(:focus-visible)': {
        boxShadow: 'unset',
      },
      '&:focus-visible': {
        boxShadow: `inset ${tokens.glowPrimary}`,
      },
      '&:active': {
        color: tokens.gray700,
        backgroundColor: tokens.gray200,
      },
      '&:disabled': disabledStyle,
    }),
    isActive && css(activeStyle),
    isDisabled && css(disabledStyle),
  );
