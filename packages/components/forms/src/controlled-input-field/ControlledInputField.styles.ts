import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  rootOrLabelDisabled: css({
    opacity: 0.7,
    cursor: 'not-allowed',
  }),
  input: css({
    marginRight: tokens.spacingXs,
    marginTop: tokens.spacing2Xs,
  }),
  label: css({
    fontWeight: tokens.fontWeightMedium,
    marginBottom: 0,
  }),
  labelLight: css({
    fontWeight: tokens.fontWeightNormal,
  }),
};
