import React from 'react';
import Image from 'next/image';
import { css, cx } from '@emotion/css';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import { List, Flex, Text, Badge } from '@contentful/f36-components';

import { useSession } from 'next-auth/react';
import { ComponentStatus } from '../types';

import caretDown from '../resources/icons/caret-down.svg';
import arrowSquareOut from '../resources/icons/arrow-square-out.svg';
import lockSimple from '../resources/icons/lock-simple.svg';

const styles = {
  link: css({
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacing2Xs,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    textDecoration: 'none',
    '&:hover > span:first-child': {
      textDecoration: 'underline',
    },
  }),
  badge: css({
    textDecoration: 'none',
  }),
};

const getSectionTitleStyles = (isActive = false, paddingLeft = 'spacingXl') => {
  return {
    sidebarItem: css({
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      paddingLeft: tokens[paddingLeft],
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightM,
    }),
    clickable: css({
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacing2Xs,
      cursor: 'pointer',
      color: isActive ? tokens.blue700 : tokens.gray900,
      fontWeight: isActive
        ? tokens.fontWeightDemiBold
        : tokens.fontWeightNormal,
      textDecoration: isActive ? 'underline' : 'none',
      backgroundColor: 'transparent',
      flexGrow: 1,
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    }),
    chevron: css({
      transform: 'rotate(0deg)',
      transition: `transform  ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
    }),
    closedIcon: css({
      transform: 'rotate(-90deg)',
    }),
    linkIcon: css({
      flexShrink: 0,
    }),
  };
};

interface SidebarSectionButtonProps {
  children: string;
  isOpen: boolean;
  onClick?: React.MouseEventHandler;
}

export function SidebarSectionButton({
  children,
  onClick,
  isOpen = true,
}: SidebarSectionButtonProps) {
  const titleStyles = getSectionTitleStyles(false);

  return (
    <List.Item>
      <Flex
        alignItems="center"
        className={cx([titleStyles.clickable, titleStyles.sidebarItem])}
        role="button"
        onClick={onClick}
      >
        <Text
          as="h3"
          fontWeight="fontWeightDemiBold"
          marginBottom="none"
          marginRight="spacingXs"
        >
          {children}
        </Text>

        <Image
          src={caretDown}
          alt="caret down icon"
          width={18}
          height={18}
          className={cx(titleStyles.chevron, {
            [titleStyles.closedIcon]: !isOpen,
          })}
        />
      </Flex>
    </List.Item>
  );
}

const renderSidebarBadge = ({
  isNew,
  status = 'stable',
}: Pick<SidebarLinkProps, 'isNew' | 'status'>) => {
  if (!isNew && status === 'stable') {
    return null;
  }
  const variants = {
    deprecated: 'negative',
    alpha: 'secondary',
    beta: 'secondary',
  };
  const variant = isNew ? 'primary' : variants[status];
  return (
    <Badge className={styles.badge} size="small" variant={variant}>
      {isNew ? 'new' : status}
    </Badge>
  );
};

interface SidebarLinkProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
  paddingLeft?: 'spacingXl' | 'spacing2Xl';
  isNew?: boolean;
  status?: ComponentStatus;
  isAuthProtected?: boolean;
}

export function SidebarLink({
  children,
  href,
  isExternal = false,
  isActive = false,
  paddingLeft = 'spacingXl',
  isNew = false,
  status = 'stable',
  isAuthProtected = false,
}: SidebarLinkProps) {
  const { data: session } = useSession();

  // don't list auth protected pages in the sidebar if the user is not logged in.
  if (isAuthProtected && !session) {
    return null;
  }

  const titleStyles = getSectionTitleStyles(isActive, paddingLeft);
  const linksProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <List.Item>
      <Link
        href={href}
        className={cx([styles.link, titleStyles.sidebarItem])}
        {...linksProps}
      >
        <span className={cx([titleStyles.clickable])}>
          {children}
          {isExternal && (
            <Image
              src={arrowSquareOut}
              alt="arrow square out icon"
              width={18}
              height={18}
              className={titleStyles.linkIcon}
            />
          )}
          {isAuthProtected && (
            <Image
              alt="lock icon"
              src={lockSimple}
              width={18}
              height={18}
              className={titleStyles.linkIcon}
            />
          )}
        </span>
        {renderSidebarBadge({ isNew, status })}
      </Link>
    </List.Item>
  );
}
