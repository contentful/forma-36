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

  stackable: (hasColumnTitles: boolean) =>
    css({
      '@container (width <= 700px)': {
        '&': {
          ...(hasColumnTitles
            ? {
                display: 'grid',
                gridColumn: '1 / 3',
                gridTemplateColumns: 'subgrid',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
              }),
        },
        td: {
          maxWidth: 'unset !important',
          width: '100% !important',
          borderBottom: 'none',
        },
        'td:nth-child(2n)': {
          color: tokens.gray600,
          fontSize: tokens.fontSizeS,
        },
        'td:first-child': {
          gridColumn: '1 / 3',
        },
        '&:not(:first-child) td:first-child': {
          borderTop: `1px solid ${tokens.gray200}`,
        },
      },
    }),
});
