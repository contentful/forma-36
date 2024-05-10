import { css } from 'emotion';
import type { LayoutContextType } from './LayoutContext';

export const getLayoutBodyStyles = (variant: LayoutContextType['variant']) => ({
  root: css({
    width: '100%',
  }),
  mainContainer: css({
    maxWidth: variant === 'narrow' ? '720px' : '100%',
    flexGrow: 1,
    minWidth: 0,
  }),
});
