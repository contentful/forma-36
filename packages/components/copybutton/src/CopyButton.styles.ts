import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = ({ size, theme }) => {
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
      background: theme.copyButton.mainColor,
      border: `1px solid ${theme.copyButton.borderColor}`,
      display: 'inline-flex',
      height: '100%',
      justifyContent: 'center',
      outline: 'none',
      padding: 0,
      transition: `background ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      width: '100%',
      '&:hover': {
        backgroundColor: theme.copyButton.mainColorHover,
        cursor: 'pointer',
      },
      '&:active': {
        backgroundColor: theme.copyButton.mainColorActive,
        cursor: 'pointer',
      },
      '&:focus': {
        boxShadow: theme.copyButton.boxShadow,
      },
      '&:focus:not(:focus-visible)': {
        boxShadow: 'unset',
      },
      '&:focus-visible': {
        boxShadow: theme.copyButton.boxShadow,
      },
    }),
    copyButtonDisabled: css({
      cursor: 'not-allowed',
      backgroundColor: theme.copyButton.mainColorHover,

      '&:hover': {
        cursor: 'not-allowed',
        backgroundColor: theme.copyButton.mainColorHover,
      },

      '&:focus': {
        borderColor: theme.copyButton.mainColorDisableActive,
        boxShadow: 'none',
      },

      '&:active, &:active:hover': {
        borderColor: theme.copyButton.mainColorDisableActive,
        boxShadow: 'none',
      },
    }),
  };
};
