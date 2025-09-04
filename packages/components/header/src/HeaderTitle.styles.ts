import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getHeaderTitleStyles = ({ variant, withBackButton }) => ({
  title: css({
    margin: 0,
    padding:
      variant === 'breadcrumb' || withBackButton
        ? `${tokens.spacing2Xs}  ${tokens.spacingXs}`
        : 0,
  }),
  noWrap: css({
    textWrap: 'nowrap',
  }),
});
