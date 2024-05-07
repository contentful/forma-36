import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getLayoutSidebarStyles = ({ sidebarSide }) => ({
  root: css({
    flexShrink: 0,
    padding: `${tokens.spacingL} ${tokens.spacingS} 0`,
    borderLeft:
      sidebarSide === 'right' ? `1px solid ${tokens.gray200}` : 'none',
    borderRight:
      sidebarSide === 'left' ? `1px solid ${tokens.gray200}` : 'none',
  }),
});
