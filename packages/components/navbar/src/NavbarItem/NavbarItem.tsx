import React from 'react';
import { cx } from '@emotion/css';
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
import { Tooltip } from '@contentful/f36-tooltip';

const NAVBAR_ITEM_DEFAULT_TAG = 'button';

type NavbarItemTriggerProps = CommonProps & {
  label?: string;
  title?: string;
  icon?: NavbarItemIconProps['icon'];
  isActive?: boolean;
  as?: React.ElementType;
  isDisabled?: boolean;
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

function NavbarItemBase(
  props: NavbarItemProps<React.ElementType>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    isDisabled,
    testId = 'cf-ui-navbar-item',
    onOpen,
    onClose,
    ...otherProps
  } = props;
  const styles = getNavbarItemStyles({ hasTitle: !!title });
  const isMenuTrigger = isNavbarItemHasMenu(props);
  const showCaret = title && isMenuTrigger;
  let item = (
    <Comp
      {...otherProps}
      ref={ref}
      data-test-id={testId}
      className={cx(styles.navbarItem, className, {
        [styles.isActive]: isActive && !isDisabled,
        [styles.isDisabled]: isDisabled,
      })}
      {...(!title && { 'aria-label': label })}
      {...(isDisabled &&
        (Comp === NAVBAR_ITEM_DEFAULT_TAG
          ? { disabled: true }
          : { tabIndex: -1, 'aria-disabled': true }))}
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

  if (!title) {
    item = (
      <div>
        <Tooltip content={label} placement="bottom" showDelay={600} usePortal>
          {item}
        </Tooltip>
      </div>
    );
  }

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

NavbarItemBase.displayName = 'NavbarItem';
export const NavbarItem = React.forwardRef(
  NavbarItemBase,
) as PolymorphicComponent<
  ExpandProps<NavbarItemOwnProps>,
  typeof NAVBAR_ITEM_DEFAULT_TAG
>;
