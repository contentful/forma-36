import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { Grid } from '@contentful/f36-components';

import { WEBSITE_SECTION } from '../hooks/useCurrentLocation';
import {
  SidebarSection,
  SidebarSectionType,
  SidebarLinkType,
} from './SidebarSection';
import { sortByTitle } from '../utils/sortByTitle';

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

interface Props {
  activeSection?: string;
  currentPage?: string;
}

const components: Array<SidebarSectionType | SidebarLinkType> = [
  ...sidebarLinks.unassigned,

  {
    type: 'section',
    links: sidebarLinks.animationComponents,
    title: 'Animation Components',
  },
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
  {
    type: 'section',
    links: sidebarLinks.deprecatedComponents,
    title: 'Deprecated V3 Components',
  },
];

export function Sidebar({
  activeSection = WEBSITE_SECTION.INTRODUCTION,
  currentPage = '/',
}: Props) {
  const componentsSorted = sortByTitle(components);

  return (
    <Grid.Item
      as="nav"
      area="sidebar"
      aria-label="Main Navigation"
      className={styles.nav}
    >
      {activeSection === WEBSITE_SECTION.INTRODUCTION && (
        <>
          <SidebarSection
            links={[
              {
                title: 'Getting started',
                slug: '/introduction/getting-started',
                type: 'link',
              },
              {
                title: 'Contributing to Forma 36',
                slug: '/introduction//contributing',
                type: 'link',
              },
              {
                title: 'App Framework',
                slug:
                  'https://www.contentful.com/developers/docs/extensibility/app-framework/',
                type: 'link',
              },
            ]}
            currentPage={currentPage}
          />
          <SidebarSection
            title="Forma 36 version 3"
            links={[
              {
                title: 'FAQ',
                slug: '/introduction/v3-faq',
                type: 'link',
              },
              {
                title: 'Migration Guide',
                slug: '/introduction/migration-v3-to-v4',
                type: 'link',
              },
              {
                title: 'Version 3 maintenance plan',
                slug: '/introduction/maintenance-plan',
                type: 'link',
              },
            ]}
            currentPage={currentPage}
          />
        </>
      )}

      {activeSection === WEBSITE_SECTION.GUIDELINES && (
        <SidebarSection
          links={[
            {
              title: 'Accessibility',
              slug: '/guidelines/accessibility',
              type: 'link',
            },
            {
              title: 'Keyboard shortcuts',
              slug: '/guidelines/keyboard-shortcuts',
              type: 'link',
            },
            {
              title: 'Grammar and rules',
              slug: '/guidelines/grammar-and-rules',
              type: 'link',
            },
            {
              title: 'UX writing principles',
              slug: '/guidelines/ux-writing-principles',
              type: 'link',
            },
          ]}
          currentPage={currentPage}
        />
      )}

      {activeSection === WEBSITE_SECTION.TOKENS && (
        <SidebarSection links={sidebarLinks.tokens} currentPage={currentPage} />
      )}

      {activeSection === WEBSITE_SECTION.COMPONENTS && (
        <>
          <SidebarSection
            links={[
              {
                title: 'Proposal in GitHub',
                slug: 'https://github.com/contentful/forma-36/discussions',
                type: 'link',
              },
            ]}
            currentPage={currentPage}
          />
          <SidebarSection links={componentsSorted} currentPage={currentPage} />
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
    </Grid.Item>
  );
}
