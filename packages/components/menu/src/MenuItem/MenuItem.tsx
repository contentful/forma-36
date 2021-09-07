import React from 'react';
import { cx } from 'emotion';
import {
  CommonProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { useMenuContext } from '../MenuContext';
import { TextLink } from '@contentful/f36-text-link';
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
  const id = useId(null, 'menu-item');
  const testId = props.testId || `cf-ui-${id}`;
  const styles = getMenuItemStyles();

  const { getMenuItemProps } = useMenuContext();

  let Element: React.ElementType = props.as ?? DEFAULT_TAG;

  if (Element === 'a') {
    Element = TextLink;
  }

  return (
    <Element
      {...getMenuItemProps(props)}
      className={cx(styles.root, props.className)}
      data-test-id={testId}
      ref={ref}
      role="menuitem"
      tabIndex={-1}
      as={undefined}
    >
      {props.children}
    </Element>
  );
}

export const MenuItem: PolymorphicComponent<
  MenuItemInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_MenuItem);
