import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type AvatarProps } from './Avatar';
import { applyMuted, avatarColorMap, type ColorVariant } from './utils';

export const getColorVariantStyles = (colorVariant: ColorVariant) => {
  const colorToken: string = avatarColorMap[colorVariant];

  const colorWidth = ['muted', 'gray'].includes(colorVariant) ? 1 : 2;

  return {
    boxShadow: [
      `0px 0px 0px ${colorWidth}px ${colorToken} inset`,
      `0px 0px 0px ${colorWidth + 1}px ${tokens.colorWhite} inset`,
    ].join(', '),
  };
};

export const convertSizeToPixels = (size: AvatarProps['size']) =>
  ({
    tiny: '20px',
    small: '24px',
    medium: '32px',
    large: '48px',
  }[size]);

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
  const borderRadius = variant === 'app' ? tokens.borderRadiusSmall : '100%';
  const sizePixels = convertSizeToPixels(size);
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
      fontSize: `${getInitialsFontSize(sizePixels)}px`,
    }),
    image: css({
      borderRadius,
      display: 'block',
    }),
    root: css({
      borderRadius,
      height: sizePixels,
      overflow: 'hidden',
      position: 'relative',
      width: sizePixels,
      '&::after': {
        borderRadius,
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
