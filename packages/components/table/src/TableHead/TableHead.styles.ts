import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getTableHeadStyles = () => ({
  sticky: css({
    th: {
      position: 'sticky',
      top: 0,
      zIndex: tokens.zIndexDefault,
    },
  }),
});
