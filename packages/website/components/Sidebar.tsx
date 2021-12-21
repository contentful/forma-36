import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { TextInput, Flex, List, Box } from '@contentful/f36-components';

import { SidebarLink } from './SidebarLink';
import {
  SidebarSection,
  SidebarSectionType,
  SidebarLinkType,
} from './SidebarSection';

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
};

const isLinkActive = (href, currentPage) =>
  currentPage.replace(/\/$/, '') === href.replace(/\/$/, '');

interface Props {
  currentPage?: string;
}

const components: Array<SidebarSectionType | SidebarLinkType> = [
  {
    type: 'section',
    links: sidebarLinks.layoutComponents,
    title: 'Layout Components',
  },
  {
    type: 'section',
    links: sidebarLinks.typographyComponents,
    title: 'Typography Components',
  },
  {
    type: 'section',
    links: sidebarLinks.buttonComponents,
    title: 'Button Components',
  },
  {
    type: 'section',
    links: sidebarLinks.formComponents,
    title: 'Form Components',
  },
  {
    type: 'section',
    links: sidebarLinks.dateComponents,
    title: 'Date Components',
  },
  {
    type: 'section',
    links: sidebarLinks.modalComponents,
    title: 'Modal Components',
  },
  {
    type: 'section',
    links: sidebarLinks.cardComponents,
    title: 'Card Components',
  },
  {
    type: 'section',
    links: sidebarLinks.skeletonComponents,
    title: 'Skeleton Components',
  },
  ...sidebarLinks.unassigned,
  {
    type: 'section',
    links: sidebarLinks.deprecatedComponents,
    title: 'Deprecated V3 Components',
  },
];

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
            isActive={isLinkActive('/getting-started', currentPage)}
            href="/getting-started"
          >
            Getting started
          </SidebarLink>
          <SidebarLink
            isActive={isLinkActive('/contributing', currentPage)}
            href="/contributing"
          >
            Contributing to Forma 36
          </SidebarLink>
          <SidebarLink
            isActive={isLinkActive('/migration-v3-to-v4', currentPage)}
            href="/migration-v3-to-v4"
          >
            Migration Guide
          </SidebarLink>
          <Box marginBottom="spacingL" />
          <SidebarSection
            title="Guidelines"
            links={sidebarLinks.guidelines}
            currentPage={currentPage}
          />
          <SidebarSection
            title="Tokens"
            links={sidebarLinks.tokens}
            currentPage={currentPage}
          />
          <SidebarSection
            title="Components"
            links={components}
            currentPage={currentPage}
          />
          <SidebarSection
            title="Advanced components"
            links={sidebarLinks.advancedComponents || []}
            currentPage={currentPage}
          />
          <SidebarSection
            title="Utils"
            links={sidebarLinks.utils}
            currentPage={currentPage}
          />
          <SidebarSection
            title="Integrations"
            links={sidebarLinks.integrations}
            currentPage={currentPage}
          />
        </List>
      </Flex>
    </Flex>
  );
}
