import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { Icon } from '@contentful/forma-36-react-components';

import DocSearch from './DocSearch';

const styles = {
  sidemenu: css`
    flex-basis: 380px;
    padding-top: 2rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  `,
  logoLink: css`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-bottom: 2rem;
    text-decoration: none;
    color: ${tokens.colorBlueBase};
  `,
  logoText: css`
    font-weight: ${tokens.fontWeightDemiBold};
    font-size: ${tokens.fontSizeXl};
    margin-left: 1rem;
  `,
  socialList: css`
    display: flex;
    list-style: none;
    padding: 0 1rem 0 2rem;
    margin: 0 0 1rem;
  `,
  socialListItem: css`
    margin-right: 0.5rem;
  `,
  socialListLink: css`
    text-decoration: none;
    color: #3c80ce;
    font-size: 0.75rem;

    &:hover {
      color: red;
    }
  `,
  navList: css`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d3dcdf;
    padding: 2rem 1rem 2rem 2rem;
    height: calc(100vh - 208px);
    overflow-y: auto;
  `,

  list: css`
    flex: 1 1 0;
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  listItem: css`
    position: relative;
    padding-left: 0;
    margin-bottom: ${tokens.spacingXs};

    ul {
      position: relative;
    }

    li {
      padding-left: ${tokens.spacingL};
    }
  `,

  linkActive: css`
    font-weight: ${tokens.fontWeightDemiBold};
  `,

  link: css`
    text-decoration: none;
    display: flex;
    color: ${tokens.colorTextMid};
    position: relative;
  `,

  linkParent: css`
    text-decoration: none;
    background-color: ${tokens.colorElementLight};
    display: flex;
    justify-content: space-between;
    color: ${tokens.colorTextMid};
    position: relative;
    border-radius: 4px;
    padding: ${tokens.spacingXs};
    cursor: pointer;
  `,

  linkIcon: css`
    align-self: center;
  `,

  item: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${tokens.spacingM} 0;
    border-bottom: 1px solid ${tokens.colorElementLight};
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
    <circle fill={tokens.colorBlueBase} cx="45" cy="10" r="10" />
    <circle fill={tokens.colorBlueBase} cx="10" cy="10" r="10" />
    <circle fill={tokens.colorBlueBase} cx="80" cy="10" r="10" />
    <circle fill={tokens.colorBlueBase} cx="10" cy="45" r="10" />
    <circle fill={tokens.colorBlueBase} cx="45" cy="45" r="10" />
    <circle fill={tokens.colorBlueBase} cx="10" cy="80" r="10" />
  </svg>
);

const MenuListProps = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({ link: PropTypes.string, name: PropTypes.string }),
  ),
  currentPath: PropTypes.string.isRequired,
};

const MenuListItem = ({ item, currentPath }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const checkOpen = (item, currentPath) => {
    if (item.link === currentPath) {
      return true;
    } else if (item.menuLinks) {
      return item.menuLinks.some(item => checkOpen(item, currentPath));
    }

    return false;
  };

  const handleToggle = event => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const isOpen = checkOpen(item, currentPath);
  const iconName =
    item.menuLinks && (isExpanded || isOpen) ? 'ChevronDown' : 'ChevronRight';

  return (
    <li css={styles.listItem}>
      {!item.link ? (
        <div
          css={[styles.linkParent, isOpen && styles.linkActive]}
          onClick={handleToggle}
        >
          <span>{item.name}</span>
          <Icon css={styles.linkIcon} color="secondary" icon={iconName} />
        </div>
      ) : (
        <Link
          css={[styles.link, isOpen && styles.linkActive]}
          to={item.link}
          href={item.link}
        >
          <span>{item.name}</span>
        </Link>
      )}
      {item.menuLinks && (isExpanded || isOpen) && (
        <MenuList menuItems={item.menuLinks} currentPath={currentPath} />
      )}
    </li>
  );
};

MenuListItem.propTypes = {
  item: PropTypes.shape({ link: PropTypes.string, name: PropTypes.string })
    .isRequired,
  currentPath: PropTypes.string.isRequired,
};

const MenuList = ({ menuItems, currentPath }) => {
  return (
    <ul css={styles.list}>
      {menuItems &&
        menuItems.map((item, index) => (
          <MenuListItem
            key={index}
            item={item}
            menuItems={menuItems}
            currentPath={currentPath}
          />
        ))}
    </ul>
  );
};

MenuList.propTypes = MenuListProps;

MenuList.defaultProps = {
  menuItems: [],
};

const Navigation = ({ menuItems, currentPath }) => (
  <div css={styles.sidemenu}>
    <Link to="/" css={styles.logoLink}>
      <Logo />
      <div css={styles.logoText}>Forma 36</div>
    </Link>

    <nav css={styles.social}>
      <ul css={styles.socialList}>
        <li css={styles.socialListItem}>
          <a
            css={styles.socialListLink}
            href="https://github.com/contentful/forma-36"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li css={styles.socialListItem}>
          <a
            css={styles.socialListLink}
            href="https://contentful.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li css={styles.socialListItem}>
          <a
            css={styles.socialListLink}
            href="https://www.contentful.com/developers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the community
          </a>
        </li>
      </ul>
    </nav>

    <DocSearch />
    <nav css={styles.navList} aria-label="Main Navigation">
      <MenuList menuItems={menuItems} currentPath={currentPath} />
    </nav>
  </div>
);

Navigation.propTypes = MenuListProps;

Navigation.defaultProps = {
  menuItems: [],
};

export default Navigation;
