import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => ({
  input: css({
    marginRight: tokens.spacingXs,
  }),
  label: css({
    margin: 0,
  }),
});
