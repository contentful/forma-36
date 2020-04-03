import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { Icon } from '@contentful/forma-36-react-components';

import DocSearch from './DocSearch';

const styles = {
  navList: css`
    display: flex;
    flex-direction: column;
    flex: 0 0 320px;
    background-color: ${tokens.colorElementLightest};
    padding: ${tokens.spacingM} ${tokens.spacingM} ${tokens.spacing4Xl};
  `,

  list: css`
    flex: 1 1 0;
    list-style: none;
    padding: 0;
    margin-top: ${tokens.spacingXs};
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
  <nav css={styles.navList} aria-label="Main Navigation">
    <DocSearch />
    <MenuList menuItems={menuItems} currentPath={currentPath} />
  </nav>
);

Navigation.propTypes = MenuListProps;

Navigation.defaultProps = {
  menuItems: [],
};

export default Navigation;
