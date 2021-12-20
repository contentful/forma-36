import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { List, SectionHeading } from '@contentful/f36-components';

import { SidebarLink } from './SidebarLink';

const styles = {
  list: css({
    padding: 0,
    listStyle: 'none',
    marginBottom: tokens.spacingL,
  }),
  sectionTitle: css({ padding: `${tokens.spacingXs} ${tokens.spacingM}` }),
};

const isLinkActive = (href, currentPage) =>
  currentPage.replace(/\/$/, '') === href.replace(/\/$/, '');

interface SidebarSectionProps {
  title: string;
  links: { title: string; slug: string }[];
  currentPage: string;
}

export function SidebarSection({
  title,
  links = [],
  currentPage = '/',
}: SidebarSectionProps) {
  return (
    <List className={styles.list}>
      <SectionHeading className={styles.sectionTitle} marginBottom="none">
        {title}
      </SectionHeading>
      {links.map((link) => (
        <SidebarLink
          key={link.slug}
          isActive={isLinkActive(link.slug, currentPage)}
          href={link.slug}
        >
          {link.title}
        </SidebarLink>
      ))}
    </List>
  );
}
