import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import { List, Flex, Text, Badge } from '@contentful/f36-components';
import { ChevronDownIcon } from '@contentful/f36-icons';
import { ExternalLinkTrimmedIcon } from '@contentful/f36-icons';

const styles = {
  link: css({
    display: 'flex',
    gap: tokens.spacing2Xs,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    textDecoration: 'none',
    '&:hover span:first-child': {
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

        <ChevronDownIcon
          variant="muted"
          className={cx(titleStyles.chevron, {
            [titleStyles.closedIcon]: !isOpen,
          })}
        />
      </Flex>
    </List.Item>
  );
}

interface SidebarLinkProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
  paddingLeft?: 'spacingXl' | 'spacing2Xl';
  isNew?: boolean;
}

export function SidebarLink({
  children,
  href,
  isExternal = false,
  isActive = false,
  paddingLeft = 'spacingXl',
  isNew = false,
}: SidebarLinkProps) {
  const titleStyles = getSectionTitleStyles(isActive, paddingLeft);
  const linksProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <List.Item>
      <Link href={href} passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className={cx([styles.link, titleStyles.sidebarItem])}
          {...linksProps}
        >
          <span className={cx([titleStyles.clickable])}>
            {children}
            {isExternal && <ExternalLinkTrimmedIcon variant="muted" />}
          </span>
          {isNew && (
            <Badge className={styles.badge} variant="primary">
              new
            </Badge>
          )}
        </a>
      </Link>
    </List.Item>
  );
}
