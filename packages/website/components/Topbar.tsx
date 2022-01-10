import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Subheading, Flex } from '@contentful/f36-components';
import { css } from 'emotion';
import Link from 'next/link';
import { DocSearch } from './DocSearch';

export const TopbarHeight = '70px';

const styles = {
  header: css`
    display: grid;
    grid-template-columns: 320px auto 320px;
    column-gap: 0;
    row-gap: 0;
    background-color: ${tokens.colorWhite};
    color: ${tokens.blue700};
    padding: 0 ${tokens.spacingXl};
    height: ${TopbarHeight};
    box-shadow: inset 0px -1px 0px #e7ebee;
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
    margin-left: ${tokens.spacingXl};
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
  >
    <circle fill={tokens.blue700} cx="45" cy="10" r="10" />
    <circle fill={tokens.blue700} cx="10" cy="10" r="10" />
    <circle fill={tokens.blue700} cx="80" cy="10" r="10" />
    <circle fill={tokens.blue700} cx="10" cy="45" r="10" />
    <circle fill={tokens.blue700} cx="45" cy="45" r="10" />
    <circle fill={tokens.blue700} cx="10" cy="80" r="10" />
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
                <Subheading className={styles.navListLink} marginBottom="none">
                  Introduction
                </Subheading>
              </a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/guidelines/accessibility" passHref>
              <a className={styles.logoLink} href="/guidelines/accessibility">
                <Subheading className={styles.navListLink} marginBottom="none">
                  Guidelines
                </Subheading>
              </a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/tokens/color-system" passHref>
              <a className={styles.logoLink} href="/tokens/color-system">
                <Subheading className={styles.navListLink} marginBottom="none">
                  Tokens
                </Subheading>
              </a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/components/box" passHref>
              <a className={styles.logoLink} href="/components/box">
                <Subheading className={styles.navListLink} marginBottom="none">
                  Components
                </Subheading>
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
          v3
        </a>
      </Flex>
    </Flex>
  </header>
);
