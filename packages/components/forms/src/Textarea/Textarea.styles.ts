import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    root: css({
      padding: `10px ${tokens.spacingS}`,
    }),
    error: css({
      '&:focus': {
        borderColor: tokens.red600,
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
