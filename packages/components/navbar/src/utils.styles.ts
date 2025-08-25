import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

type screens = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type mediaqueries = Record<screens, string>;

export const mqs: mediaqueries = {
  xsmall: '@media (min-width: 576px)',
  small: '@media (min-width: 867px)',
  medium: '@media (min-width: 1024px)',
  large: '@media (min-width: 1200px)',
  xlarge: '@media (min-width: 1920px)',
};

export const getGlowOnFocusStyles = (shadow: string = tokens.glowPrimary) =>
  css({
    '&:focus': {
      boxShadow: shadow,
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'unset',
    },
    '&:focus-visible': {
      boxShadow: shadow,
    },
  });

export const increaseHitArea = (minSize = '44px') =>
  css({
    overflow: 'visible',
    position: 'relative',
    '&:after': {
      minHeight: minSize,
      minWidth: minSize,
      position: 'absolute',
      width: '100%',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
  });
