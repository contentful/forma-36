import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuItemStyles = () =>
  css({
    display: 'block',
    width: '100%',
    background: 'none',
    border: 0,
    outline: 'none',
    textDecoration: 'none',
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightCondensed,
    color: tokens.gray600,
    textAlign: 'left',
    padding: '6px 16px',

    '&:focus, &:hover': {
      backgroundColor: tokens.gray100,
    },
    '&:active': {
      backgroundColor: tokens.gray200,
    },
    '&:disabled': {
      opacity: 0.5,
    },
  });
