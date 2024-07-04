import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';

import { getGlowOnFocusStyles, increaseHitArea, mqs } from '../utils.styles';

export const getNavbarSwitcherStyles = () => ({
  navbarSwitcherWrapper: css({
    containerName: 'switcherWrapper',
    containerType: 'size',
    justifyContent: 'flex-end',
    width: '100%',
  }),
  navbarSwitcher: css(
    {
      color: tokens.gray600,
      flexShrink: 1,
      fontWeight: tokens.fontWeightMedium,
      maxWidth: '100%',
      minHeight: 'unset',
      padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
      '&:hover': {
        backgroundColor: hexToRGBA(tokens.gray900, 0.05),
      },
      backgroundColor: 'blue',
      '@container switcherWrapper (min-width: 370px)': {
        backgroundColor: 'deeppink',
      },
    },
    getGlowOnFocusStyles(),
    increaseHitArea(),
  ),

  switcherSpaceName: css({
    // Set min-width only when there are three span children
    '&:has(> span:last-child:nth-child(3))': {
      minWidth: '12ch',
    },
  }),

  switcherSpaceNameTruncation: css({
    flexShrink: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
});
