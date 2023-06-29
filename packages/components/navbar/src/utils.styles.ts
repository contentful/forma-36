import tokens from '@contentful/f36-tokens';

type screens = 'medium' | 'large' | 'xlarge';
type mediaqueries = Record<screens, string>;
export const mqs: mediaqueries = {
  medium: '@media (min-width: 480px)',
  large: '@media (min-width: 768px)',
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
