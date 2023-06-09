import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type AvatarProps, Variant } from './Avatar';

export const getAvatarStyles = ({
  isFallback,
  size,
  variant,
}: {
  isFallback: boolean;
  size: AvatarProps['size'];
  variant: AvatarProps['variant'];
}) => {
  const borderRadius =
    variant === Variant.App ? tokens.borderRadiusSmall : '99999999em';

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
        height: size,
        overflow: 'hidden',
        position: 'relative',
        width: size,
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
  };
};
