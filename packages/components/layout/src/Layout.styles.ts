import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import type { LayoutProps } from './Layout';

export const getLayoutMaxWidthStyles = ({
  variant,
  withBoxShadow,
}: {
  variant: LayoutProps['variant'];
  withBoxShadow?: boolean;
}) => {
  if (variant === 'fullscreen') {
    return css({
      maxWidth: '100%',
    });
  }

  return css({
    maxWidth: '1920px',
    boxShadow: withBoxShadow
      ? '0px 6px 16px -2px rgba(25, 37, 50, 0.1), 0px 3px 6px -3px rgba(25, 37, 50, 0.15)'
      : 'unset',
    borderRadius: `10px 10px 0 0`,
    margin: `0 ${tokens.spacingM}`,
  });
};

export const getLayoutStyles = ({
  variant,
  withBoxShadow,
}: {
  variant: LayoutProps['variant'];
  withBoxShadow?: boolean;
}) => ({
  root: css({
    width: '100%',
    height: '100vh',
  }),
  mainContainer: css(getLayoutMaxWidthStyles({ variant, withBoxShadow }), {
    width: '100%',
    backgroundColor: tokens.colorWhite,
  }),
  contentContainer: css({
    width: '100%',
    minHeight: '200px',
  }),
});
