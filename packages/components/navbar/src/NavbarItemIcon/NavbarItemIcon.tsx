import React from 'react';
import type { IconProps } from '@contentful/f36-icons';
import { getNavbarItemIconStyles } from './NavbarItemIcon.styles';
import { cx } from 'emotion';

export type NavbarItemIconProps = {
  icon: React.ReactElement<IconProps>;
  className?: string;
} & Partial<Pick<IconProps, 'isActive'>>;

export const NavbarItemIcon = ({
  icon,
  isActive,
  className,
}: NavbarItemIconProps) => {
  const { className: iconClassName, size, ...rest } = icon.props;
  const styles = getNavbarItemIconStyles();

  return React.cloneElement(icon, {
    className: cx(iconClassName, styles.navbarItemIcon, className),
    size: size || 'small',
    isActive,
    ...rest,
  });
};
