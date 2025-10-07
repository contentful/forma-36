import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getCardActionsStyles = () => {
  return {
    root: css({
      minHeight: 'auto',
      padding: tokens.spacing2Xs,
    }),
  };
};
