import React from 'react';
import { cx } from 'emotion';
import { getNavbarAccountStyles } from './NavbarAccount.styles';
import {
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
        <Button
          {...otherProps}
          variant="transparent"
          size="small"
          ref={ref}
          className={cx(styles.navbarAccount, className)}
          testId={testId}
        >
          <Avatar
            src={avatar}
            initials={initials}
            size="small"
            variant="user"
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
