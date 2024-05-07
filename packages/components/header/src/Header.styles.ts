import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getHeaderStyles = () => ({
  actions: css({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: '25%',
    textAlign: 'right',
  }),
  context: css({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: '25%',
  }),
  filters: css({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
  }),
  root: (hasFilters?: boolean) =>
    css({
      minHeight: '56px',
      backgroundColor: tokens.colorWhite,
      // Reduce vertical padding when there's a filter in the header
      padding: hasFilters ? `${tokens.spacingXs} 0` : `${tokens.spacingXs} 0`,
    }),
  separator: css({
    backgroundColor: tokens.gray200,
    height: '16px',
    margin: `0 ${tokens.spacingS} 0 ${tokens.spacingXs}`,
    transform: 'rotate3d(0, 0, 1, 18deg)',
    width: '1px',
  }),
  title: css({
    margin: `${tokens.spacing2Xs} 0`,
    '&:not(:first-child)': {
      marginLeft: tokens.spacingXs,
    },
  }),
  noWrap: css({
    textWrap: 'nowrap',
  }),
});
