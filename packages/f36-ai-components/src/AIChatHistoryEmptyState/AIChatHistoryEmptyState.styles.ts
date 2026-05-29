import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';
export const getStyles = () => {
  return {
    description: css({
      color: tokens.gray700,
      textAlign: 'center',
      fontWeight: tokens.fontWeightNormal,
    }),
    title: css({
      color: tokens.gray700,
      textAlign: 'center',
      fontWeight: tokens.fontWeightMedium,
    }),
  };
};
