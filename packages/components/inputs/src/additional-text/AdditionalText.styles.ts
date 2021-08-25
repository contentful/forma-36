import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const baseText = {
  fontSize: tokens.fontSizeM,
  lineHeight: tokens.lineHeightM,
  display: 'flex',
};

export default () => ({
  validation: css({
    ...baseText,
    color: tokens.red600,
  }),
  helpText: css({
    ...baseText,
    color: tokens.gray500,
  }),
});
