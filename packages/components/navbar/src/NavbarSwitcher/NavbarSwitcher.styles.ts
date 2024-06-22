import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';

import { getGlowOnFocusStyles } from '../utils.styles';

export const getNavbarSwitcherStyles = () => ({
  navbarSwitcher: css(
    {
      alignItems: 'center',
      appearance: 'none',
      background: 'none',
      border: 'none',
      borderRadius: tokens.borderRadiusMedium,
      cursor: 'pointer',
      display: 'flex',
      flexShrink: 1,
      lineHeight: tokens.lineHeightS,
      margin: 0,
      maxWidth: '100%',
      outline: 'none',
      padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: hexToRGBA(tokens.gray900, 0.05),
      },
    },
    getGlowOnFocusStyles(),
  ),

  switcherSpaceName: css({
    minWidth: '12ch',
  }),

  switcherSpaceNameTruncation: css({
    flexShrink: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
});
