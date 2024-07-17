import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

import type { LayoutContextType } from './LayoutContext';

export const getLayoutBodyStyles = (variant: LayoutContextType['variant']) => ({
  root: css({
    width: '100%',
  }),
  mainContainer: css({
    maxWidth: variant === 'narrow' ? '900px' : '100%',
    flexGrow: 1,
    minWidth: 0,
    padding: `${tokens.spacingL} ${tokens.spacingL} 0`,
  }),
});
