import { css } from 'emotion';
import { getGlowOnFocusStyles } from '../utils.styles';
import tokens from '@contentful/f36-tokens';

export const getNavbarHelpStyles = () => ({
  navbarHelp: css(
    {
      // default button reset styles
      fontSize: tokens.fontSizeS,
      padding: `0 ${tokens.spacing2Xs}`,
      width: 'max-content',
      minHeight: '24px',
      height: '24px',
      color: tokens.gray700,
      svg: {
        fill: tokens.gray700,
      },
    },
    getGlowOnFocusStyles(),
  ),
});
