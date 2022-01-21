import React from 'react';
import { css } from 'emotion';
import sortBy from 'lodash.sortby';
import tokens from '@contentful/f36-tokens';
import { Grid } from '@contentful/f36-components';

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

interface Props {
  currentPage?: string;
}

const components: Array<SidebarSectionType | SidebarLinkType> = [
  ...sidebarLinks.unassigned,

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

export function Sidebar({ currentPage = '/' }: Props) {
  const componentsSorted = sortBy(components, ['title']);

  // TODO: unify this logic with the one in the Topbar
  const isGuidelines = currentPage.includes('/guidelines');
  const isTokens = currentPage.includes('/tokens');
  const isComponents = currentPage.includes('/components');
  const isIntroduction = !isGuidelines && !isTokens && !isComponents;

  return (
    <Grid.Item
      as="nav"
      area="sidebar"
      aria-label="Main Navigation"
      className={styles.nav}
    >
      {isIntroduction && (
        <>
          <SidebarSection
            links={[
              {
                title: 'Getting started',
                slug: '/getting-started',
                type: 'link',
              },
              {
                title: 'Contributing to Forma 36',
                slug: '/contributing',
                type: 'link',
              },
              {
                title: 'Playground',
                slug: '/playground',
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
            links={sidebarLinks.forma36Version3}
            currentPage={currentPage}
          />
        </>
      )}

      {isGuidelines && (
        <SidebarSection
          links={sidebarLinks.guidelines}
          currentPage={currentPage}
        />
      )}

      {isTokens && (
        <SidebarSection links={sidebarLinks.tokens} currentPage={currentPage} />
      )}

      {isComponents && (
        <>
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
