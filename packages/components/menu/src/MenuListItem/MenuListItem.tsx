import React from 'react';
import { cx } from 'emotion';
import {
  CommonProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { useMenuContext } from '../MenuContext';
import { useId } from '@contentful/f36-core';
import { getMenuListItemStyles } from './MenuListItem.styles';

const DEFAULT_TAG = 'button';

interface MenuListItemInternalProps extends CommonProps {
  children?: React.ReactNode;
  as?: 'a' | 'button';
}

export type MenuListItemProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<MenuListItemInternalProps, E>;

function _MenuListItem<E extends React.ElementType = typeof DEFAULT_TAG>(
  props: MenuListItemProps<E>,
  ref: React.Ref<any>,
) {
  const id = useId(null, 'menu-list-item');
  const testId = props.testId || `cf-ui-${id}`;
  const styles = getMenuListItemStyles();

  const { getMenuListItemProps } = useMenuContext();

  const Element: React.ElementType = props.as ?? DEFAULT_TAG;
  return (
    <Element
      {...getMenuListItemProps(props)}
      className={cx(styles, props.className)}
      data-test-id={testId}
      ref={ref}
      role="menuitem"
      tabIndex={-1}
    >
      {props.children}
    </Element>
  );
}

export const MenuListItem: PolymorphicComponent<
  MenuListItemInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_MenuListItem);
