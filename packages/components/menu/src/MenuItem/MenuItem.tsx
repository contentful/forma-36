import React, { useEffect, useRef } from 'react';
import { cx } from 'emotion';
import {
  mergeRefs,
  useId,
  type CommonProps,
  type PolymorphicComponent,
  type PolymorphicProps,
  type ExpandProps,
} from '@contentful/f36-core';

import { useMenuContext } from '../MenuContext';
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

function _MenuItem<E extends React.ElementType = typeof MENU_ITEM_DEFAULT_TAG>(
  props: MenuItemProps<E>,
  ref: React.Ref<any>,
) {
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

  const id = useId(undefined, 'menu-item');
  const itemTestId = testId || `cf-ui-${id}`;
  const styles = getMenuItemStyles({ isActive, isDisabled });

  const { getMenuItemProps, focusMenuItem } = useMenuContext();

  const itemRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (isInitiallyFocused && itemRef.current) {
      focusMenuItem(itemRef.current);
    }
  }, [isInitiallyFocused, focusMenuItem]);

  const Element = (as ?? MENU_ITEM_DEFAULT_TAG) as React.ElementType;

  return (
    <Element
      role="menuitem"
      {...otherProps}
      {...getMenuItemProps(otherProps)}
      disabled={isDisabled ?? props.disabled}
      className={cx(styles, className)}
      data-test-id={itemTestId}
      ref={mergeRefs(itemRef, ref)}
      tabIndex={-1}
    >
      {icon}
      {props.children}
    </Element>
  );
}

_MenuItem.displayName = 'MenuItem';

export const MenuItem: PolymorphicComponent<
  ExpandProps<MenuItemInternalProps>,
  typeof MENU_ITEM_DEFAULT_TAG
> = React.forwardRef(_MenuItem);
