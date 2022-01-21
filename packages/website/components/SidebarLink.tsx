import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import { List, Flex, Text } from '@contentful/f36-components';
import { ChevronDownIcon } from '@contentful/f36-icons';
import { ExternalLinkIcon } from '@contentful/f36-icons';

const styles = {
  link: css({
    display: 'flex',
    gap: tokens.spacing2Xs,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
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
      cursor: 'pointer',
      color: isActive ? tokens.blue700 : tokens.gray900,
      fontWeight: isActive
        ? tokens.fontWeightDemiBold
        : tokens.fontWeightNormal,
      textDecoration: isActive ? 'underline' : 'none',
      backgroundColor: 'transparent',
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        textDecoration: 'underline',
      },
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
  children: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
  paddingLeft?: 'spacingXl' | 'spacing2Xl';
}

export function SidebarLink({
  children,
  href,
  isExternal = false,
  isActive = false,
  paddingLeft = 'spacingXl',
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
          className={cx([
            styles.link,
            titleStyles.clickable,
            titleStyles.sidebarItem,
          ])}
          {...linksProps}
        >
          {children}
          {isExternal ? <ExternalLinkIcon variant="muted" /> : null}
        </a>
      </Link>
    </List.Item>
  );
}
