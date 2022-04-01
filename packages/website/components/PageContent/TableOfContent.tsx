import React from 'react';
import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { List, TextLink, Subheading } from '@contentful/f36-components';

import { useScrollSpy } from '../../utils/use-scrollspy';

const getToCStyles = (isDarkMode) => ({
  list: css({
    listStyle: 'none',
    paddingLeft: '0',
  }),
  listItem: css({
    marginBottom: tokens.spacingXs,
  }),
  sidebarNavItemActive: css({
    color: isDarkMode ? tokens.blue500 : tokens.blue700,
    fontWeight: tokens.fontWeightDemiBold,
    textDecoration: 'underline',
  }),
  secondLevelMargin: css({
    marginLeft: tokens.spacingM,
  }),
});

export interface HeadingType {
  level: 'h2' | 'h3';
  text: string;
  id: string;
}

interface TableOfContentProps {
  headings: HeadingType[];
  isDarkMode?: boolean;
}

export function TableOfContent({
  headings,
  isDarkMode = false,
}: TableOfContentProps) {
  const tocStyles = getToCStyles(isDarkMode);
  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -60% 0%',
    },
  );

  return (
    <>
      <Subheading as="h2" marginBottom="spacingXs">
        On this page
      </Subheading>

      <List className={tocStyles.list}>
        {headings.map(({ id, text, level }) => (
          <List.Item key={id} title={text} className={tocStyles.listItem}>
            <TextLink
              href={`#${id}`}
              aria-current={id === activeId ? 'location' : undefined}
              className={cx({
                [tocStyles.secondLevelMargin]: level === 'h3',
                [tocStyles.sidebarNavItemActive]: id === activeId,
              })}
              variant="secondary"
            >
              {text}
            </TextLink>
          </List.Item>
        ))}
      </List>
    </>
  );
}
