import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

type screens = 'medium' | 'large' | 'xlarge';
type mediaqueries = Record<screens, string>;
export const mqs: mediaqueries = {
  medium: '@media (min-width: 480px)',
  large: '@media (min-width: 768px)',
  xlarge: '@media (min-width: 1920px)',
};

export const getGlowOnFocusStyles = (
  shadow: string = tokens.glowPrimary,
): CSSObject => ({
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

export const increaseHitArea = (minSize = '44px'): CSSObject => ({
  overflow: 'initial',
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
