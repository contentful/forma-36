import React from 'react';
import { cx } from 'emotion';
import { getNavbarTopbarItemStyles } from './NavbarTopbarItem.styles';
import type {
  CommonProps,
  ExpandProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';

const NAVBAR_BADGE_DEFAULT_TAG = 'button';

type NavbarTopbarItemOwnProps = CommonProps & {
  children?: React.ReactNode;
};

export type NavbarTopbarItemProps<
  E extends React.ElementType = typeof NAVBAR_BADGE_DEFAULT_TAG,
> = PolymorphicProps<NavbarTopbarItemOwnProps, E>;

function _NavbarTopbarItem<
  E extends React.ElementType = typeof NAVBAR_BADGE_DEFAULT_TAG,
>(props: NavbarTopbarItemProps<E>, ref: React.Ref<any>) {
  const {
    as: Comp = NAVBAR_BADGE_DEFAULT_TAG,
    children,
    className,
    testId = 'cf-ui-navbar-topbar-item',
    ...otherProps
  } = props;
  const styles = getNavbarTopbarItemStyles();

  return (
    <Comp
      {...otherProps}
      ref={ref}
      className={cx(styles.root, className)}
      data-test-id={testId}
    >
      {children}
    </Comp>
  );
}

export const NavbarTopbarItem: PolymorphicComponent<
  ExpandProps<NavbarTopbarItemOwnProps>,
  typeof NAVBAR_BADGE_DEFAULT_TAG
> = React.forwardRef(_NavbarTopbarItem);
