import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type AvatarProps } from './Avatar';
import { avatarColorVariant, type ColorVariant } from './utils';

export const getColorVariantStyles = (colorVariant: ColorVariant) => {
  const colorToken = avatarColorVariant[colorVariant];

  return {
    boxShadow: `0px 0px 0px 2px  ${tokens[colorToken]} inset, 0px 0px 0px 3px  ${tokens.colorWhite} inset`,
  };
};

export const convertSizeToPixels = (size: AvatarProps['size']) =>
  ({
    tiny: '20px',
    small: '24px',
    medium: '32px',
    large: '48px',
  }[size]);

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
      height: '100%',
      width: '100%',
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
      '&::after': {
        ...getColorVariantStyles(colorVariant),
      },
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
    isInactive: css({
      opacity: 0.5,
    }),
  };
};
