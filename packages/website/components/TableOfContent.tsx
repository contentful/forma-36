import React from 'react';
import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { List, TextLink, Subheading, Box } from '@contentful/f36-components';
import { useScrollSpy } from '../utils/use-scrollspy';

const styles = {
  root: css({
    display: 'block',
    marginBottom: tokens.spacingL,
    padding: `0 ${tokens.spacingL}`,
    '@media (min-width: 1400px)': {
      display: 'inline-block',
      float: 'right',
    },
  }),
  inner: css({
    width: '100%',
  }),
  rootList: css({
    listStyle: 'none',
    paddingLeft: '0',
    ul: css({
      paddingLeft: tokens.spacingL,
    }),
  }),
  listElement: css({
    listStyleType: 'none',
  }),
  sidebarNavItem: css({
    padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    textDecoration: 'none',
    cursor: 'pointer',
    color: tokens.gray900,
    backgroundColor: 'transparent',
    transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    fontWeight: tokens.fontWeightNormal,
    fontSize: tokens.fontSizeL,
    lineHeight: tokens.lineHeightL,
    listStyleType: 'none',

    '&:hover': {
      textDecoration: 'none',
      color: tokens.blue700,
    },
  }),
  sidebarNavItemActive: css({
    color: tokens.blue700,
    fontWeight: 'bold',
  }),
};

type TocLink = { type: 'link'; href: string; text: string };
type TocParent = { type: 'list'; children: TocTuple[] };
type TocTuple = [TocLink] | [TocLink, TocParent];
export type TocType = TocTuple[];
export interface HeadingType {
  level: 'h2' | 'h3';
  text: string;
  id: string;
}

export function TableOfContent(props: { headings: Array<HeadingType> }) {
  const { headings } = props;

  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -60% 0%',
    },
  );

  if (!headings || headings.length === 0) {
    return null;
  }

  if (headings.length === 1) {
    return null;
  }

  return (
    <>
      <Box marginLeft="spacingM">
        <Subheading as="h2">On this page</Subheading>
      </Box>
      <List className={styles.rootList}>
        {headings.map(({ id, text, level }) => (
          <List.Item key={id} title={text}>
            <Box marginLeft={level === 'h3' ? 'spacingM' : undefined}>
              <TextLink
                href={`#${id}`}
                aria-current={id === activeId ? 'location' : undefined}
                className={cx(styles.sidebarNavItem, {
                  [styles.sidebarNavItemActive]: id === activeId,
                })}
              >
                {text}
              </TextLink>
            </Box>
          </List.Item>
        ))}
      </List>
    </>
  );
}
