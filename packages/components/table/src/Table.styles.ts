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
  }),
});
