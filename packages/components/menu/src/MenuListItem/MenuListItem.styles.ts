import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuListItemStyles = () =>
  css({
    display: 'block',
    background: 'none',
    border: 0,
    outline: 'none',
    textDecoration: 'none',

    '&:focus': {
      borderColor: tokens.blue600,
      boxShadow: tokens.glowPrimary,
    },
  });
