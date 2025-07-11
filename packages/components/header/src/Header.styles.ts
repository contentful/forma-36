import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { HEADER_HEIGHT } from './constants';

export const getHeaderStyles = ({
  hasFilters,
  variant,
}: {
  hasFilters?: boolean;
  variant: string;
}) => ({
  actions: css({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: '25%',
    justifyContent: 'flex-end',
    gap: tokens.spacingS,
  }),
  wrapper: css({
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
  root: css({
    background: tokens.colorWhite,
    height: `${HEADER_HEIGHT}px`,
    marginTop: variant === 'title' ? tokens.spacingS : 0,
    // Reduce vertical padding when there's a filter in the header
    padding: hasFilters ? `${tokens.spacingXs} 0` : `${tokens.spacingS} 0`,
  }),
});
