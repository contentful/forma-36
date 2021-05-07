import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  rootOrLabelDisabled: css({
    opacity: 0.7,
    cursor: 'not-allowed',
  }),
  // TODO: re-evaluate necessity of !important rules
  /** important are used to fix order issue in production build. delete once we move to css-in-js */
  input: css({
    marginRight: `${tokens.spacingXs} !important`,
    marginTop: `${tokens.spacing2Xs} !important`,
  }),
  label: css({
    marginBottom: 0,
  }),
  labelLight: css({
    fontWeight: tokens.fontWeightNormal,
  }),
};
