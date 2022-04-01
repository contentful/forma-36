import React, { useContext } from 'react';
import { css, cx } from 'emotion';
import { Grid, Flex, List } from '@contentful/f36-components';
import { Forma36Context, Dark } from '@contentful/f36-core';
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
import { ThemeSwitch } from './ThemeSwitch';

const getTopbarStyles = (isDarkMode) => {
  return {
    header: css({
      display: 'grid',
      backgroundColor: isDarkMode ? tokens.gray900 : tokens.colorWhite,
      color: tokens.blue700,
      height: TOPBAR_HEIGHT,
      borderBottom: `1px solid ${isDarkMode ? tokens.gray700 : tokens.gray300}`,
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
};

interface TopbarProps {
  activeSection: string;
}

export function Topbar({ activeSection }: TopbarProps) {
  const { isDarkMode } = useContext(Forma36Context);
  const topbarStyles = getTopbarStyles(isDarkMode);
  const gridStyles = getGridStyles();

  return (
    <Grid.Item
      as="header"
      area="topbar"
      className={cx(
        topbarStyles.header,
        css({ gridTemplateColumns: 'auto auto' }),
      )}
    >
      <Flex paddingLeft="spacingXl">
        <TopbarLogo isDarkMode={isDarkMode} />
        <VersionSwitch />
        <ThemeSwitch />
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
          <List className={topbarStyles.navList}>
            <List.Item>
              <TopbarLink
                isDarkMode={isDarkMode}
                href="/"
                label="Introduction"
                isActive={activeSection === WEBSITE_SECTION.INTRODUCTION}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                isDarkMode={isDarkMode}
                href="/guidelines/accessibility"
                label="Guidelines"
                isActive={activeSection === WEBSITE_SECTION.GUIDELINES}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                isDarkMode={isDarkMode}
                href="/tokens/color-system"
                label="Tokens"
                isActive={activeSection === WEBSITE_SECTION.TOKENS}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                isDarkMode={isDarkMode}
                href="/components/accordion"
                label="Components"
                isActive={activeSection === WEBSITE_SECTION.COMPONENTS}
              />
            </List.Item>
            <List.Item>
              <TopbarLink
                isDarkMode={isDarkMode}
                href="/playground"
                label="Playground"
                isActive={activeSection === WEBSITE_SECTION.PLAYGROUND}
              />
            </List.Item>
          </List>
        </Flex>

        <Flex className={topbarStyles.docSearchContainer}>
          <DocSearch />
        </Flex>
      </Flex>
    </Grid.Item>
  );
}
