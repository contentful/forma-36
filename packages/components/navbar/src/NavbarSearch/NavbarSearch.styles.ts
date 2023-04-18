import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getNavbarSearchStyles = () => ({
  root: css({
    // default button reset styles
    margin: 0,
    padding: 0,
    background: 'none',
    border: 'none',

    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: tokens.spacingL,
    transition: `color ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,
    '& svg': {
      fill: tokens.gray300,
      transition: `fill ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,
    },
    '&:hover, & svg:hover': {
      color: tokens.gray100,
      fill: tokens.gray100,
    },
    '&:focus-visible': {
      boxShadow: tokens.glowPrimary,
      outline: 'none',
      borderRadius: tokens.borderRadiusMedium,
    },
  }),
});
