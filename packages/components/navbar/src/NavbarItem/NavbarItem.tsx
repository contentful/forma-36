import React from 'react';
import { cx } from 'emotion';
import { getNavbarItemStyles } from './NavbarItem.styles';
import { NavbarMenu, type NavbarMenuProps } from '../NavbarMenu/NavbarMenu';
import {
  NavbarItemIcon,
  type NavbarItemIconProps,
} from '../NavbarItemIcon/NavbarItemIcon';
import { CaretIcon } from '../icons';
import type {
  CommonProps,
  ExpandProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';

const NAVBAR_ITEM_DEFAULT_TAG = 'button';

type NavbarItemTriggerProps = CommonProps & {
  label?: string;
  title?: string;
  icon?: NavbarItemIconProps['icon'];
  isActive?: boolean;
  as?: React.ElementType;
};

type NavbarItemAsMenuProps = NavbarItemTriggerProps &
  Pick<NavbarMenuProps, 'onOpen' | 'onClose'> & {
    children: React.ReactNode;
  };
type NavbarItemAsItemProps = NavbarItemTriggerProps & {
  children?: never;
  onOpen?: never;
  onClose?: never;
};
type NavbarItemOwnProps = NavbarItemAsItemProps | NavbarItemAsMenuProps;

export type NavbarItemProps<
  E extends React.ElementType = typeof NAVBAR_ITEM_DEFAULT_TAG,
> = PolymorphicProps<NavbarItemOwnProps, E>;

function _NavbarItem(
  props: NavbarItemProps<React.ElementType>,
  ref: React.Ref<any>,
) {
  const {
    as: Comp = NAVBAR_ITEM_DEFAULT_TAG,
    icon,
    label,
    title,
    children,
    className,
    isActive,
    testId = 'cf-ui-navbar-item',
    onOpen,
    onClose,
    ...otherProps
  } = props;
  const styles = getNavbarItemStyles({ hasTitle: !!title });
  const isMenuTrigger = isNavbarItemHasMenu(props);
  const showCaret = title && isMenuTrigger;
  const item = (
    <Comp
      {...otherProps}
      ref={ref}
      data-test-id={testId}
      className={cx(styles.navbarItem, className, {
        [styles.navbarItemMenuTrigger]: showCaret,
        [styles.isActive]: isActive,
      })}
      aria-label={title ? '' : label}
    >
      {icon && (
        <NavbarItemIcon
          className={styles.icon}
          icon={icon}
          isActive={isActive}
        />
      )}
      {title && <span>{title}</span>}
      {showCaret && <CaretIcon size="tiny" isActive={isActive} />}
    </Comp>
  );

  if (isMenuTrigger) {
    return (
      <NavbarMenu
        trigger={item}
        testId={testId}
        onOpen={onOpen}
        onClose={onClose}
      >
        {children}
      </NavbarMenu>
    );
  }

  return item;
}

const isNavbarItemHasMenu = <E extends React.ElementType>(
  props: NavbarItemProps<E>,
): props is PolymorphicProps<NavbarItemAsMenuProps, E> =>
  Boolean(props.children);

export const NavbarItem: PolymorphicComponent<
  ExpandProps<NavbarItemOwnProps>,
  typeof NAVBAR_ITEM_DEFAULT_TAG
> = React.forwardRef(_NavbarItem);
