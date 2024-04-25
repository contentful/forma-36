import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { getGlowOnFocusStyles } from '../utils.styles';
import { hexToRGBA } from '@contentful/f36-utils';
export const getNavbarTopbarItemStyles = () => ({
  navbarTopItem: css(
    {
      // default button reset styles
      margin: 0,
      background: 'none',
      border: '1px solid',
      borderColor: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      gap: tokens.spacing2Xs,
      alignItems: 'center',
      lineHeight: tokens.lineHeightDefault,
      color: tokens.gray700,
      padding: tokens.spacing2Xs,
      minHeight: '34px',
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightMedium,
      outline: 'none',
      borderRadius: tokens.borderRadiusMedium,

      '&:hover': {
        backgroundColor: hexToRGBA(tokens.gray900, 0.05),
      },
      svg: {
        fill: 'currentColor',
      },
    },
    getGlowOnFocusStyles(),
  ),
});
