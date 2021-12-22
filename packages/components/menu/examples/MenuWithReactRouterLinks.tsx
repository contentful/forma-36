import React from 'react';
import { Router, Link } from 'react-router-dom';
import { Menu, IconButton } from '@contentful/f36-components';
import { MenuIcon } from '@contentful/f36-icons';

export default function MenuWithReactRouterLinks() {
  return (
    <Router>
      <Menu>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Link to="/" component={Menu.Item} as="a">
            Home
          </Link>
          <Link to="/about" component={Menu.Item} as="a">
            About
          </Link>
          <Link to="/other" component={Menu.Item} as="a">
            Other
          </Link>
        </Menu.List>
      </Menu>
    </Router>
  );
}
