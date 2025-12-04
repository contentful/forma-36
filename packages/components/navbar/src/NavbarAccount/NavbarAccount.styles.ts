import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { NavbarAccountProps } from './NavbarAccount';
import { getGlowOnFocusStyles, increaseHitArea } from '../utils.styles';

const notificationVarianColorMap: Record<
  NavbarAccountProps['notificationVariant'],
  string
> = {
  warning: tokens.colorWarning,
  negative: tokens.colorNegative,
  info: tokens.blue500,
};

export const getNavbarAccountStyles = () => ({
  navbarAccount: css(
    {
      cursor: 'pointer',
      background: 'none',
      position: 'relative',
      outline: 'none',
      overflow: 'visible',
      borderRadius: '50%',
      border: 'none',
      padding: 0,
      '&:hover img': {
        filter: 'brightness(0.9)',
      },
    },
    getGlowOnFocusStyles(),
    increaseHitArea(),
  ),
  notificationIcon: (variant: NavbarAccountProps['notificationVariant']) =>
    css({
      position: 'absolute',
      top: 0,
      right: 0,
      height: tokens.spacingS,
      width: tokens.spacingS,
      borderRadius: '50%',
      border: `2px solid ${tokens.gray100}`,
      backgroundColor: notificationVarianColorMap[variant],
      transform: 'translate(30%, -30%)',
      zIndex: 1, // move above the avatar
    }),
});
