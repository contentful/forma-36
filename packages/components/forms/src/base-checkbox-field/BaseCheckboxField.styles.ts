import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = ({ isDisabled }) => ({
  wrapper: css({
    alignItems: 'flex-start',
  }),
  input: css({
    marginRight: tokens.spacingXs,
    marginTop: tokens.spacing2Xs,
  }),
  label: css({
    color: isDisabled ? tokens.gray500 : tokens.gray900,
  }),
});
