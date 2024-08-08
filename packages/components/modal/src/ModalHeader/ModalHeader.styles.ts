import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export function getModalHeaderStyles() {
  return {
    root: css({
      position: 'relative',
      padding: `${tokens.spacingM} ${tokens.spacingM} ${tokens.spacingM} ${tokens.spacingL}`,
      borderRadius: `${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0`,
      borderBottom: `1px solid ${tokens.gray200}`,
    }),
    buttonContainer: css({
      position: 'relative',
      width: tokens.spacing2Xl,
      height: tokens.spacingL,
      button: {
        position: 'absolute',
        top: `calc(-1 * ${tokens.spacing2Xs})`,
        right: 0,
      },
    }),
  };
}
