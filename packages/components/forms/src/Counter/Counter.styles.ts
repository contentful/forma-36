import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export function getCounterStyles() {
  return {
    root: css({
      flexShrink: 0,
      paddingLeft: tokens.spacingM,
      textAlign: 'right',
    }),
  };
}
