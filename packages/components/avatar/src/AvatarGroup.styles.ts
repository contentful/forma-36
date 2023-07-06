import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { convertSizeToPixels } from './Avatar.styles';

export const getAvatarGroupStyles = (size) => {
  return {
    avatarSpaced: css({
      margin: '0 2px',
    }),
    avatarStacked: css({
      margin: '0 -2px',
      position: 'relative',
      boxShadow: `0px 0px 0px 2px ${tokens.colorWhite}`,
      '&:first-child': {
        zIndex: 2,
      },
      ':nth-child(2)': {
        zIndex: 1,
      },
    }),
    moreAvatarsBtn: css({
      cursor: 'pointer',
      backgroundColor: tokens.colorWhite,
      border: 'none',
      boxShadow: `0px 0px 0px 1px ${tokens.gray200} inset`,
      borderRadius: '99999999em',
      height: convertSizeToPixels(size),
      width: convertSizeToPixels(size),
      overflow: 'hidden',
      zIndex: 0,
    }),
    moreAvatarsItem: css({
      cursor: 'default',
    }),
  };
};
