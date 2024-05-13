import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { NavbarAccountProps } from './NavbarAccount';
import { getGlowOnFocusStyles } from '../utils.styles';
import { hexToRGBA } from '@contentful/f36-utils';

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
      // default button reset styles
      margin: 0,
      padding: 0,
      border: 0,
      cursor: 'pointer',
      background: 'none',
      position: 'relative',
      outline: 'none',
      overflow: 'visible',
      borderRadius: '50%',
      '&:before': css({
        content: '""',
        display: 'block',
        position: 'absolute',
        height: '24px',
        width: '24px',
        backgroundColor: 'transparent',
        borderRadius: '50%',
      }),
      '&:hover:before': css({
        backgroundColor: hexToRGBA(tokens.gray300, 0.15),
      }),
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
      border: `2px solid ${tokens.gray100}`,
      backgroundColor: notificationVarianColorMap[variant],
      transform: 'translate(30%, -30%)',
    }),
});
