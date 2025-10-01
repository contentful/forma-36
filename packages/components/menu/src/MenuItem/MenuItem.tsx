import React from 'react';
import { cx } from '@emotion/css';
import {
  useId,
  type CommonProps,
  type PolymorphicComponent,
  type PolymorphicProps,
  type ExpandProps,
} from '@contentful/f36-core';

import { useMergeRefs } from '@floating-ui/react';

import { useMenuItem } from './useMenuItem';
import { getMenuItemStyles } from './MenuItem.styles';

const MENU_ITEM_DEFAULT_TAG = 'button';

interface MenuItemInternalProps extends CommonProps {
  children?: React.ReactNode;
  as?: 'a' | 'button';

  /**
   * Marks item as active
   */
  isActive?: boolean;
  /**
   * Marks item as disabled
   */
  isDisabled?: boolean;
  /**
   * Sets focus on item
   */
  isInitiallyFocused?: boolean;
  /**
   * Expects any of the icon components. Renders the icon aligned to the start
   */
  icon?: React.ReactElement;
}

export type MenuItemProps<
  E extends React.ElementType = typeof MENU_ITEM_DEFAULT_TAG,
> = PolymorphicProps<MenuItemInternalProps, E>;

function MenuItemBase<
  E extends React.ElementType = typeof MENU_ITEM_DEFAULT_TAG,
>(props: MenuItemProps<E>, forwardedRef: React.Ref<any>) {
  const {
    testId,
    className,
    as,
    isActive = false,
    isDisabled,
    isInitiallyFocused,
    icon,
    ...otherProps
  } = props;
  const propDisabled = isDisabled ?? props.disabled;
  const menuItem = useMenuItem({
    isDisabled: propDisabled,
    label: props.children,
  });
  const id = useId(undefined, 'menu-item');
  const itemTestId = testId || `cf-ui-${id}`;
  const styles = getMenuItemStyles({ isActive, isDisabled });

  const Element = (as ?? MENU_ITEM_DEFAULT_TAG) as React.ElementType;

  return (
    <Element
      {...otherProps}
      ref={useMergeRefs([menuItem.item.ref, forwardedRef])}
      role="menuitem"
      className={cx(styles, className)}
      data-test-id={itemTestId}
      tabIndex={menuItem.isActive ? 0 : -1}
      disabled={propDisabled}
      {...menuItem.getItemProps(otherProps)}
    >
      {icon}
      {props.children}
    </Element>
  );
}

MenuItemBase.displayName = 'MenuItem';

export const MenuItem = React.forwardRef(MenuItemBase) as PolymorphicComponent<
  ExpandProps<MenuItemInternalProps>,
  typeof MENU_ITEM_DEFAULT_TAG
>;
