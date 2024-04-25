import { css } from 'emotion';
import { getGlowOnFocusStyles } from '../utils.styles';
import tokens from '@contentful/f36-tokens';

export const getNavbarHelpStyles = () => ({
  navbarHelp: css(
    {
      // default button reset styles
      fontSize: tokens.fontSizeS,
      padding: tokens.spacing2Xs,
      color: tokens.gray700,
    },
    getGlowOnFocusStyles(),
  ),
});
