import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getHeaderTitleStyles = (variant) => ({
  title: css({
    margin: variant === 'title' ? `${tokens.spacing2Xs} 0` : tokens.spacing2Xs,
    '&:not(:first-child)': {
      marginLeft: tokens.spacingXs,
    },
  }),
  noWrap: css({
    textWrap: 'nowrap',
  }),
});
