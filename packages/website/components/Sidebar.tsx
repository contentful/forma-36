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

const mdxSidebarLinks = require('../utils/sidebarLinks.json');
const contentfulSidebarLinks = require('../utils/contentfulSidebarLinks.json');

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
  ...mdxSidebarLinks.unassigned,

  {
    type: 'section',
    links: mdxSidebarLinks.animationComponents,
    title: 'Animation Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.layoutComponents,
    title: 'Layout Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.typographyComponents,
    title: 'Typography Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.buttonComponents,
    title: 'Button Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.formComponents,
    title: 'Form Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.dateComponents,
    title: 'Date Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.modalComponents,
    title: 'Modal Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.cardComponents,
    title: 'Card Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.skeletonComponents,
    title: 'Skeleton Components',
  },
  {
    type: 'section',
    links: mdxSidebarLinks.deprecatedComponents,
    title: 'Deprecated V3 Components',
  },
];

export function Sidebar({
  activeSection = WEBSITE_SECTION.HOMEPAGE,
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
              {
                title: 'What’s new',
                slug: '/whats-new',
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
          links={contentfulSidebarLinks.guidelines}
          currentPage={currentPage}
        />
      )}

      {activeSection === WEBSITE_SECTION.TOKENS && (
        <SidebarSection
          links={mdxSidebarLinks.tokens}
          currentPage={currentPage}
        />
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
            links={mdxSidebarLinks.utils}
            currentPage={currentPage}
          />
          <SidebarSection
            title="Integrations"
            links={mdxSidebarLinks.integrations}
            currentPage={currentPage}
          />
        </>
      )}
    </Grid.Item>
  );
}
