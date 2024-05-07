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

export const getLayoutStyles = (variant: LayoutProps['variant']) => ({
  root: css(getLayoutMaxWidthStyles(variant), {
    backgroundColor: tokens.colorWhite,
    boxShadow:
      '0px 6px 16px -2px rgba(25, 37, 50, 0.1), 0px 3px 6px -3px rgba(25, 37, 50, 0.15)',
    borderRadius: `${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0`,
  }),
  mainContainer: css({
    width: '100%',
    minHeight: '200px',
  }),
});
