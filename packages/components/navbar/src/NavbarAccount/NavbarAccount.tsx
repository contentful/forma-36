import React from 'react';
import { cx } from '@emotion/css';
import { getNavbarAccountStyles } from './NavbarAccount.styles';
import {
  type PropsWithHTMLElement,
  type CommonProps,
  type ExpandProps,
} from '@contentful/f36-core';
import { NavbarMenu } from '../NavbarMenu/NavbarMenu';
import { Flex } from '@contentful/f36-core';
import { Avatar } from '@contentful/f36-avatar';
import { Tooltip } from '@contentful/f36-tooltip';

type NavbarAccountOwnProps = CommonProps & {
  children: React.ReactNode;
  username: string;
  avatar?: string;
  initials?: string;
  hasNotification?: boolean;
  label?: string;
  /**
   * @default 'warning'
   */
  notificationVariant?: 'warning' | 'negative' | 'info';
};

export type NavbarAccountProps = PropsWithHTMLElement<
  NavbarAccountOwnProps,
  'button'
>;

function NavbarAccountBase(
  props: ExpandProps<NavbarAccountProps>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    children,
    className,
    testId = 'cf-ui-navbar-account-trigger',
    avatar,
    label = 'Account menu',
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
        <div>
          <Tooltip placement="bottom" content={label} showDelay={600} usePortal>
            <Flex
              as="button"
              {...otherProps}
              ref={ref}
              className={cx(styles.navbarAccount, className)}
              testId={testId}
              alignItems="center"
              aria-label={label}
            >
              <Avatar
                src={avatar}
                initials={initials}
                size="small"
                variant="user"
              />

              {hasNotification ? (
                <span
                  className={styles.notificationIcon(notificationVariant)}
                />
              ) : null}
            </Flex>
          </Tooltip>
        </div>
      }
    >
      {children}
    </NavbarMenu>
  );
}

NavbarAccountBase.displayName = 'NavbarAccount';
export const NavbarAccount = React.forwardRef(NavbarAccountBase);
