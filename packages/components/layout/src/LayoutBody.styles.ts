import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getLayoutBodyStyles = () => ({
  root: css({
    flexGrow: 1,
    minWidth: 0,
    padding: `${tokens.spacingL} ${tokens.spacingL} 0`,
  }),
});
