import React from 'react';
import { getNavbarSwitcherStyles } from './NavbarSwitcher.styles';
import {
  Flex,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { cx } from 'emotion';

export type NavbarSwitcherProps = PropsWithHTMLElement<
  CommonProps,
  'button'
> & {
  children?: React.ReactNode;
};

function _NavbarSwitcher(
  props: ExpandProps<NavbarSwitcherProps>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    children,
    className,
    testId = 'cf-ui-navbar-switcher',
    ...otherProps
  } = props;
  const styles = getNavbarSwitcherStyles();

  return (
    <Flex
      {...otherProps}
      as="button"
      ref={ref}
      className={cx(styles.navbarSwitcher, className)}
      testId={testId}
      alignItems="center"
      fullHeight
      gap="spacingXs"
    >
      <Flex
        as="ul"
        gap="spacing2Xs"
        alignItems="center"
        className={styles.switcherBreadcrumbs}
      >
        {children}
      </Flex>
    </Flex>
  );
}

export const NavbarSwitcher = React.forwardRef(_NavbarSwitcher);
