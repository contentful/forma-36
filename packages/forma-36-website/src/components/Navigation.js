import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';

import Logo from './Logo';

const styles = {
  navList: css`
    display: flex;
    flex-direction: column;
    flex: 0 0 320px;
    background-color: ${tokens.colorElementLight};
    padding: ${tokens.spacing2Xl} ${tokens.spacingXl};
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
    font-weight: bold;
  `,

  link: css`
    text-decoration: none;
    color: ${tokens.colorTextMid};
    position: relative;
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

class MenuList extends React.Component {
  checkOpen = (item, currentPath) => {
    if (item.link === currentPath) {
      return true;
    } else if (item.menuLinks) {
      return item.menuLinks.some(item => this.checkOpen(item, currentPath));
    }
    return false;
  };

  render() {
    const { menuItems, currentPath } = this.props;
    return (
      <ul css={styles.list}>
        {menuItems &&
          menuItems.map((item, index) => (
            <li
              key={index} // eslint-disable-line
              css={styles.listItem}
            >
              <Link
                css={[
                  styles.link,
                  currentPath === item.link && styles.linkActive,
                ]}
                to={item.link}
                href={item.link}
              >
                {item.name}
              </Link>
              {this.checkOpen(item, currentPath) && (
                <MenuList
                  menuItems={item.menuLinks}
                  currentPath={currentPath}
                />
              )}
            </li>
          ))}
      </ul>
    );
  }
}

MenuList.propTypes = MenuListProps;

MenuList.defaultProps = {
  menuItems: [],
};
const Navigation = ({ menuItems, currentPath }) => (
  <nav css={styles.navList}>
    <MenuList menuItems={menuItems} currentPath={currentPath} />
  </nav>
);

Navigation.propTypes = MenuListProps;

Navigation.defaultProps = {
  menuItems: [],
};

export default Navigation;
