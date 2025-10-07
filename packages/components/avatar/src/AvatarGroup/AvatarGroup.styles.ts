import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { type AvatarProps } from '../Avatar/';
import { parseSize, toPixels } from '../Avatar/utils';

export const getAvatarGroupStyles = (size: AvatarProps['size']) => {
  return {
    groupSpaced: css({
      gap: tokens.spacing2Xs,
    }),
    groupStacked: css({
      gap: 0,
      '> :not(:first-child)': {
        marginLeft: `-${tokens.spacing2Xs}`,
      },
    }),
    avatarStacked: css({
      position: 'relative',
      boxShadow: `0px 0px 0px 1px ${tokens.colorWhite}`,
    }),
    moreAvatarsBtn: css({
      cursor: 'pointer',
      backgroundColor: tokens.colorWhite,
      color: tokens.gray600,
      fontSize: tokens.fontSizeS,
      border: 'none',
      boxShadow: `0px 0px 0px 1px ${tokens.gray200} inset`,
      borderRadius: '99999999em',
      height: toPixels(parseSize(size)),
      width: toPixels(parseSize(size)),
      overflow: 'hidden',
      zIndex: 0,
    }),
    moreAvatarsItem: css({
      cursor: 'default',
    }),
  };
};
