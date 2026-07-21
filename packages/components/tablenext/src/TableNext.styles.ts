import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getTableStyles = ({
  isHeaderSticky = false,
  isFirstColumnSticky = false,
}: {
  isHeaderSticky: boolean;
  isFirstColumnSticky: boolean;
}) => ({
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
  scrollableWrapper: css({
    overflowX: 'auto',
    ...(isHeaderSticky && {
      height: '100%',
    }),
  }),
  stackableWrapper: css({
    width: '100%',
    containerType: 'inline-size',
  }),
  scrollable: css({
    ...(isFirstColumnSticky && {
      'td:first-child, th:first-child': {
        position: 'sticky',
        zIndex: 2,
        left: 0,
      },
      'th:first-child': {
        zIndex: 5,
      },
    }),
  }),
});
