type screens = 'medium' | 'large' | 'xlarge';
type mediaqueries = Record<screens, string>;
export const mqs: mediaqueries = {
  medium: '@media (min-width: 480px)',
  large: '@media (min-width: 768px)',
  xlarge: '@media (min-width: 1920px)',
};
