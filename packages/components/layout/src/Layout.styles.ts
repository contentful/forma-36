import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import type { LayoutProps } from './Layout';

export const getLayoutMaxWidthStyles = (variant: LayoutProps['variant']) => {
  if (variant === 'fullscreen') {
    return css({
      width: '100%',
      maxWidth: '100%',
    });
  }

  return css({
    width: '100%',
    maxWidth: '1524px',
  });
};
// replace this with a breakpoint

export const getLayoutStyles = (variant: LayoutProps['variant']) => ({
  root: css({
    width: '100%',
    backgroundColor: tokens.colorWhite,
    boxShadow: tokens.boxShadowHeavy,
    borderRadius: tokens.borderRadiusMedium,
  }),
  mainContainer: css(getLayoutMaxWidthStyles(variant), {
    minHeight: '200px',
  }),
});
