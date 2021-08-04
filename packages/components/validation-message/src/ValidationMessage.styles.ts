import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export function getStyles() {
  return {
    icon: css({
      marginRight: tokens.spacing2Xs,
      marginTop: `calc(${tokens.spacing2Xs} / 2)`,
      minHeight: '18px',
      minWidth: '18px',
    }),
    text: css({
      color: tokens.colorNegative,
    }),
  };
}
