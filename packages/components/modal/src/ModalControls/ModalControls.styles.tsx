import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export function getModalControlStyles() {
  return {
    root: css({
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderBottomRightRadius: tokens.borderRadiusMedium,
      padding: `${tokens.spacingS} ${tokens.spacingM}`,
      width: `100%`,
    }),
  };
}
