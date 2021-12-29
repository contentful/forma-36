/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { List, TextLink, Subheading, Box } from '@contentful/f36-components';

const styles = {
  root: css({
    display: 'block',
    background: 'white',
    marginBottom: tokens.spacingL,
    padding: `0 ${tokens.spacingL}`,
    '@media (min-width: 1400px)': {
      display: 'inline-block',
      background: 'white',
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
    listStyleType: 'none',
    '&:hover': {
      backgroundColor: tokens.gray200,
      textDecoration: 'none',
      color: tokens.gray900,
    },
    '&:active': {
      backgroundColor: tokens.blue600,
    },
  }),
};

type TocLink = { type: 'link'; href: string; text: string };
type TocParent = { type: 'list'; children: TocTuple[] };
type TocTuple = [TocLink] | [TocLink, TocParent];
export type TocType = TocTuple[];

function TocItem(props: { tuple: TocTuple }) {
  const [link, list] = props.tuple;
  return (
    <List.Item>
      {link && (
        <TextLink href={link.href} className={styles.sidebarNavItem}>
          {link.text}
        </TextLink>
      )}
      {list && (
        <List className={styles.rootList}>
          {list.children.map((item, index) => {
            return <TocItem tuple={item} key={index} />;
          })}
        </List>
      )}
    </List.Item>
  );
}

export function TableOfContent(props: { toc: TocType | null }) {
  if (!props.toc || props.toc.length === 0) {
    return null;
  }

  if (props.toc.length === 1 && props.toc[0].length < 2) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <Box marginLeft="spacingM">
          <Subheading as="h2">On this page</Subheading>
        </Box>
        <List className={styles.rootList}>
          {props.toc.map((item, index) => {
            return <TocItem tuple={item} key={index} />;
          })}
        </List>
      </div>
    </div>
  );
}
