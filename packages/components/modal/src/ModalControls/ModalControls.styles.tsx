import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export function getModalControlStyles() {
  return {
    root: css({
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderBottomRightRadius: tokens.borderRadiusMedium,
      padding: `0 ${tokens.spacingL} ${tokens.spacingM} ${tokens.spacingL}`,
      width: `100%`,
      // This is required in places where it is not set globally (e.g. dialogs via the app framework)
      boxSizing: 'border-box',
    }),
  };
}
