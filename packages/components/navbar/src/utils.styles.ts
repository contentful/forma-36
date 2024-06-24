import tokens from '@contentful/f36-tokens';

type screens = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type mediaqueries = Record<screens, string>;
export const mqs: mediaqueries = {
  xsmall: '@media (min-width: 576px)',
  small: '@media (min-width: 867px)',
  medium: '@media (min-width: 1024px)',
  large: '@media (min-width: 1200px)',
  xlarge: '@media (min-width: 1920px)',
};

export const getGlowOnFocusStyles = (shadow: string = tokens.glowPrimary) => ({
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
