import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type AvatarProps } from './Avatar';
import { avatarColorMap, type ColorVariant } from './utils';

export const getColorVariantStyles = (
  colorVariant: Exclude<ColorVariant, 'muted'>,
) => {
  const colorToken: string = avatarColorMap[colorVariant];

  return {
    boxShadow: `0px 0px 0px 2px ${colorToken} inset, 0px 0px 0px 3px  ${tokens.colorWhite} inset`,
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
  isFallback,
  size,
  variant,
  colorVariant,
}: {
  isFallback: boolean;
  size: AvatarProps['size'];
  variant: AvatarProps['variant'];
  colorVariant?: ColorVariant;
}) => {
  const borderRadius =
    variant === 'app' ? tokens.borderRadiusSmall : '99999999em';

  const sizePixels = convertSizeToPixels(size);

  return {
    fallback: css({
      backgroundColor: tokens.gray200,
      color: 'rgba(0,0,0,0.5)',
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
    root: css([
      {
        borderRadius,
        height: sizePixels,
        overflow: 'hidden',
        position: 'relative',
        width: sizePixels,
      },
      !isFallback && {
        '&::after': {
          boxShadow: 'inset 0px 0px 0px 1px rgba(17, 27, 43, 0.1)',
          borderRadius,
          bottom: 0,
          content: '""',
          display: 'block',
          left: 0,
          position: 'absolute',
          top: 0,
          right: 0,
        },
      },
    ]),
    colorBorder: css({
      '&::after':
        !!colorVariant &&
        colorVariant !== 'muted' &&
        getColorVariantStyles(colorVariant),
    }),
    imageContainer: css({
      overflow: 'visible',
      zIndex: 1,
    }),
    overlayIcon: css({
      svg: {
        backgroundColor: tokens.colorWhite,
        borderRadius: '99999999em',
        position: 'absolute',
        bottom: 0,
        right: '-10%',
        width: '40%',
        height: '40%',
        zIndex: 1,
      },
    }),
    isMuted: css({
      backgroundColor: tokens.colorWhite,
      img: {
        opacity: 0.5,
      },
    }),
  };
};
