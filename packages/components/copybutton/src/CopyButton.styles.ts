import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const sizeToStyles = ({ size }): CSSObject => {
  switch (size) {
    case 'small':
      return {
        height: `32px`,
        width: `32px`,
      };
    default:
      return {
        height: `40px`,
        width: `40px`,
      };
  }
};

export const getStyles = ({ size }) => ({
  wrapper: css({
    display: 'inline-block',
    position: 'relative',
    ...sizeToStyles({ size }),
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
  copyButtonDisabled: css({
    cursor: 'not-allowed',
    backgroundColor: tokens.gray100,

    '&:focus': {
      borderColor: tokens.gray300,
      boxShadow: 'none',
    },

    '&:active, &:active:hover': {
      borderColor: tokens.gray300,
      boxShadow: 'none',
    },
  }),
});
