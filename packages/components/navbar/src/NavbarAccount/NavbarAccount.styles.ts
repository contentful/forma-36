import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { NavbarAccountProps } from './NavbarAccount';
import { getGlowOnFocusStyles } from '../utils.styles';

const notificationVarianColorMap: Record<
  NavbarAccountProps['notificationVariant'],
  string
> = {
  warning: tokens.colorWarning,
  negative: tokens.colorNegative,
  info: tokens.blue500,
};

export const getNavbarAccountStyles = () => ({
  root: css(
    {
      // default button reset styles
      margin: 0,
      padding: 0,
      background: 'none',
      border: 'none',

      cursor: 'pointer',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      gap: tokens.spacing2Xs,
      outline: 'none',
      borderRadius: '50%',
    },
    getGlowOnFocusStyles(),
  ),
  avatar: css({
    borderRadius: '50%',
    display: 'block',
    height: '24px',
    width: '24px',
  }),
  notificationIcon: (variant: NavbarAccountProps['notificationVariant']) =>
    css({
      position: 'absolute',
      top: 0,
      right: 0,
      height: tokens.spacingS,
      width: tokens.spacingS,
      borderRadius: '50%',
      border: `2px solid ${tokens.gray900}`,
      backgroundColor: notificationVarianColorMap[variant],
      transform: 'translate(30%, -30%)',
      zIndex: 1, // move above the avatar
    }),
});
