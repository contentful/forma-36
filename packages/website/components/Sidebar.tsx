import React from 'react';
import { css } from 'emotion';
import sortBy from 'lodash.sortby';
import tokens from '@contentful/f36-tokens';
import { Flex } from '@contentful/f36-components';

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

  return (
    <Flex
      as="nav"
      aria-label="Main Navigation"
      flexDirection="column"
      className={styles.nav}
    >
      {currentPage.includes('guidelines') ||
      currentPage.includes('tokens') ||
      currentPage.includes('components') ? (
        <>
          {currentPage.includes('guidelines') && (
            <SidebarSection
              links={sidebarLinks.guidelines}
              currentPage={currentPage}
            />
          )}
          {currentPage.includes('tokens') && (
            <SidebarSection
              links={sidebarLinks.tokens}
              currentPage={currentPage}
            />
          )}
          {currentPage.includes('components') && (
            <>
              <SidebarSection
                links={componentsSorted}
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
        </>
      ) : (
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
    </Flex>
  );
}
