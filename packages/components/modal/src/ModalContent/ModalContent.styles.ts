import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export function getModalContentStyles() {
  return {
    root: css({
      padding: `${tokens.spacingM} ${tokens.spacingL}`,
      color: tokens.gray700,
      fontSize: tokens.fontSizeM,
      fontFamily: tokens.fontStackPrimary,
      lineHeight: tokens.lineHeightDefault,
      overflowY: 'auto',
      overflowX: 'hidden',
    }),
  };
}
