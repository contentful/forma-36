import { css } from 'emotion';
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
      backgroundColor: tokens.blue100,
    },
    'td:last-child': {
      boxShadow: `inset -2px 0 0 ${tokens.blue500}`,
    },
  }),
});
