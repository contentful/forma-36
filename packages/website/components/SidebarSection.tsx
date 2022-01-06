import React, { useState } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { List, SectionHeading } from '@contentful/f36-components';

import { SidebarLink, SidebarSectionButton } from './SidebarLink';

const styles = {
  list: css({
    padding: 0,
    listStyle: 'none',
    marginBottom: tokens.spacingL,
    userSelect: 'none',
  }),
  sublist: css({
    padding: 0,
    listStyle: 'none',
    userSelect: 'none',
  }),
  sectionTitle: css({
    padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    fontSize: tokens.fontSizeL,
    lineHeight: tokens.lineHeightL,
    letterSpacing: 'initial',
  }),
};

const isLinkActive = (href, currentPage) =>
  currentPage.replace(/\/$/, '') === href.replace(/\/$/, '');

export type SidebarLinkType = { title: string; slug: string; type: 'link' };
export type SidebarSectionType = {
  title: string;
  links: SidebarLinkType[];
  type: 'section';
};
interface SidebarSectionProps {
  title: string;
  links: Array<SidebarLinkType | SidebarSectionType>;
  currentPage: string;
}

function SidebarSubsection({
  title,
  links = [],
  currentPage,
}: {
  title: string;
  links: SidebarLinkType[];
  currentPage: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <List className={styles.sublist}>
      <SidebarSectionButton
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        {title}
      </SidebarSectionButton>
      {isOpen
        ? links.map((link) => {
            return (
              <SidebarLink
                key={link.slug}
                isActive={isLinkActive(link.slug, currentPage)}
                href={link.slug}
                indent={2.5}
              >
                {link.title}
              </SidebarLink>
            );
          })
        : null}
    </List>
  );
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
      {links.map((link) => {
        if (link.type === 'section') {
          return (
            <SidebarSubsection
              key={link.title}
              title={link.title}
              links={link.links}
              currentPage={currentPage}
            />
          );
        }
        return (
          <SidebarLink
            key={link.slug}
            isActive={isLinkActive(link.slug, currentPage)}
            href={link.slug}
          >
            {link.title}
          </SidebarLink>
        );
      })}
    </List>
  );
}
