import React from 'react';
import { getNavbarSwitcherStyles } from './NavbarSwitcher.styles';
import {
  Flex,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { MenuIcon } from '@contentful/f36-icons';
import { cx } from 'emotion';
import { ContentfulLogoIcon } from '../icons';

type NavbarSwitcherOwnProps = CommonProps & {
  children?: React.ReactNode;
  /**
   * Will be displayed instead of the default Contentful logo
   */
  logo?: React.ReactNode;
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
      className={cx(styles.navbarSwitcher, className)}
      testId={testId}
      alignItems="center"
      fullHeight
      gap="spacingXs"
    >
      {logo || <ContentfulLogoIcon />}
      <MenuIcon size="small" className={styles.switcherMenuIcon} />

      <Flex as="ul" alignItems="center" className={styles.switcherBreadcrumbs}>
        {children}
      </Flex>
    </Flex>
  );
}

export const NavbarSwitcher = React.forwardRef(_NavbarSwitcher);
