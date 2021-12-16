import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import {
  TextInput,
  Flex,
  List,
  SectionHeading,
} from '@contentful/f36-components';

const sidebarLinks = require('../utils/sidebarLinks.json');

const styles = {
  sidebar: css({
    height: '100%',
    borderRight: `1px solid ${tokens.gray300}`,
  }),
  search: css({
    padding: tokens.spacingS,
  }),
  nav: css({
    borderTop: `1px solid ${tokens.gray300}`,
    padding: `${tokens.spacingM} 0`,
    overflowY: 'auto',
    color: tokens.gray700,
  }),
  list: css({
    padding: 0,
    listStyle: 'none',
  }),
  sectionTitle: css({ padding: `${tokens.spacingXs} ${tokens.spacingM}` }),
};

interface Props {
  currentPage?: string;
}

export function Sidebar({ currentPage = '/' }: Props) {
  return (
    <Flex className={styles.sidebar} flexDirection="column">
      <div className={styles.search}>
        <TextInput />
      </div>
      <Flex
        as="nav"
        aria-label="Main Navigation"
        flexDirection="column"
        className={styles.nav}
      >
        <List className={styles.list}>
          <SidebarLink
            isTitle
            currentPage={currentPage}
            href="/getting-started"
          >
            Getting started
          </SidebarLink>
          <SidebarLink isTitle currentPage={currentPage} href="/contributing">
            Contributing to Forma 36
          </SidebarLink>
          <SidebarLink
            isTitle
            currentPage={currentPage}
            href="/migration-v3-to-v4"
          >
            Migration Guide
          </SidebarLink>

          <List className={styles.list}>
            <SectionHeading className={styles.sectionTitle} marginBottom="none">
              Guidelines
            </SectionHeading>
            {sidebarLinks.guidelines.map((item) => (
              <SidebarLink
                key={item.slug}
                currentPage={currentPage}
                href={item.slug}
              >
                {item.title}
              </SidebarLink>
            ))}
          </List>

          <List className={styles.list}>
            <SectionHeading className={styles.sectionTitle} marginBottom="none">
              Tokens
            </SectionHeading>
            {sidebarLinks.tokens.map((item) => (
              <SidebarLink
                key={item.slug}
                currentPage={currentPage}
                href={item.slug}
              >
                {item.title}
              </SidebarLink>
            ))}
          </List>

          <SectionHeading className={styles.sectionTitle} marginBottom="none">
            Components
          </SectionHeading>

          <SectionHeading className={styles.sectionTitle} marginBottom="none">
            Utils
          </SectionHeading>

          <List className={styles.list}>
            <SectionHeading className={styles.sectionTitle} marginBottom="none">
              Integrations
            </SectionHeading>
            {sidebarLinks.integrations.map((item) => (
              <SidebarLink
                key={item.slug}
                currentPage={currentPage}
                href={item.slug}
              >
                {item.title}
              </SidebarLink>
            ))}
          </List>
        </List>
      </Flex>
    </Flex>
  );
}

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

// function SidebarItem({ item, isActive }) {
//   return (
//     <SidebarLink
//       key={item.slug}
//       href={item.slug}
//       isActive={isActive}
//     >
//       {item.title}
//     </SidebarLink>
//   )
// }

interface SidebarLinkProps {
  children: string;
  href: string;
  currentPage?: string;
  isTitle?: boolean;
}

function SidebarLink({
  children,
  href,
  currentPage = '/',
  isTitle = false,
}: SidebarLinkProps) {
  const isActive = currentPage.replace(/\/$/, '') === href.replace(/\/$/, '');
  const titleStyles = getSectionTitleStyles(isActive, isTitle);

  return (
    <List.Item>
      <Link href={href} passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={cx([titleStyles.link, titleStyles.sidebarItem])}>
          {isTitle ? (
            <SectionHeading marginBottom="none">{children}</SectionHeading>
          ) : (
            children
          )}
        </a>
      </Link>
    </List.Item>
  );
}
