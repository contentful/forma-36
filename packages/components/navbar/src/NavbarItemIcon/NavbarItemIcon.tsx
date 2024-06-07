import React from 'react';
import type { IconProps } from '@contentful/f36-icons';
import { getNavbarItemIconStyles } from './NavbarItemIcon.styles';
import { cx } from 'emotion';

export type NavbarItemIconProps = {
  icon: React.ReactElement<IconProps>;
} & Pick<IconProps, 'isActive'>;

export const NavbarItemIcon = ({ icon, isActive }: NavbarItemIconProps) => {
  const { className, size, ...rest } = icon.props;
  const styles = getNavbarItemIconStyles();

  return React.cloneElement(icon, {
    className: cx(className, styles.navbarItemIcon),
    size: size || 'small',
    isActive,
    ...rest,
  });
};
