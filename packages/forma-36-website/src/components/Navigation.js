/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { Icon, SectionHeading } from '@contentful/forma-36-react-components';

import DocSearch from './DocSearch';

const styles = {
  sidemenu: css`
    display: flex;
    flex-direction: column;
    width: 30%;
    max-width: 380px;
    padding-top: ${tokens.spacingM};
    border-right: 1px solid ${tokens.colorElementMid};
  `,

  navList: css`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${tokens.colorElementMid};
    padding: ${tokens.spacingM} 0;
    overflow-y: auto;
    color: ${tokens.colorTextMid};
  `,

  list: css`
    flex: 1 1 0;
    list-style: none;
    padding: 0;
    margin-top: 0;
  `,

  link: css`
    display: flex;
    justify-content: space-between;
    padding: ${tokens.spacingXs} ${tokens.spacingM};
    color: ${tokens.colorTextMid};
    text-decoration: none;
    transition: background-color ${tokens.transitionDurationDefault}
      ${tokens.transitionEasingDefault};

    &:hover {
      background-color: ${tokens.colorElementLight};
    }
  `,

  linkActive: css`
    background-color: ${tokens.colorPrimary};
    color: ${tokens.colorWhite};

    &:hover {
      background-color: ${tokens.colorPrimary};
    }
  `,

  linkIcon: css`
    align-self: center;
  `,

  linkGroup: css`
    cursor: pointer;
  `,

  category: css`
    margin-top: ${tokens.spacingL};

    &:first-of-type {
      margin-top: 0;
    }
  `,
};

const checkActive = (item, currentPath) => {
  if (item.link === currentPath) {
    return true;
  }

  return (
    item.menuLinks &&
    item.menuLinks.some((item) => checkActive(item, currentPath))
  );
};

const checkCategory = (name) =>
  name === 'Foundation' || name === 'Guidelines' || name === 'Components';

const MenuListItem = React.forwardRef(
  ({ item, currentPath, isActive, hierarchyLevel }, ref) => {
    const isCategory = checkCategory(item.name);
    const [isExpanded, setIsExpanded] = useState(isActive || isCategory);

    const handleToggle = (event) => {
      event.preventDefault();
      setIsExpanded(!isExpanded);
    };

    const itemOffset = { paddingLeft: `${1 + hierarchyLevel}rem` };

    return (
      <li css={[isCategory && styles.category]}>
        {item.menuLinks ? (
          <>
            <div
              css={[styles.link, styles.linkGroup, itemOffset]}
              onClick={handleToggle}
            >
              {isCategory ? (
                <SectionHeading>{item.name}</SectionHeading>
              ) : (
                <span>{item.name}</span>
              )}

              <Icon
                css={styles.linkIcon}
                color="secondary"
                size="medium"
                icon={isExpanded ? 'ChevronDown' : 'ChevronRight'}
              />
            </div>
            {isExpanded && (
              <MenuList
                menuItems={item.menuLinks}
                currentPath={currentPath}
                hierarchyLevel={hierarchyLevel + 1}
              />
            )}
          </>
        ) : (
          <Link
            ref={ref}
            css={[styles.link, isActive && styles.linkActive, itemOffset]}
            to={item.link}
            href={item.link}
          >
            {item.name}
          </Link>
        )}
      </li>
    );
  },
);

MenuListItem.displayName = 'MenuListItem';

MenuListItem.propTypes = {
  item: PropTypes.shape({ link: PropTypes.string, name: PropTypes.string })
    .isRequired,
  currentPath: PropTypes.string,
  isActive: PropTypes.bool,
  hierarchyLevel: PropTypes.number,
};

MenuListItem.defaultProps = {
  isActive: false,
  hierarchyLevel: 0,
};

const MenuList = ({ menuItems, currentPath, hierarchyLevel }) => {
  const activeRef = useRef(null);
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'center' });
    }
  }, []);
  return (
    <ul css={styles.list}>
      {menuItems.map((item, index) => {
        const active = checkActive(item, currentPath);
        return (
          <MenuListItem
            key={index}
            ref={active ? activeRef : undefined}
            item={item}
            currentPath={currentPath}
            isActive={active}
            hierarchyLevel={hierarchyLevel}
          />
        );
      })}
    </ul>
  );
};

const MenuListProps = {
  currentPath: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({ link: PropTypes.string, name: PropTypes.string }),
  ),
};

MenuList.propTypes = { ...MenuListProps, hierarchyLevel: PropTypes.number };

MenuList.defaultProps = {
  menuItems: [],
  hierarchyLevel: 0,
};

const Navigation = ({ menuItems, currentPath }) => {
  return (
    <div css={styles.sidemenu}>
      <DocSearch />

      <nav css={styles.navList} aria-label="Main Navigation">
        <MenuList
          menuItems={menuItems}
          currentPath={currentPath}
          hierarchyLevel={0}
        />
      </nav>
    </div>
  );
};

Navigation.propTypes = MenuListProps;

Navigation.defaultProps = {
  menuItems: [],
};

export default Navigation;
