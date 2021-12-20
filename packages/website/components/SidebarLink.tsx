import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import { List } from '@contentful/f36-components';

const getSectionTitleStyles = (isActive = false, isTitle = false) => {
  return {
    sidebarItem: css({
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      ...(!isTitle && { paddingLeft: tokens.spacingXl }),
    }),
    link: css({
      display: 'block',
      textDecoration: 'none',
      color: isActive ? tokens.colorWhite : tokens.gray900,
      backgroundColor: isActive ? tokens.colorPrimary : 'transparent',
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        backgroundColor: isActive ? tokens.colorPrimary : tokens.gray200,
      },
      '& h2': {
        color: isActive ? tokens.colorWhite : tokens.gray900,
      },
    }),
  };
};

interface SidebarLinkProps {
  children: string;
  href: string;
  isActive?: boolean;
  isTitle?: boolean;
}

export function SidebarLink({
  children,
  href,
  isActive = false,
  isTitle = false,
}: SidebarLinkProps) {
  const titleStyles = getSectionTitleStyles(isActive, isTitle);

  return (
    <List.Item>
      <Link href={href} passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={cx([titleStyles.link, titleStyles.sidebarItem])}>
          {children}
        </a>
      </Link>
    </List.Item>
  );
}
