import React, { useState } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { List, Text } from '@contentful/f36-components';

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
    padding: `${tokens.spacingXs} ${tokens.spacingM} ${tokens.spacingXs} ${tokens.spacingXl}`,
    letterSpacing: 'initial',
    paddingLeft: tokens.spacingXl,
  }),
};

const isLinkActive = (href, currentPage) =>
  currentPage.replace(/\/$/, '') === href.replace(/\/$/, '');

export type SidebarLinkType = {
  title: string;
  slug: string;
  type: 'link';
  isNew?: boolean;
};
export type SidebarSectionType = {
  title: string;
  links: SidebarLinkType[];
  type: 'section';
};

interface SidebarSubsectionProps {
  title?: string;
  links: SidebarLinkType[];
  currentPage: string;
}

function SidebarSubsection({
  title,
  links = [],
  currentPage,
}: SidebarSubsectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <List className={styles.sublist}>
      {title && (
        <SidebarSectionButton
          isOpen={isOpen}
          onClick={() => {
            setIsOpen((open) => !open);
          }}
        >
          {title}
        </SidebarSectionButton>
      )}

      {isOpen
        ? links.map((link) => {
            return (
              <SidebarLink
                key={link.slug}
                isActive={isLinkActive(link.slug, currentPage)}
                href={link.slug}
                paddingLeft="spacing2Xl"
              >
                {link.title}
              </SidebarLink>
            );
          })
        : null}
    </List>
  );
}

interface SidebarSectionProps {
  title?: string;
  links: Array<SidebarLinkType | SidebarSectionType>;
  currentPage: string;
}

export function SidebarSection({
  title,
  links = [],
  currentPage = '/',
}: SidebarSectionProps) {
  return (
    <List className={styles.list}>
      {title && (
        <Text
          as="h3"
          className={styles.sectionTitle}
          marginBottom="none"
          fontWeight="fontWeightDemiBold"
        >
          {title}
        </Text>
      )}

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
            isExternal={link.slug.includes('https://')}
            isNew={link.isNew}
          >
            {link.title}
          </SidebarLink>
        );
      })}
    </List>
  );
}
