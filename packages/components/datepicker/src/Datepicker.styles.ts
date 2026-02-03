import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    calendar: css({
      padding: tokens.spacingM,
    }),
  };
};
