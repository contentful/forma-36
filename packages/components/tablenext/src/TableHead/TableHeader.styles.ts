import { css } from '@emotion/css';

export const getTableHeaderStyles = () => ({
  stackableHeader: css({
    '@container (width <= 700px)': {
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
