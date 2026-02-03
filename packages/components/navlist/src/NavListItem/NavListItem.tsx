import React from 'react';
import { cx } from '@emotion/css';
import {
  useId,
  type CommonProps,
  type PolymorphicComponent,
  type PolymorphicProps,
  type ExpandProps,
} from '@contentful/f36-core';

import { getNavListItemStyles } from './NavListItem.styles';

const NAV_LIST_ITEM_DEFAULT_TAG = 'a';

interface NavListItemInternalProps extends CommonProps {
  children?: React.ReactNode;
  /**
   * @default a
   */
  as?: React.ElementType;
  /**
   * Marks item as active
   */
  isActive?: boolean;
  /**
   * Marks item as disabled
   */
  isDisabled?: boolean;
}

export type NavListItemProps<
  E extends React.ElementType = typeof NAV_LIST_ITEM_DEFAULT_TAG,
> = PolymorphicProps<NavListItemInternalProps, E>;

function NavListItemBase<
  E extends React.ElementType = typeof NAV_LIST_ITEM_DEFAULT_TAG,
>(props: NavListItemProps<E>, ref: React.Ref<HTMLAnchorElement>) {
  const {
    testId,
    className,
    as,
    isActive = false,
    isDisabled = false,
    icon,
    onClick,
    ...otherProps
  } = props;

  const id = useId(undefined, 'nav-list-item');
  const itemTestId = testId || `cf-ui-${id}`;
  const styles = getNavListItemStyles({ isActive, isDisabled });

  const Element = (as ?? NAV_LIST_ITEM_DEFAULT_TAG) as React.ElementType;

  return (
    <Element
      {...otherProps}
      className={cx(styles.root, className)}
      onClick={
        isDisabled
          ? (e) => {
              e.preventDefault();
            }
          : onClick
      }
      ref={ref}
      data-test-id={itemTestId}
      tabIndex={isDisabled ? -1 : 0}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {props.children}
    </Element>
  );
}

NavListItemBase.displayName = 'NavListItem';

export const NavListItem = React.forwardRef(
  NavListItemBase,
) as PolymorphicComponent<
  ExpandProps<NavListItemInternalProps>,
  typeof NAV_LIST_ITEM_DEFAULT_TAG
>;
