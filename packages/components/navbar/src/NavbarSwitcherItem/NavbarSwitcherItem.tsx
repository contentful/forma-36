import React from 'react';
import { cx } from 'emotion';
import { getNavbarSwitcherItemStyles } from './NavbarSwitcherItem.styles';
import { NavbarEnvVariant } from './NavbarEnvVariant';
import {
  Flex,
  type CommonProps,
  type ExpandProps,
  type PropsWithHTMLElement,
} from '@contentful/f36-core';

type NavbarSwitcherItemOwnProps = CommonProps & {
  children?: React.ReactNode;
  isCircle?: boolean;
  envVariant?: 'master' | 'non-master';
  isAlias?: boolean;
};

export type NavbarSwitcherItemProps = PropsWithHTMLElement<
  NavbarSwitcherItemOwnProps,
  'li'
>;

function _NavbarSwitcherItem(
  props: ExpandProps<NavbarSwitcherItemProps>,
  ref: React.Ref<HTMLLIElement>,
) {
  const {
    children,
    isCircle,
    className,
    envVariant,
    isAlias,
    testId = 'cf-ui-navbar-switcher-item',
    ...otherProps
  } = props;
  const styles = getNavbarSwitcherItemStyles();
  const classes = cx(styles.breadcrumbsItem, className, {
    [styles.breadcrumbsItemCircle]: isCircle,
    [styles.breadcrumbsItemEnvMaster]: envVariant === 'master',
    [styles.breadcrumbsItemEnvNonMaster]: envVariant === 'non-master',
  });

  return (
    <li {...otherProps} ref={ref} className={classes} data-test-id={testId}>
      <Flex fullHeight justifyContent="center" alignItems="center">
        {envVariant && <NavbarEnvVariant isAlias={isAlias} />}
        <span>{children}</span>
      </Flex>
    </li>
  );
}

export const NavbarSwitcherItem = React.forwardRef(_NavbarSwitcherItem);
