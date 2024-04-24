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
import { IconButton } from '@contentful/f36-button/src';

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
      className={cx(styles.root, className)}
      testId={testId}
      alignItems="center"
      fullHeight
      gap="spacingXs"
    >
      {logo || <ContentfulLogoIcon />}
      <IconButton
        aria-label="Switch spaces"
        size="small"
        variant="transparent"
        icon={<MenuIcon size="medium" />}
      />
      <Flex as="ul" alignItems="center" className={styles.breadcrumbs}>
        {children}
      </Flex>
    </Flex>
  );
}

export const NavbarSwitcher = React.forwardRef(_NavbarSwitcher);
