import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getLayoutSidebarStyles = () => ({
  root: css({
    flexShrink: 0,
    '&:first-child': {
      borderRight: `1px solid ${tokens.gray200}`,
    },
    '&:last-child': {
      borderLeft: `1px solid ${tokens.gray200}`,
    },
  }),
});
