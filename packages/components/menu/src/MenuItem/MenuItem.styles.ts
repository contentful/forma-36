import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuItemStyles = () => {
  return {
    root: css({
      display: 'block',
      width: '100%',
      background: 'none',
      border: 0,
      margin: 0,
      outline: 'none',
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightM,
      fontWeight: tokens.fontWeightNormal,
      position: 'relative',
      textAlign: 'left',
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      wordBreak: 'break-word',
      whiteSpace: 'break-spaces',
      cursor: 'pointer',
      hyphens: 'auto',
      minWidth: '150px',
      textDecoration: 'none',
      color: tokens.gray800,

      '&:hover': {
        backgroundColor: tokens.gray100,
      },
      '&:focus': {
        boxShadow: `inset ${tokens.glowPrimary}`,
        // just to make boxShadow with rounded corners
        borderRadius: tokens.borderRadiusMedium,
      },
      '&:focus:not(:focus-visible)': {
        boxShadow: 'unset',
        borderRadius: 'unset',
      },
      '&:focus-visible': {
        boxShadow: `inset ${tokens.glowPrimary}`,
        borderRadius: tokens.borderRadiusMedium,
      },
      '&:active': {
        backgroundColor: tokens.gray200,
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'auto',
      },
    }),
  };
};
