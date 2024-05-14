import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { LayoutContextType } from './LayoutContext';
import type { LayoutProps } from './Layout';

export const getLayoutHeaderMaxWidthStyles = (
  variant: LayoutProps['variant'],
) => {
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

export const getLayoutHeaderStyles = (
  variant: LayoutContextType['variant'],
) => ({
  root: css({
    borderBottom: `1px solid ${tokens.gray200}`,
    padding: `0 ${tokens.spacingL}`,
    width: '100%',
    justifyContent: 'center',
  }),
  maxWidthContainer: getLayoutHeaderMaxWidthStyles(variant),
});
