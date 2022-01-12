import React from 'react';
import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { List, TextLink, Subheading } from '@contentful/f36-components';

import { useScrollSpy } from '../utils/use-scrollspy';

const styles = {
  list: css({
    listStyle: 'none',
    paddingLeft: '0',
  }),
  listItem: css({
    marginBottom: tokens.spacingXs,
  }),
  sidebarNavItemActive: css({
    color: tokens.blue700,
    fontWeight: 'bold',
  }),
  secondLevelMargin: css({
    marginLeft: tokens.spacingM,
  }),
};

export interface HeadingType {
  level: 'h2' | 'h3';
  text: string;
  id: string;
}

interface TableOfContentProps {
  headings: HeadingType[];
}

export function TableOfContent({ headings }: TableOfContentProps) {
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

      <List className={styles.list}>
        {headings.map(({ id, text, level }) => (
          <List.Item key={id} title={text} className={styles.listItem}>
            <TextLink
              href={`#${id}`}
              aria-current={id === activeId ? 'location' : undefined}
              className={cx({
                [styles.secondLevelMargin]: level === 'h3',
                [styles.sidebarNavItemActive]: id === activeId,
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
