import { css } from 'emotion';
import { mqs } from '../utils.styles';

export const getNavbarMenuStyles = () => ({
  menuList: css({
    minWidth: 0,
    [mqs.xsmall]: {
      minWidth: '250px',
    },
  }),
});
