import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getTableStyles = () => ({
  inline: css({
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: `0 0 0 1px ${tokens.gray200}`,
    'th:first-child': {
      borderTopLeftRadius: tokens.borderRadiusMedium,
    },
    'th:last-child': {
      borderTopRightRadius: tokens.borderRadiusMedium,
    },
    'tr:last-child td:first-child': {
      borderBottomLeftRadius: tokens.borderRadiusMedium,
    },
    'tr:last-child td:last-child': {
      borderBottomRightRadius: tokens.borderRadiusMedium,
    },
  }),
  embedded: css({
    borderBottom: `1px solid ${tokens.gray200}`,
  }),
  root: css({
    width: '100%',
    '@container (width <= 700px)': {
      thead: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: 0,
      },
      'tbody tr': {
        display: 'flex',
        flexDirection: 'column',
        //     flexWrap: 'wrap',
      },
      'tbody td': {
        maxWidth: 'unset !important',
        width: '100% !important',
        borderBottom: 'none',
        paddingTop: 0,
      },
      'tbody td:nth-child(2n)': {
        color: tokens.gray600,
        fontSize: '12px',
        paddingBottom: 0,
      },
    },
    '@container (700px < width <= 1000px)': {
      thead: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: 0,
      },
      tbody: {
        display: 'grid',
        gridTemplateColumns: 'max-content 2fr',
      },
      'tbody tr': {
        display: 'grid',
        gridColumn: '1 / 3',
        gridTemplateColumns: 'subgrid',
      },
      'tbody tr td': {
        maxWidth: 'unset !important',
        width: '100% !important',
        borderBottom: 'none',
      },
      'tbody tr td:nth-child(2n)': {
        color: tokens.gray600,
        fontSize: '12px',
      },
      'tbody tr td:first-child': {
        gridColumn: '1 / 3',
      },
      'tbody tr:not(:first-child) td:first-child': {
        borderTop: '1px solid #EEE',
      },
    },
    '@container (1000px < width)': {
      'tr > :nth-child(2n)': {
        display: 'none',
      },
    },
  }),
});
