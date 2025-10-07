import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getNavbarBadgeStyles = () => ({
  navbarBadge: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: `1px solid ${tokens.purple600}`,
    margin: 0,
    outline: 'none',
    fontSize: tokens.fontSizeS,
    lineHeight: tokens.lineHeightS,
    fontWeight: tokens.fontWeightMedium,
    textAlign: 'center',
    padding: `0 ${tokens.spacingXs}`,
    textDecoration: 'none',
    color: `${tokens.purple600}!important`,
    borderRadius: '1.75rem',
    userSelect: 'none',
  }),
});
