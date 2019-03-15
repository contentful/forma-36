import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css, cx } from 'emotion';
import tokens from '@contentful/forma-36-tokens';

import Logo from './Logo';

const styles = {
  navigation: css`
    padding: ${tokens.spacing2Xl} 0;
    min-width: 320px;
    background-color: ${tokens.colorElementLight};
  `,
  list: css`
    list-style: none;
    padding: 0;
    margin-top: ${tokens.spacingXs};
  `,
  listItem: css`
    position: relative;
    padding-left: ${tokens.spacingL};
    margin-bottom: ${tokens.spacingXs};
  `,
  linkActive: css`
    :before {
      content: '';
      position: absolute;
      width: 5px;
      height: 100%;
      background-color: ${tokens.colorBlueBase};
      left: -${tokens.spacingL};
    }
  `,
  link: css`
    text-decoration: none;
    color: ${tokens.colorTextDark};
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
      <ul className={styles.list}>
        {menuItems &&
          menuItems.map((item, index) => (
            <li
              key={index} // eslint-disable-line
              className={cx(styles.listItem)}
            >
              <Link
                className={cx(
                  styles.link,
                  currentPath === item.link && styles.linkActive,
                )}
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
  <div className={styles.navigation}>
    <Link to="./" href="./">
      <Logo />
    </Link>
    <MenuList menuItems={menuItems} currentPath={currentPath} />
  </div>
);

Navigation.propTypes = MenuListProps;

Navigation.defaultProps = {
  menuItems: [],
};

export default Navigation;
