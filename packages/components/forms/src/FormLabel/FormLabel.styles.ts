import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export function getFormLabelStyles() {
  return {
    root: css({
      display: 'inline-block',
      color: tokens.gray900,
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightMedium,
      lineHeight: tokens.lineHeightDefault,
      marginBottom: `calc(1rem * (8 / ${tokens.fontBaseDefault}))`,
    }),
    indicator: css({
      color: tokens.gray500,
      fontWeight: tokens.fontWeightNormal,
      marginLeft: `calc(1rem * (4 / ${tokens.fontBaseDefault}))`,
    }),
  };
}
