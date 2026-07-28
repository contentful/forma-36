import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getTableRowStyles = () => ({
  root: css({
    '&:last-child td': {
      borderBottom: 'none',
    },
    '&:hover td': {
      backgroundColor: tokens.gray100,
    },
  }),
  selected: css({
    'td, th': {
      backgroundColor: tokens.gray100,
    },
  }),
});
