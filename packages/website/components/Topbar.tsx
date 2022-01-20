import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import { Grid, Text, Flex, Menu, Button } from '@contentful/f36-components';
import { ChevronDownIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

import { getGridStyles, TOPBAR_HEIGHT } from './Layout/getGridStyles';
import { DocSearch } from './DocSearch';

const styles = {
  header: css({
    display: 'grid',
    backgroundColor: tokens.colorWhite,
    color: tokens.blue700,
    height: TOPBAR_HEIGHT,
    borderBottom: `1px solid ${tokens.gray300}`,
  }),
  logoLink: css({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: tokens.colorWhite,
  }),
  navElements: css({
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    '@media screen and (min-width: 1600px)': {
      gridTemplateColumns: '1fr 720px 240px 1fr',
    },
  }),
  navListContainer: css({
    '@media screen and (min-width: 1600px)': { gridColumnStart: 2 },
  }),
  docSearchContainer: css({
    '@media screen and (min-width: 1600px)': { gridColumnStart: 4 },
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
  navListLink: css({
    color: tokens.gray900,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  active: css({
    color: tokens.blue700,
    textDecoration: 'underline',
  }),
};

const Logo = () => (
  <svg
    x="0px"
    y="0px"
    width="25px"
    height="25px"
    viewBox="0 0 90 90"
    enableBackground="new 0 0 90 90"
    fill={tokens.blue700}
  >
    <circle cx="45" cy="10" r="10" />
    <circle cx="10" cy="10" r="10" />
    <circle cx="80" cy="10" r="10" />
    <circle cx="10" cy="45" r="10" />
    <circle cx="45" cy="45" r="10" />
    <circle cx="10" cy="80" r="10" />
  </svg>
);

interface TopbarProps {
  currentPage: string;
}

export const Topbar = ({ currentPage }: TopbarProps) => {
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
        <Link href="/" passHref>
          <a className={styles.logoLink} href="/">
            <Logo />
            <Text
              fontSize="fontSizeL"
              fontWeight="fontWeightDemiBold"
              fontColor="blue700"
              marginLeft="spacingS"
            >
              Forma 36
            </Text>
          </a>
        </Link>

        <Flex alignItems="center" marginLeft="spacingM">
          <Menu usePortal={false}>
            <Menu.Trigger>
              <Button size="small" endIcon={<ChevronDownIcon />}>
                v4
              </Button>
            </Menu.Trigger>
            <Menu.List>
              <Menu.Item as="a" href="https://f36.contentful.com/">
                v4
              </Menu.Item>
              <Menu.Item as="a" href="https://v3.f36.contentful.com/">
                v3
              </Menu.Item>
            </Menu.List>
          </Menu>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="spacingL"
        paddingRight="spacingL"
        className={styles.navElements}
      >
        <Flex as="nav" alignItems="center" className={styles.navListContainer}>
          <ul className={styles.navList}>
            <li>
              <TopbarLink
                href="/"
                label="Introduction"
                isActive={isIntroduction}
              />
            </li>
            <li>
              <TopbarLink
                href="/guidelines/accessibility"
                label="Guidelines"
                isActive={isGuidelines}
              />
            </li>
            <li>
              <TopbarLink
                href="/tokens/color-system"
                label="Tokens"
                isActive={isTokens}
              />
            </li>
            <li>
              <TopbarLink
                href="/components/accordion"
                label="Components"
                isActive={isComponents}
              />
            </li>
          </ul>
        </Flex>

        <Flex className={styles.docSearchContainer}>
          <DocSearch />
        </Flex>
      </Flex>
    </Grid.Item>
  );
};

function TopbarLink({ href, label, isActive = false }) {
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        className={cx(styles.navListLink, { [styles.active]: isActive })}
        fontSize="fontSizeL"
        lineHeight="lineHeightL"
        fontWeight="fontWeightDemiBold"
        marginBottom="none"
      >
        {label}
      </Text>
    </Link>
  );
}
