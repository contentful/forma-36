import React from 'react';
import { cx } from 'emotion';
import { getNavbarAccountStyles } from './NavbarAccount.styles';
import {
  Flex,
  type PropsWithHTMLElement,
  type CommonProps,
  type ExpandProps,
} from '@contentful/f36-core';
import { NavbarMenu } from '../NavbarMenu/NavbarMenu';
import { Avatar } from '@contentful/f36-avatar';

type NavbarAccountOwnProps = CommonProps & {
  children: React.ReactNode;
  username: string;
  avatar?: string;
  initials?: string;
  hasNotification?: boolean;
  /**
   * @default 'warning'
   */
  notificationVariant?: 'warning' | 'negative' | 'info';
};

export type NavbarAccountProps = PropsWithHTMLElement<
  NavbarAccountOwnProps,
  'button'
>;

function _NavbarAccount(
  props: ExpandProps<NavbarAccountProps>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    children,
    className,
    testId = 'cf-ui-navbar-account-trigger',
    avatar,
    initials,
    username,
    hasNotification,
    notificationVariant = 'warning',
    ...otherProps
  } = props;
  const styles = getNavbarAccountStyles();

  return (
    <NavbarMenu
      trigger={
        <Flex
          {...otherProps}
          as="button"
          ref={ref}
          className={cx(styles.root, className)}
          testId={testId}
        >
          {/* <img
            src={avatar}
            alt={`Avatar for user ${username}`}
            className={styles.avatar}
          /> */}
          <Avatar src={avatar} />
          {hasNotification ? (
            <span className={styles.notificationIcon(notificationVariant)} />
          ) : null}
        </Flex>
      }
    >
      {children}
    </NavbarMenu>
  );
}

export const NavbarAccount = React.forwardRef(_NavbarAccount);
