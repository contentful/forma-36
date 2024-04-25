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
import { Button } from '@contentful/f36-button/src';

type NavbarAccountOwnProps = CommonProps & {
  children: React.ReactNode;
  username: string;
  avatar: string;
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
    username,
    hasNotification,
    notificationVariant = 'warning',
    ...otherProps
  } = props;
  const styles = getNavbarAccountStyles();

  return (
    <NavbarMenu
      trigger={
        <Button
          {...otherProps}
          variant="transparent"
          size="small"
          ref={ref}
          className={cx(styles.navbarAccount, className)}
          testId={testId}
        >
          <img
            src={avatar}
            alt={`Avatar for user ${username}`}
            className={styles.avatar}
          />
          {hasNotification ? (
            <span className={styles.notificationIcon(notificationVariant)} />
          ) : null}
        </Button>
      }
    >
      {children}
    </NavbarMenu>
  );
}

export const NavbarAccount = React.forwardRef(_NavbarAccount);
