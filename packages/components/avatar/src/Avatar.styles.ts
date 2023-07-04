import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type AvatarProps } from './Avatar';

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
    variant === 'app' ? tokens.borderRadiusSmall : '99999999em';

  const sizePixels = {
    tiny: '20px',
    small: '24px',
    medium: '32px',
    large: '48px',
  }[size];

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
    rootColorBorder: css({
      ':nth-child(6n+1)::after': {
        boxShadow: `0px 0px 0px 2px ${tokens.green400} inset`,
      },
      ':nth-child(6n+2)::after': {
        boxShadow: `0px 0px 0px 2px ${tokens.red400} inset`,
      },
      ':nth-child(6n+3)::after': {
        boxShadow: `0px 0px 0px 2px ${tokens.orange400} inset`,
      },
      ':nth-child(6n+4)::after': {
        boxShadow: `0px 0px 0px 2px ${tokens.yellow400} inset`,
      },
      ':nth-child(6n+5)::after': {
        boxShadow: `0px 0px 0px 2px ${tokens.purple400} inset`,
      },
      ':nth-child(6n+6)::after': {
        boxShadow: `0px 0px 0px 2px ${tokens.gray400} inset`,
      },
    }),
    isPrimaryAvatar: css({
      '&::after': {
        boxShadow: `0px 0px 0px 2px ${tokens.blue400} inset !important`,
      },
    }),
  };
};
