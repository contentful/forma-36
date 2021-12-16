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
          <SectionTitle currentPage={currentPage} href="/getting-started">
            Getting started
          </SectionTitle>
          <SectionTitle currentPage={currentPage} href="/contributing">
            Contributing to Forma 36
          </SectionTitle>
          <SectionTitle currentPage={currentPage} href="/migration-v3-to-v4">
            Migration Guide
          </SectionTitle>
          <SectionTitle>Guidelines</SectionTitle>
          <SectionTitle>Tokens</SectionTitle>
          <SectionTitle>Components</SectionTitle>
          <SectionTitle>Utils</SectionTitle>
          <SectionTitle>Integrations</SectionTitle>
        </List>
      </Flex>
    </Flex>
  );
}

const getSectionTitleStyles = (isActive = false) => {
  return {
    sidebarItem: css({
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    }),
    link: css({
      display: 'block',
      textDecoration: 'none',
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

interface SectionLinkProps {
  children: string;
  href?: string;
  currentPage?: string;
}

function SectionTitle({ children, href, currentPage = '/' }: SectionLinkProps) {
  const isActive = currentPage.replace(/\/$/, '') === href;
  const titleStyles = getSectionTitleStyles(isActive);

  return (
    <List.Item>
      {!href && (
        <SectionHeading marginBottom="none" className={titleStyles.sidebarItem}>
          {children}
        </SectionHeading>
      )}

      {href && (
        <Link href={href} passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={cx([titleStyles.link, titleStyles.sidebarItem])}>
            <SectionHeading marginBottom="none">{children}</SectionHeading>
          </a>
        </Link>
      )}
    </List.Item>
  );
}
