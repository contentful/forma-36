import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export function getModalControlsStyles() {
  return {
    root: css({
      width: '100%',
      padding: `0 ${tokens.spacingL} ${tokens.spacingL} ${tokens.spacingL}`,
    }),
  };
}
