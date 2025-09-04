import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getTableHeadStyles = () => ({
  root: css({
    color: tokens.gray600,
  }),
  sticky: css({
    th: {
      position: 'sticky',
      top: 0,
      zIndex: tokens.zIndexDefault,
    },
  }),
});
