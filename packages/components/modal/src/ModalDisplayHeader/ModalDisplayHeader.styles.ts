import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export function getModalHeaderStyles() {
  return {
    root: css({
      position: 'relative',
      paddingTop: tokens.spacingM,
      paddingLeft: tokens.spacingXs,
      paddingRight: tokens.spacingXs,
      borderRadius: `${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0`,
    }),
    illustration: css({
      display: 'flex',
    }),
    title: css({
      textAlign: 'center',
    }),
    buttonContainer: css({
      position: 'absolute',
      width: '32px',
      height: tokens.spacingL,
      right: tokens.spacingXs,
      top: '2px',
    }),
  };
}
