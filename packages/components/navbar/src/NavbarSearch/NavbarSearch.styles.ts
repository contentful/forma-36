import { css } from 'emotion';
import { getGlowOnFocusStyles } from '../utils.styles';
import tokens from '@contentful/f36-tokens';

export const getNavbarSearchStyles = () => ({
  navbarSearch: css(
    {
      // default button reset styles
      padding: tokens.spacing2Xs,
      svg: {
        fill: tokens.gray700,
      },
    },
    getGlowOnFocusStyles(),
  ),
});
