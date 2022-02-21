import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = ({ size }) => {
  const buttonSize = size === 'small' ? '32px' : '40px';

  return {
    wrapper: css({
      display: 'inline-block',
      height: buttonSize,
      position: 'relative',
      width: buttonSize,
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
      '&:focus:not(:focus-visible)': {
        boxShadow: 'unset',
      },
      '&:focus-visible': {
        boxShadow: tokens.glowMuted,
      },
    }),
    copyButtonDisabled: css({
      cursor: 'not-allowed',
      backgroundColor: tokens.gray100,

      '&:hover': {
        cursor: 'not-allowed',
        backgroundColor: tokens.gray100,
      },

      '&:focus': {
        borderColor: tokens.gray300,
        boxShadow: 'none',
      },

      '&:active, &:active:hover': {
        borderColor: tokens.gray300,
        boxShadow: 'none',
      },
    }),
  };
};
