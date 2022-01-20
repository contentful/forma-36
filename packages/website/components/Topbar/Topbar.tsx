import React from 'react';
import { css, cx } from 'emotion';
import { Grid, Flex, List } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

import {
  getGridStyles,
  TOPBAR_HEIGHT,
  BIG_SCREEN_BREAKPOINT,
} from '../Layout/getGridStyles';
import { DocSearch } from '../DocSearch';

import { TopbarLink } from './TopbarLink';
import { TopbarLogo } from './TopbarLogo';
import { VersionSwitch } from './VersionSwitch';

const styles = {
  header: css({
    display: 'grid',
    backgroundColor: tokens.colorWhite,
    color: tokens.blue700,
    height: TOPBAR_HEIGHT,
    borderBottom: `1px solid ${tokens.gray300}`,
  }),
  navList: css({
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    '> li': {
      marginRight: tokens.spacingXl,
      fontSize: tokens.fontSizeL,
    },
  }),
  docSearchContainer: css({
    '& .algolia-autocomplete': {
      width: '100%',
    },
    [`@media screen and (min-width: ${BIG_SCREEN_BREAKPOINT})`]: {
      gridColumnStart: 4,
    },
  }),
};

interface TopbarProps {
  currentPage: string;
}

export function Topbar({ currentPage }: TopbarProps) {
  const gridStyles = getGridStyles();

  // TODO: unify this logic with the one in the Sidebar
  const isGuidelines = currentPage.includes('/guidelines');
  const isTokens = currentPage.includes('/tokens');
  const isComponents = currentPage.includes('/components');
  const isIntroduction = !isGuidelines && !isTokens && !isComponents;

  return (
    <Grid.Item
      as="header"
      area="topbar"
      className={cx(styles.header, gridStyles.wrapperColumns)}
    >
      <Flex paddingLeft="spacingXl">
        <TopbarLogo />
        <VersionSwitch />
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        className={cx(
          gridStyles.contentColumns,
          gridStyles.contentColumnsBigScreens,
        )}
      >
        <Flex
          as="nav"
          alignItems="center"
          className={gridStyles.columnStartTwo}
        >
          <List className={styles.navList}>
            <List.Item>
              <TopbarLink
                href="/"
                label="Introduction"
                isActive={isIntroduction}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                href="/guidelines/accessibility"
                label="Guidelines"
                isActive={isGuidelines}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                href="/tokens/color-system"
                label="Tokens"
                isActive={isTokens}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                href="/components/accordion"
                label="Components"
                isActive={isComponents}
              />
            </List.Item>
          </List>
        </Flex>

        <Flex className={styles.docSearchContainer}>
          <DocSearch />
        </Flex>
      </Flex>
    </Grid.Item>
  );
}
