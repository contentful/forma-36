import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Text, Flex } from '@contentful/f36-components';
import { css, cx } from 'emotion';
import Link from 'next/link';

import { DocSearch } from './DocSearch';

export const TopbarHeight = '70px';

const styles = {
  header: css`
    display: grid;
    grid-template-columns: 3fr 7fr 2fr;
    background-color: ${tokens.colorWhite};
    color: ${tokens.blue700};
    padding: 0 ${tokens.spacingXl};
    height: ${TopbarHeight};
    border-bottom: 1px solid ${tokens.gray300};
  `,
  logoLink: css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
  `,
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
    width="32px"
    height="32px"
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
  const isGuidelines = currentPage.includes('/guidelines');
  const isTokens = currentPage.includes('/tokens');
  const isComponents = currentPage.includes('/components');
  const isIntroduction = !isGuidelines && !isTokens && !isComponents;

  return (
    <header className={styles.header}>
      <Flex flexGrow={1}>
        <Link href="/" passHref>
          <a className={styles.logoLink} href="/">
            <Logo />
            <Text
              fontSize="fontSizeXl"
              fontWeight="fontWeightDemiBold"
              fontColor="blue700"
              marginLeft="spacingL"
            >
              Forma 36
            </Text>
          </a>
        </Link>
      </Flex>

      <Flex as="nav" alignItems="center">
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
              href="/components/box"
              label="Components"
              isActive={isComponents}
            />
          </li>
        </ul>
      </Flex>

      <Flex alignItems="center">
        <DocSearch />
        <TopbarLink href="https://v3.f36.contentful.com/" label="v3" />
      </Flex>
    </header>
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
