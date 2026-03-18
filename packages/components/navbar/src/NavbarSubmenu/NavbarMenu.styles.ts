import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';
import { mqs } from '../utils.styles';

export const getNavbarSubmenuStyles = () => ({
  navbarMenuItem: css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: tokens.spacingXs,
  }),
  menuList: css({
    minWidth: 0,
    marginLeft: '-24px',
    marginTop: '10px',
    [mqs.xsmall]: {
      minWidth: '250px',
      margin: 0,
    },
  }),
});
