import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Text, Flex } from '@contentful/f36-components';
import { css } from 'emotion';
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
  logoText: css`
    font-weight: ${tokens.fontWeightDemiBold};
    font-size: ${tokens.fontSizeXl};
    margin-left: ${tokens.spacingL};
    color: ${tokens.blue700};
  `,
  versionText: css`
    font-weight: ${tokens.fontWeightDemiBold};
    font-size: ${tokens.fontSizeL};
    margin-left: ${tokens.spacingM};
  `,
  searchNavContainer: css`
    display: flex;
    align-items: center;
  `,
  navList: css`
    list-style: none;
    padding: 0;
    display: flex;
  `,
  navListItem: css`
    margin-right: ${tokens.spacingXl};
    font-size: ${tokens.fontSizeL};
  `,
  navListLink: css`
    color: ${tokens.gray900};
    text-decoration: none;

    &:hover {
      color: ${tokens.gray700};
    }
  `,
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

export const Topbar = () => (
  <header className={styles.header}>
    <Flex flexGrow={1}>
      <Link href="/" passHref>
        <a className={styles.logoLink} href="/">
          <Logo />
          <div className={styles.logoText}>Forma 36</div>
        </a>
      </Link>
    </Flex>

    <div className={styles.searchNavContainer}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/" passHref>
              <a className={styles.logoLink} href="/">
                <Text
                  fontSize="fontSizeL"
                  lineHeight="lineHeightL"
                  fontWeight="fontWeightDemiBold"
                  as="span"
                  className={styles.navListLink}
                  marginBottom="none"
                >
                  Introduction
                </Text>
              </a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/guidelines/accessibility" passHref>
              <a className={styles.logoLink} href="/guidelines/accessibility">
                <Text
                  fontSize="fontSizeL"
                  lineHeight="lineHeightL"
                  fontWeight="fontWeightDemiBold"
                  as="span"
                  className={styles.navListLink}
                  marginBottom="none"
                >
                  Guidelines
                </Text>
              </a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/tokens/color-system" passHref>
              <a className={styles.logoLink} href="/tokens/color-system">
                <Text
                  fontSize="fontSizeL"
                  lineHeight="lineHeightL"
                  fontWeight="fontWeightDemiBold"
                  as="span"
                  className={styles.navListLink}
                  marginBottom="none"
                >
                  Tokens
                </Text>
              </a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/components/box" passHref>
              <a className={styles.logoLink} href="/components/box">
                <Text
                  fontSize="fontSizeL"
                  lineHeight="lineHeightL"
                  fontWeight="fontWeightDemiBold"
                  as="span"
                  className={styles.navListLink}
                  marginBottom="none"
                >
                  Components
                </Text>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    <Flex alignItems="center">
      <DocSearch />

      <Flex padding="spacingXs">
        <a className={styles.navListLink} href="https://v3.f36.contentful.com/">
          <Text
            fontSize="fontSizeL"
            lineHeight="lineHeightL"
            fontWeight="fontWeightDemiBold"
            as="span"
            className={styles.navListLink}
            marginBottom="none"
          >
            v3
          </Text>
        </a>
      </Flex>
    </Flex>
  </header>
);
