import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { Icon } from '@contentful/forma-36-react-components'
import { Autocomplete } from '@contentful/forma-36-react-components/dist/alpha';

const styles = {
  navList: css`
    display: flex;
    flex-direction: column;
    flex: 0 0 320px;
    background-color: ${tokens.colorElementLightest};
    padding: ${tokens.spacing2Xl} ${tokens.spacingM};
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

class MenuListItem extends React.Component {
  state = {
    isExpanded: false,
  };

  checkOpen = (item, currentPath) => {
    if (item.link === currentPath) {
      return true;
    } else if (item.menuLinks) {
      return item.menuLinks.some(item => this.checkOpen(item, currentPath));
    }

    return false;
  };

  handleToggle = event => {
    event.preventDefault();

    this.setState(prevState => {
      return { isExpanded: !prevState.isExpanded };
    });
  };

  render() {
    const { item, currentPath } = this.props;
    const { isExpanded } = this.state;
    const isOpen = this.checkOpen(item, currentPath);

    return (
      <li css={styles.listItem}>
        <Link
          css={[
            item.menuLinks ? styles.linkParent : styles.link,
            (isOpen && styles.linkActive),
          ]}
          to={item.link}
          href={item.link}
          onClick={!item.link && (event => this.handleToggle(event))}
        >
          <span>{item.name}</span>
          {item.menuLinks && (!isExpanded && !isOpen) && (
            <Icon css={styles.linkIcon} color='secondary' icon='ChevronRight' />
          )}
          {item.menuLinks && (isExpanded || isOpen) && (
            <Icon css={styles.linkIcon} color='secondary' icon='ChevronDown' />
          )}
        </Link>
        {item.menuLinks &&
          (isExpanded || isOpen) && (
            <MenuList menuItems={item.menuLinks} currentPath={currentPath} />
          )}
      </li>
    );
  }
}

class MenuList extends React.Component {
  render() {
    const { menuItems, currentPath } = this.props;
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
  }
}

MenuList.propTypes = MenuListProps;

MenuList.defaultProps = {
  menuItems: [],
};

const Navigation = ({ menuItems, currentPath }) => (
  <nav css={styles.navList} aria-label="Main Navigation">
    <MenuList menuItems={menuItems} currentPath={currentPath} />
  </nav>
);

Navigation.propTypes = MenuListProps;

Navigation.defaultProps = {
  menuItems: [],
};

export default Navigation;
