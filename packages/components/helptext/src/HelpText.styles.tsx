import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => ({
  root: css({
    fontFamily: tokens.fontStackPrimary,
    color: tokens.gray500,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightDefault,
    textRendering: 'optimizeLegibility',
  }),
});
