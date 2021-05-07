import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  helpText: css({
    margin: 0,
    fontFamily: tokens.fontStackPrimary,
    color: tokens.colorTextLight,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightDefault,
    textRendering: 'optimizeLegibility',
  }),
};
