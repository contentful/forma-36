import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type AvatarProps } from './Avatar';
import {
  APP_BORDER_RADIUS,
  applyMuted,
  avatarColorMap,
  getColorWidth,
  getTotalBorderWidth,
  parseSize,
  type ColorVariant,
} from './utils';

export const getColorVariantStyles = (colorVariant: ColorVariant) => {
  const colorToken: string = avatarColorMap[colorVariant];

  return {
    boxShadow: [
      `0px 0px 0px ${getColorWidth(colorVariant)}px ${colorToken} inset`,
      `0px 0px 0px ${getTotalBorderWidth(colorVariant)}px ${
        tokens.colorWhite
      } inset`,
    ].join(', '),
  };
};

const getInitialsFontSize = (sizePixels: string) =>
  Math.round(Number(sizePixels.replace('px', '')) / 2);

export const getAvatarStyles = ({
  size,
  variant,
  colorVariant,
}: {
  size: AvatarProps['size'];
  variant: AvatarProps['variant'];
  colorVariant: ColorVariant;
}) => {
  const borderRadius = variant === 'app' ? APP_BORDER_RADIUS : '100%';
  const innerBorderRadius =
    variant === 'app'
      ? APP_BORDER_RADIUS - getTotalBorderWidth(colorVariant)
      : '100%';

  const isMuted = colorVariant === 'muted';

  return {
    fallback: css({
      backgroundColor: isMuted ? applyMuted(tokens.gray300) : tokens.gray300,
      color: isMuted ? applyMuted(tokens.gray700) : tokens.gray700,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontStretch: 'semi-condensed',
      fontSize: `${getInitialsFontSize(size)}px`,
    }),
    image: css({
      borderRadius: innerBorderRadius,
      display: 'block',
    }),
    root: css({
      borderRadius,
      height: parseSize(size),
      width: parseSize(size),
      overflow: 'hidden',
      position: 'relative',
      padding: getTotalBorderWidth(colorVariant),

      // image loading skeleton
      svg: {
        borderRadius: innerBorderRadius,
        rect: { rx: 0, ry: 0 }, // has a default 4px border radius
      },

      // color variant border
      '&::after': {
        borderRadius: borderRadius,
        bottom: 0,
        content: '""',
        display: 'block',
        left: 0,
        position: 'absolute',
        top: 0,
        right: 0,
        ...getColorVariantStyles(colorVariant),
      },
    }),
    imageContainer: css(
      {
        backgroundColor: tokens.colorWhite,
        overflow: 'visible',
        zIndex: 1,
      },
      colorVariant === 'muted' && {
        img: {
          opacity: 0.5,
        },
      },
    ),
    overlayIcon: css({
      svg: {
        backgroundColor: tokens.colorWhite,
        borderRadius: '100%',
        position: 'absolute',
        bottom: 0,
        right: '-10%',
        width: '40%',
        height: '40%',
        zIndex: 1,
      },
    }),
  };
};
