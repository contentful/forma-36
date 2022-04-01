import React, { useContext } from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import type { SpacingTokens } from '@contentful/f36-tokens';
import { List, Flex, Text, Badge } from '@contentful/f36-components';
import { ChevronDownIcon } from '@contentful/f36-icons';
import { ExternalLinkTrimmedIcon } from '@contentful/f36-icons';
import { Forma36Context, useTheme } from '@contentful/f36-core';
import type { Theme } from '@contentful/f36-core';

const getSidebarLinkStyles = ({
  isActive = false,
  paddingLeft = 'spacingXl',
  theme,
  activeColor,
}: {
  isActive?: boolean;
  paddingLeft?: SpacingTokens;
  theme: Theme;
  activeColor?: string;
}) => {
  return {
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
      color: isActive && activeColor ? activeColor : theme.heading.color,
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
  const theme: Theme = useTheme();
  const { isDarkMode } = useContext(Forma36Context);
  const activeColor = isDarkMode ? tokens.blue400 : tokens.blue700;
  const styles = getSidebarLinkStyles({
    theme,
    isActive: false,
    activeColor,
  });

  return (
    <List.Item>
      <Flex
        alignItems="center"
        className={cx([styles.clickable, styles.sidebarItem])}
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
          className={cx(styles.chevron, {
            [styles.closedIcon]: !isOpen,
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
  const theme: Theme = useTheme();
  const { isDarkMode } = useContext(Forma36Context);
  const activeColor = isDarkMode ? tokens.blue400 : tokens.blue700;
  const styles = getSidebarLinkStyles({
    activeColor,
    isActive,
    paddingLeft,
    theme,
  });
  const linksProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <List.Item>
      <Link href={href} passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={cx([styles.link, styles.sidebarItem])} {...linksProps}>
          <span className={cx([styles.clickable])}>
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
