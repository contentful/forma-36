import { css } from 'emotion';
import { getGlowOnFocusStyles } from '../utils.styles';
import tokens from '@contentful/f36-tokens';

export const getNavbarSearchStyles = () => ({
  navbarSearch: css(
    {
      // default button reset styles
      minWidth: '24px',
      width: '24px',
      minHeight: '24px',
      height: '24px',
      svg: {
        fill: tokens.gray700,
      },
    },
    getGlowOnFocusStyles(),
  ),
});
