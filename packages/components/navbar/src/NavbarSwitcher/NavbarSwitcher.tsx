import React, { ReactNode } from 'react';
import { getNavbarSwitcherStyles } from './NavbarSwitcher.styles';
import {
  Flex,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { MenuIcon } from '@contentful/f36-icons';
import { cx } from 'emotion';

type NavbarSwitcherOwnProps = CommonProps & {
  children?: ReactNode;
  logo?: ReactNode;
};

export type NavbarSwitcherProps = PropsWithHTMLElement<
  NavbarSwitcherOwnProps,
  'button'
>;

function _NavbarSwitcher(
  props: ExpandProps<NavbarSwitcherProps>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    children,
    className,
    logo,
    testId = 'cf-ui-navbar-switcher',
    ...otherProps
  } = props;
  const styles = getNavbarSwitcherStyles();

  return (
    <Flex
      {...otherProps}
      as="button"
      ref={ref}
      className={cx(styles.root, className)}
      testId={testId}
      alignItems="center"
      fullHeight
      gap="spacingXs"
    >
      {logo}
      <MenuIcon className={styles.menuIcon} size="small" variant="white" />
      <Flex as="ul" alignItems="center" className={styles.breadcrumbs}>
        {children}
      </Flex>
    </Flex>
  );
}

export const NavbarSwitcher = React.forwardRef(_NavbarSwitcher);
