import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import {
  TextInput,
  Flex,
  List,
  SectionHeading,
} from '@contentful/f36-components';

import { SidebarLink } from './SidebarLink';

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

const isLinkActive = (href, currentPage) =>
  currentPage.replace(/\/$/, '') === href.replace(/\/$/, '');

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
            isActive={isLinkActive('/getting-started', currentPage)}
            href="/getting-started"
          >
            Getting started
          </SidebarLink>
          <SidebarLink
            isTitle
            isActive={isLinkActive('/contributing', currentPage)}
            href="/contributing"
          >
            Contributing to Forma 36
          </SidebarLink>
          <SidebarLink
            isTitle
            isActive={isLinkActive('/migration-v3-to-v4', currentPage)}
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
                isActive={isLinkActive(item.slug, currentPage)}
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
                isActive={isLinkActive(item.slug, currentPage)}
                href={item.slug}
              >
                {item.title}
              </SidebarLink>
            ))}
          </List>

          <List className={styles.list}>
            <SectionHeading className={styles.sectionTitle} marginBottom="none">
              Components
            </SectionHeading>
          </List>

          <List className={styles.list}>
            <SectionHeading className={styles.sectionTitle} marginBottom="none">
              Utils
            </SectionHeading>
            {sidebarLinks.integrations.map((item) => (
              <SidebarLink
                key={item.slug}
                isActive={isLinkActive(item.slug, currentPage)}
                href={item.slug}
              >
                {item.title}
              </SidebarLink>
            ))}
          </List>

          <List className={styles.list}>
            <SectionHeading className={styles.sectionTitle} marginBottom="none">
              Integrations
            </SectionHeading>
            {sidebarLinks.integrations.map((item) => (
              <SidebarLink
                key={item.slug}
                isActive={isLinkActive(item.slug, currentPage)}
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
