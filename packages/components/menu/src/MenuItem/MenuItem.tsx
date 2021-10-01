import React, { useEffect, useRef } from 'react';
import { cx } from 'emotion';
import {
  CommonProps,
  mergeRefs,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { useMenuContext } from '../MenuContext';
import { useId } from '@contentful/f36-core';
import { getMenuItemStyles } from './MenuItem.styles';

const DEFAULT_TAG = 'button';

interface MenuItemInternalProps extends CommonProps {
  children?: React.ReactNode;
  as?: 'a' | 'button';

  /**
   * Sets focus on item
   */
  isInitiallyFocused?: boolean;
}

export type MenuItemProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<MenuItemInternalProps, E>;

function _MenuItem<E extends React.ElementType = typeof DEFAULT_TAG>(
  props: MenuItemProps<E>,
  ref: React.Ref<any>,
) {
  const { testId, className, as, isInitiallyFocused, ...otherProps } = props;

  const id = useId(null, 'menu-item');
  const itemTestId = testId || `cf-ui-${id}`;
  const styles = getMenuItemStyles();

  const { getMenuItemProps, focusMenuItem } = useMenuContext();

  const itemRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (isInitiallyFocused && itemRef.current) {
      focusMenuItem(itemRef.current);
    }
  }, [isInitiallyFocused, focusMenuItem]);

  const Element: React.ElementType = as ?? DEFAULT_TAG;

  return (
    <Element
      role="menuitem"
      {...otherProps}
      {...getMenuItemProps(otherProps)}
      className={cx(styles.root, className)}
      data-test-id={itemTestId}
      ref={mergeRefs(itemRef, ref)}
      tabIndex={-1}
    >
      {props.children}
    </Element>
  );
}

export const MenuItem: PolymorphicComponent<
  MenuItemInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_MenuItem);
