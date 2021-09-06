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

      '&:focus, &:hover': {
        backgroundColor: tokens.gray100,
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
