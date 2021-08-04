import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => ({
  root: css({
    margin: 0,
    fontFamily: tokens.fontStackPrimary,
    color: tokens.gray500,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightDefault,
    textRendering: 'optimizeLegibility',
  }),
});
