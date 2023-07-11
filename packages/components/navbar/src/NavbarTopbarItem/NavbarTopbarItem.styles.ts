import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { getGlowOnFocusStyles } from '../utils.styles';

export const getNavbarTopbarItemStyles = () => ({
  root: css(
    {
      // default button reset styles
      margin: 0,
      background: 'none',
      border: 'none',

      cursor: 'pointer',
      display: 'flex',
      gap: tokens.spacing2Xs,
      alignItems: 'center',
      color: tokens.gray300,
      padding: `0 ${tokens.spacing2Xs}`,
      minHeight: tokens.spacingL,
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightMedium,
      outline: 'none',
      borderRadius: tokens.borderRadiusMedium,

      '&:hover': {
        color: tokens.gray100,
      },
      svg: {
        fill: 'currentColor',
      },
    },
    getGlowOnFocusStyles(),
  ),
});
