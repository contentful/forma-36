import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { Flex, List, Box } from '@contentful/f36-components';

import { SidebarLink } from './SidebarLink';
import {
  SidebarSection,
  SidebarSectionType,
  SidebarLinkType,
} from './SidebarSection';

const sidebarLinks = require('../utils/sidebarLinks.json');

const styles = {
  nav: css({
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
    <Flex
      as="nav"
      aria-label="Main Navigation"
      flexDirection="column"
      className={styles.nav}
    >
      <List className={styles.list}>
        {currentPage.includes('guidelines') && (
          <SidebarSection
            title="Guidelines"
            links={sidebarLinks.guidelines}
            currentPage={currentPage}
          />
        )}
        {currentPage.includes('tokens') && (
          <SidebarSection
            title="Tokens"
            links={sidebarLinks.tokens}
            currentPage={currentPage}
          />
        )}
        {currentPage.includes('components') && (
          <>
            <SidebarSection
              title="Components"
              links={components}
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
          </>
        )}
        {currentPage.includes('') && (
          <>
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
            <Box marginBottom="spacingL" />
            <SidebarSection
              title="Forma 36 version 3"
              links={sidebarLinks.forma36Version3}
              currentPage={currentPage}
            />
          </>
        )}
      </List>
    </Flex>
  );
}
