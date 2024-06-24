import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';

import { getGlowOnFocusStyles } from '../utils.styles';

export const getNavbarSwitcherStyles = () => ({
  navbarSwitcher: css(
    {
      flexShrink: 1,
      maxWidth: '100%',
      minHeight: 'unset',
      padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
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
