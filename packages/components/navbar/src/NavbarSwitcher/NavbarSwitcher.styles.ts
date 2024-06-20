import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';

import { getGlowOnFocusStyles } from '../utils.styles';

export const getNavbarSwitcherStyles = () => ({
  navbarSwitcher: css(
    {
      background: 'none',
      border: 'none',
      margin: 0,
      outline: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
      cursor: 'pointer',
      borderRadius: tokens.borderRadiusMedium,
      lineHeight: tokens.lineHeightS,
      '&:hover': {
        backgroundColor: hexToRGBA(tokens.gray900, 0.05),
      },
    },
    getGlowOnFocusStyles(),
  ),

  switcherBreadcrumbs: css({
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    gap: tokens.spacing2Xs,
  }),
});
