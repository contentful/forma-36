import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import { List, Flex } from '@contentful/f36-components';
import { ChevronDownIcon } from '@contentful/f36-icons';

export const getSectionTitleStyles = (isActive = false, indent = 1) => {
  return {
    sidebarItem: css({
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      paddingLeft: `calc(${indent} * ${tokens.spacingM})`,
      fontSize: tokens.fontSizeL,
      lineHeight: tokens.lineHeightL,
    }),
    link: css({
      display: 'block',
      fontSize: `${tokens.fontSizeL}`,
      lineHeight: `${tokens.lineHeightL}`,
    }),
    clickable: css({
      textDecoration: 'none',
      cursor: 'pointer',
      color: isActive ? tokens.colorWhite : tokens.gray900,
      backgroundColor: isActive ? tokens.colorPrimary : 'transparent',
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        backgroundColor: isActive ? tokens.colorPrimary : tokens.gray200,
      },
    }),
    closedIcon: css({
      transform: 'rotate(-90deg)',
    }),
  };
};

interface SidebarLinkProps {
  children: string;
  href: string;
  isActive?: boolean;
  indent?: number;
}

export function SidebarSectionButton(props: {
  children: string;
  isOpen: boolean;
  onClick?: React.MouseEventHandler;
}) {
  const titleStyles = getSectionTitleStyles(false);
  return (
    <List.Item>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className={cx([titleStyles.clickable, titleStyles.sidebarItem])}
        role="button"
        onClick={props.onClick}
      >
        <span>{props.children}</span>
        <ChevronDownIcon
          variant="muted"
          className={!props.isOpen ? titleStyles.closedIcon : ''}
        />
      </Flex>
    </List.Item>
  );
}

export function SidebarLink({
  children,
  href,
  isActive = false,
  indent = 1,
}: SidebarLinkProps) {
  const titleStyles = getSectionTitleStyles(isActive, indent);

  return (
    <List.Item>
      <Link href={href} passHref scroll>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className={cx([
            titleStyles.link,
            titleStyles.clickable,
            titleStyles.sidebarItem,
          ])}
        >
          {children}
        </a>
      </Link>
    </List.Item>
  );
}
