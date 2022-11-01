import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { Grid } from '@contentful/f36-components';

import { SidebarSection } from './SidebarSection';
import type { SidebarSection as SidebarSectionType } from '../types';

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

export interface SidebarProps {
  links: SidebarSectionType[];
}

export function Sidebar({ links }: SidebarProps) {
  return (
    <Grid.Item
      as="nav"
      area="sidebar"
      aria-label="Main Navigation"
      className={styles.nav}
    >
      {links.map((category, index) => {
        return (
          <SidebarSection
            key={category.title ?? index}
            links={category.links}
            title={category.title}
            isAuthProtected={category.authProtected}
          />
        );
      })}
    </Grid.Item>
  );
}
