import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export function getFormLabelStyles() {
  return {
    root: css({
      display: 'inline-block',
      fontWeight: tokens.fontWeightMedium,
    }),
    indicator: css({
      color: tokens.gray500,
      fontWeight: tokens.fontWeightNormal,
      marginLeft: tokens.spacing2Xs,
    }),
  };
}
