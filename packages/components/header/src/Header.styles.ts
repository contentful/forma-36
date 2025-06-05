import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { HEADER_HEIGHT } from './constants';
import type { HeaderProps } from './Header';

export const getHeaderStyles = ({
  hasFilters,
  variant,
}: {
  hasFilters?: boolean;
  variant: HeaderProps['variant'];
}) => ({
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
  root: css({
    borderBottom:
      variant === 'breadcrumb' ? `1px solid ${tokens.gray200}` : 'none',
    background: tokens.colorWhite,
    height: `${HEADER_HEIGHT}px`,
    marginTop: variant === 'title' ? tokens.spacingS : 0,
    // Reduce vertical padding when there's a filter in the header
    padding: hasFilters ? `${tokens.spacingXs} 0` : `${tokens.spacingS} 0`,
  }),
  separator: css({
    backgroundColor: tokens.gray200,
    height: '16px',
    margin: `0 ${tokens.spacingS} 0 ${tokens.spacingXs}`,
    transform: 'rotate3d(0, 0, 1, 18deg)',
    width: '1px',
  }),
});
