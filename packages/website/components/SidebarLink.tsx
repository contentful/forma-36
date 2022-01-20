import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import { List, Flex, Text } from '@contentful/f36-components';
import { ChevronDownIcon } from '@contentful/f36-icons';
import { ExternalLinkIcon } from '@contentful/f36-icons';

export const getSectionTitleStyles = (isActive = false, indent = 1) => {
  return {
    sidebarItem: css({
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      paddingLeft: indent === 1 ? tokens.spacingXl : tokens.spacing2Xl,
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightM,
    }),
    link: css({
      display: 'block',
      fontSize: `${tokens.fontSizeM}`,
      lineHeight: `${tokens.lineHeightM}`,
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
    closedIcon: css({
      transform: 'rotate(-90deg)',
    }),
  };
};

interface SidebarLinkProps {
  children: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
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
        className={cx([titleStyles.clickable, titleStyles.sidebarItem])}
        role="button"
        onClick={props.onClick}
      >
        <Text
          as="h3"
          fontWeight="fontWeightDemiBold"
          marginBottom="none"
          marginRight="spacingXs"
        >
          {props.children}
        </Text>

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
  isExternal = false,
  isActive = false,
  indent = 1,
}: SidebarLinkProps) {
  const titleStyles = getSectionTitleStyles(isActive, indent);
  const linksProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

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
          {...linksProps}
        >
          <span>{children}</span>
          {isExternal ? <ExternalLinkIcon variant="muted" /> : null}
        </a>
      </Link>
    </List.Item>
  );
}
