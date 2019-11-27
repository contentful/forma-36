import React from 'react';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const styles = {
  header: css`
    display: flex;
    background-color: ${tokens.colorBlueDark};
    color: #fff;
    padding: 0 ${tokens.spacingXl};
    height: 70px;
    align-items: center;
  `,
  logo: css`
    display: flex;
    flex: 1 0 0;
    text-decoration: none;
    color: #fff;
  `,
  logoLink: css`
    display: flex;
    text-decoration: none;
    color: #fff;
  `,
  // TODO: Sort out vertical text alignment
  logoText: css`
    font-weight: ${tokens.fontWeightDemiBold};
    font-size: ${tokens.fontSizeXl};
    margin-left: ${tokens.spacingL};
  `,
  navList: css`
    list-style: none;
    display: flex;
  `,
  navListItem: css`
    margin-left: ${tokens.spacingM};
    font-size: ${tokens.fontSizeL};
  `,

  navListLink: css`
    color: #fff;
    text-decoration: none;
  `,
};

const Logo = () => (
  <svg
    x="0px"
    y="0px"
    width="32px"
    height="32px"
    viewBox="0 0 90 90"
    enable-background="new 0 0 90 90"
  >
    <circle fill="#ffffff" cx="45" cy="10" r="10" />
    <circle fill="#ffffff" cx="10" cy="10" r="10" />
    <circle fill="#ffffff" cx="80" cy="10" r="10" />
    <circle fill="#ffffff" cx="10" cy="45" r="10" />
    <circle fill="#ffffff" cx="45" cy="45" r="10" />
    <circle fill="#ffffff" cx="10" cy="80" r="10" />
  </svg>
);

const Header = () => (
  <header css={styles.header}>
    <div css={styles.logo}>
      <Link to="/" css={styles.logoLink}>
        <Logo />
        <div css={styles.logoText}>Forma 36</div>
      </Link>
    </div>
    <nav css={styles.nav}>
      <ul css={styles.navList}>
        <li css={styles.navListItem}>
          <a
            css={styles.navListLink}
            href="https://github.com/contentful/forma-36"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li css={styles.navListItem}>
          <a
            css={styles.navListLink}
            href="https://contentful.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li css={styles.navListItem}>
          <a
            css={styles.navListLink}
            href="https://www.contentful.com/developers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the community
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
