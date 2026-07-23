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

  stackableRow: (hasColumnTitles: boolean) =>
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
          borderBottom: `1px solid ${tokens.gray200}`,
        },
        td: {
          maxWidth: 'unset !important',
          width: '100% !important',
          borderBottom: 'none',
        },
        'td:first-child': {
          gridColumn: '1 / 3',
          borderRadius: tokens.borderRadiusMedium,
          fontWeight: tokens.fontWeightDemiBold,
        },
      },
    }),

  stackableTitle: css({
    '@container(width <=700px)': {
      '&': {
        color: tokens.gray600,
        fontSize: tokens.fontSizeS,
        display: 'block',
      },
    },
    '@container (700px < width)': {
      '&': {
        display: 'none',
      },
    },
  }),
});
