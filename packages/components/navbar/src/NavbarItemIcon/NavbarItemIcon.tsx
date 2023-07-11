import React from 'react';
import type { IconProps } from '@contentful/f36-icons';
import { getNavbarItemIconStyles } from './NavbarItemIcon.styles';
import { cx } from 'emotion';

export type NavbarItemIconProps = {
  icon: React.ReactElement<IconProps>;
} & Pick<IconProps, 'variant'>;

export const NavbarItemIcon = (props: NavbarItemIconProps) => {
  const { icon, variant } = props;
  const styles = getNavbarItemIconStyles();

  return React.cloneElement(icon, {
    className: cx(icon.props.className, styles.root),
    size: icon.props.size ?? 'tiny',
    variant: icon.props.variant ?? variant,
  });
};
