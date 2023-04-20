import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { getGlowOnFocusStyles, mqs } from '../utils.styles';

export const getNavbarHelpStyles = () => ({
  root: css(
    {
      // default button reset styles
      margin: 0,
      padding: 0,
      background: 'none',
      border: 'none',

      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      color: tokens.gray300,
      fontSize: 0,
      gap: 0,
      minWidth: tokens.spacingL,
      transition: `color ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,
      outline: 'none',
      borderRadius: tokens.borderRadiusMedium,

      [mqs.medium]: {
        fontSize: tokens.fontSizeS,
        gap: tokens.spacing2Xs,
        fontWeight: tokens.fontWeightMedium,
        marginRight: tokens.spacingXs,
      },
      '&:hover, &:hover svg': {
        color: tokens.gray100,
        fill: tokens.gray100,
      },
      '& svg': {
        fill: tokens.gray300,
        transition: `fill ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,
      },
    },
    getGlowOnFocusStyles(),
  ),
});
