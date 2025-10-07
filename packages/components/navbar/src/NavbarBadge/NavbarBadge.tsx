import React from 'react';
import { cx } from '@emotion/css';
import { getNavbarBadgeStyles } from './NavbarBadge.styles';
import type {
  CommonProps,
  ExpandProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';

const NAVBAR_BADGE_DEFAULT_TAG = 'div';

type NavbarBadgeOwnProps = CommonProps & {
  children?: React.ReactNode;
  as?: React.ElementType;
};

export type NavbarBadgeProps<
  E extends React.ElementType = typeof NAVBAR_BADGE_DEFAULT_TAG,
> = PolymorphicProps<NavbarBadgeOwnProps, E>;

function NavbarBadgeBase(
  props: NavbarBadgeProps<React.ElementType>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>,
) {
  const {
    as: Comp = NAVBAR_BADGE_DEFAULT_TAG,
    children,
    className,
    testId = 'cf-ui-navbar-badge',
    ...otherProps
  } = props;
  const styles = getNavbarBadgeStyles();

  return (
    <Comp
      {...otherProps}
      ref={ref}
      className={cx(styles.navbarBadge, className)}
      data-test-id={testId}
    >
      {children}
    </Comp>
  );
}

NavbarBadgeBase.displayName = 'NavbarBadge';
export const NavbarBadge = React.forwardRef(
  NavbarBadgeBase,
) as PolymorphicComponent<
  ExpandProps<NavbarBadgeOwnProps>,
  typeof NAVBAR_BADGE_DEFAULT_TAG
>;
