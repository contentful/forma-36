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
  stackableHidden: (breakpoint: string) =>
    css({
      [`@container (width <= ${breakpoint})`]: {
        '&': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          border: 0,
        },
      },
    }),
});
