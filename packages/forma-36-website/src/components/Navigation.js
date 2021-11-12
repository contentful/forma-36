/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css, cx } from 'emotion';

import tokens from '@contentful/f36-tokens';
import { SectionHeading } from '@contentful/f36-components';
import { ChevronDownIcon, ChevronRightIcon } from '@contentful/f36-icons';

import DocSearch from './DocSearch';

const styles = {
  sidemenu: css`
    display: flex;
    flex-direction: column;
    width: 30%;
    max-width: 380px;
    padding-top: ${tokens.spacingM};
    border-right: 1px solid ${tokens.gray300};
  `,

  navList: css`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${tokens.gray300};
    padding: ${tokens.spacingM} 0;
    overflow-y: auto;
    color: ${tokens.gray700};
  `,

  list: css`
    flex: 1 1 0;
    list-style: none;
    padding: 0;
    margin-top: 0;
  `,

  hidden: css`
    display: none;
  `,

  link: css`
    display: flex;
    justify-content: space-between;
    padding: ${tokens.spacingXs} ${tokens.spacingM};
    color: ${tokens.gray700};
    text-decoration: none;
    transition: background-color ${tokens.transitionDurationDefault}
      ${tokens.transitionEasingDefault};

    &:hover {
      background-color: ${tokens.gray200};
    }
  `,

  linkActive: css`
    background-color: ${tokens.colorPrimary};
    color: ${tokens.colorWhite};

    &:hover {
      background-color: ${tokens.colorPrimary};
    }
  `,

  linkGroup: css`
    align-items: center;
    cursor: pointer;
  `,

  category: css`
    margin-top: ${tokens.spacingM};

    &:first-of-type {
      margin-top: 0;
    }
  `,
};

const categories = [
  'Foundation',
  'Guidelines',
  'Contributing to Forma 36',
  'Migration guide',
  'Getting started',
  'Components',
  'Integrations',
];

const checkActive = (item, currentPath) => {
  if (item.link === currentPath) {
    return true;
  }

  return (
    item.menuLinks &&
    item.menuLinks.some((item) => checkActive(item, currentPath))
  );
};

const MenuListItem = React.forwardRef(
  ({ item, currentPath, isActive, hierarchyLevel }, ref) => {
    const isCategory = categories.includes(item.name);
    const [isExpanded, setIsExpanded] = useState(isActive || isCategory);

    const handleToggle = (event) => {
      event.preventDefault();
      setIsExpanded(!isExpanded);
    };

    const handleKeyDown = (event) => {
      if (event.nativeEvent.code === 'Enter') {
        handleToggle(event);
      }
    };

    const itemOffset = css`
      padding-left: ${1 + hierarchyLevel}rem;
    `;

    return (
      <li css={isCategory && styles.category}>
        {item.menuLinks ? (
          <>
            <div
              css={cx([styles.link, styles.linkGroup, itemOffset])}
              onClick={handleToggle}
              onKeyDown={handleKeyDown}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
            >
              {isCategory ? (
                <SectionHeading marginBottom={0}>{item.name}</SectionHeading>
              ) : (
                item.name
              )}

              {isExpanded ? (
                <ChevronDownIcon variant="secondary" />
              ) : (
                <ChevronRightIcon variant="secondary" />
              )}
            </div>
            <MenuList
              isHidden={!isExpanded}
              menuItems={item.menuLinks}
              currentPath={currentPath}
              hierarchyLevel={hierarchyLevel + 1}
            />
          </>
        ) : (
          <Link
            ref={ref}
            css={cx([styles.link, itemOffset, isActive && styles.linkActive])}
            to={item.link}
            href={item.link}
          >
            {isCategory ? (
              <SectionHeading
                marginBottom={0}
                css={cx([isActive && styles.linkActive])}
              >
                {item.name}
              </SectionHeading>
            ) : (
              item.name
            )}
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

const MenuList = ({
  menuItems,
  currentPath,
  hierarchyLevel,
  isHidden = false,
}) => {
  const activeRef = useRef(null);
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'center' });
    }
  }, []);
  return (
    <ul className={cx([styles.list, isHidden && styles.hidden])}>
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
    <div className={styles.sidemenu}>
      <DocSearch />
      <nav className={styles.navList} aria-label="Main Navigation">
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
