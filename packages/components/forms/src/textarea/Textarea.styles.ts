import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    error: css({
      '&:focus': {
        borderColor: tokens.colorNegative,
        boxShadow: tokens.glowNegative,
      },
    }),
    disabled: css({
      '&:focus': {
        borderColor: tokens.gray300,
        boxShadow: 'none',
      },
    }),
  };
};
