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

  stackableRow: (hasColumnTitles: boolean, stackableBreakpoint: string) =>
    css({
      [`@container (width <= ${stackableBreakpoint})`]: {
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
          padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
        },
        'td:first-child': {
          gridColumn: '1 / 3',
          borderTopLeftRadius: tokens.borderRadiusMedium,
          borderTopRightRadius: tokens.borderRadiusMedium,
          fontWeight: tokens.fontWeightDemiBold,
          paddingTop: tokens.spacingS,
        },
        'td:last-child': {
          paddingBottom: tokens.spacingS,
        },
      },
      'td:first-child': {
        borderTopLeftRadius: tokens.borderRadiusMedium,
      },
      'td:last-child': {
        borderTopRightRadius: tokens.borderRadiusMedium,
      },
    }),

  stackableTitle: (stackableBreakpoint: string) =>
    css({
      [`@container(width <=${stackableBreakpoint})`]: {
        '&': {
          color: tokens.gray600,
          fontSize: tokens.fontSizeS,
          display: 'block',
        },
      },
      [`@container (${stackableBreakpoint}< width)`]: {
        '&': {
          display: 'none',
        },
      },
    }),
});
