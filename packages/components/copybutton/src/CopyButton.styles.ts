import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => ({
  wrapper: css({
    display: 'inline-block',
    height: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
    position: 'relative',
    width: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
  }),
  copyButton: css({
    alignItems: 'center',
    background: tokens.colorWhite,
    border: `1px solid ${tokens.gray300}`,
    display: 'inline-flex',
    height: '100%',
    justifyContent: 'center',
    outline: 'none',
    padding: 0,
    transition: `background ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
    width: '100%',
    '&:hover': {
      backgroundColor: tokens.gray100,
      cursor: 'pointer',
    },
    '&:active': {
      backgroundColor: tokens.gray200,
      cursor: 'pointer',
    },
    '&:focus': {
      boxShadow: tokens.glowMuted,
    },
  }),
});
