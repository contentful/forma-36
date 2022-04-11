import React from 'react';
import { css, cx } from 'emotion';
import { Grid, Flex, List } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

import {
  getGridStyles,
  TOPBAR_HEIGHT,
  SCREEN_BREAKPOINT_LARGE,
} from '../../utils/getGridStyles';
import { DocSearch } from '../DocSearch';

import { WEBSITE_SECTION } from '../../hooks/useCurrentLocation';
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
    [`@media screen and (min-width: ${SCREEN_BREAKPOINT_LARGE})`]: {
      gridColumnStart: 4,
    },
  }),
};

interface TopbarProps {
  activeSection: string;
}

export function Topbar({ activeSection }: TopbarProps) {
  const gridStyles = getGridStyles();

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
                href="/introduction/getting-started"
                label="Introduction"
                isActive={activeSection === WEBSITE_SECTION.INTRODUCTION}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                href="/guidelines/accessibility"
                label="Guidelines"
                isActive={activeSection === WEBSITE_SECTION.GUIDELINES}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                href="/tokens/color-system"
                label="Tokens"
                isActive={activeSection === WEBSITE_SECTION.TOKENS}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                href="/components/accordion"
                label="Components"
                isActive={activeSection === WEBSITE_SECTION.COMPONENTS}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                href="/playground"
                label="Playground"
                isActive={activeSection === WEBSITE_SECTION.PLAYGROUND}
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
