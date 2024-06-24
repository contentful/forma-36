import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getNavbarSubmenuStyles = () => ({
  navbarMenuItem: css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: tokens.spacingXs,
  }),
  menuList: css({
    minWidth: '250px',
  }),
});
