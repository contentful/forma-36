import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type AvatarProps } from './Avatar';
import { type Variant } from './types';
import {
  applyMuted,
  avatarColorMap,
  getColorWidth,
  getInnerRadius,
  getOuterRadius,
  getTotalBorderWidth,
  parseSize,
  toPixels,
  type ColorVariant,
} from './utils';

export const getColorVariantStyles = (
  variant: Variant,
  colorVariant: ColorVariant,
  size: number,
) => {
  const colorToken: string = avatarColorMap[colorVariant];

  const colorWidth = getColorWidth(colorVariant);
  const totalBorderWidth = getTotalBorderWidth(variant, colorVariant, size);

  return {
    boxShadow: [
      `0px 0px 0px ${colorWidth}px ${colorToken} inset`,
      `0px 0px 0px ${totalBorderWidth}px ${tokens.colorWhite} inset`,
    ].join(', '),
  };
};

const getInitialsFontSize = (size: number) => Math.round(size / 2);

export const getAvatarStyles = ({
  size: sizeOption,
  variant,
  colorVariant,
}: {
  size: AvatarProps['size'];
  variant: Variant;
  colorVariant: ColorVariant;
}) => {
  const borderRadius = getOuterRadius(variant);
  const innerBorderRadius = getInnerRadius(variant);

  const size = parseSize(sizeOption);
  const totalBorderWidth = getTotalBorderWidth(variant, colorVariant, size);

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
      fontSize: toPixels(getInitialsFontSize(size)),
    }),
    image: css({
      borderRadius: innerBorderRadius,
      display: 'block',

      // loading skeleton
      '& + svg': {
        borderRadius: innerBorderRadius,
        rect: { rx: 0, ry: 0 }, // has a default 4px border radius
      },
    }),
    root: css({
      borderRadius,
      height: size,
      width: size,
      overflow: 'hidden',
      position: 'relative',
      padding: totalBorderWidth,

      // color variant border
      '&::after': {
        borderRadius,
        bottom: 0,
        content: '""',
        display: 'block',
        left: 0,
        position: 'absolute',
        top: 0,
        right: 0,
        ...getColorVariantStyles(variant, colorVariant, size),
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
