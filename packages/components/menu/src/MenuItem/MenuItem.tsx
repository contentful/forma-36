import React from 'react';
import { cx } from 'emotion';
import {
  CommonProps,
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
}

export type MenuItemProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<MenuItemInternalProps, E>;

function _MenuItem<E extends React.ElementType = typeof DEFAULT_TAG>(
  props: MenuItemProps<E>,
  ref: React.Ref<any>,
) {
  const { testId, className, as, ...otherProps } = props;

  const id = useId(null, 'menu-item');
  const itemTestId = testId || `cf-ui-${id}`;
  const styles = getMenuItemStyles();

  const { getMenuItemProps } = useMenuContext();

  const Element: React.ElementType = as ?? DEFAULT_TAG;

  return (
    <Element
      role="menuitem"
      {...otherProps}
      {...getMenuItemProps(otherProps)}
      className={cx(styles.root, className)}
      data-test-id={itemTestId}
      ref={ref}
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
