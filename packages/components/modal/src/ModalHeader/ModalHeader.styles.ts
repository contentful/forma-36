import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export function getModalHeaderStyles() {
  return {
    root: css({
      padding: `${tokens.spacingM} ${tokens.spacingM} ${tokens.spacingM} ${tokens.spacingL}`,
      borderRadius: `${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0`,
      borderBottom: `1px solid ${tokens.gray300}`,
    }),
    heading: css({
      flexGrow: 1,
    }),
  };
}
