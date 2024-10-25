import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getHeaderTitleStyles = () => ({
  title: css({
    margin: `${tokens.spacing2Xs} 0`,
    '&:not(:first-child)': {
      marginLeft: tokens.spacingXs,
    },
  }),
  noWrap: css({
    textWrap: 'nowrap',
    marginLeft: tokens.spacingXs,
  }),
});
