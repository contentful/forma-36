import React, { useState } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { List, Text } from '@contentful/f36-components';

import { SidebarLink, SidebarSectionButton } from './SidebarLink';
import { useCurrentLocation } from '../hooks/useCurrentLocation';
import type {
  SidebarLink as SidebarLinkType,
  SidebarSection as SidebarSectionType,
  SidebarSubsection as SidebarSubsectionType,
} from '../types';

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

const isLinkActive = (href, currentPage) => {
  const linkedPage = href.split('/')[2];
  return linkedPage === currentPage;
};

function linkIsSubsection(
  link: SidebarLinkType | SidebarSectionType,
): link is SidebarSectionType {
  return link.type === 'subsection';
}

interface SidebarSubsectionProps {
  title?: string;
  links: SidebarLinkType[];
}

function SidebarSubsection({ title, links = [] }: SidebarSubsectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const { currentPage } = useCurrentLocation();

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

      {isOpen &&
        links.map((link) => {
          return (
            <SidebarLink
              key={link.slug}
              isActive={isLinkActive(link.slug, currentPage)}
              href={link.slug}
              isNew={link.isNew}
              isBeta={link.isBeta}
              isAlpha={link.isAlpha}
              isDeprecated={link.isDeprecated}
              isAuthProtected={link.authProtected}
              paddingLeft="spacing2Xl"
            >
              {link.title}
            </SidebarLink>
          );
        })}
    </List>
  );
}

interface SidebarSectionProps {
  title?: string;
  links: (SidebarLinkType | SidebarSubsectionType)[];
}

export function SidebarSection({ title, links = [] }: SidebarSectionProps) {
  const { currentPage } = useCurrentLocation();

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
        if (linkIsSubsection(link)) {
          return (
            <SidebarSubsection
              key={link.title}
              title={link.title}
              links={link.links}
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
            isBeta={link.isBeta}
            isAlpha={link.isAlpha}
            isDeprecated={link.isDeprecated}
            isAuthProtected={link.authProtected}
          >
            {link.title}
          </SidebarLink>
        );
      })}
    </List>
  );
}
