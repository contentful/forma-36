import React from 'react';
import {
  MemoryRouter as Router,
  useHref,
  useLinkClickHandler,
} from 'react-router-dom';
import { Menu, IconButton } from '@contentful/f36-components';
import { ListIcon } from '@contentful/f36-icons';

function MenuLink({ children, replace = false, to, ...props }) {
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to, {
    replace,
  });

  return (
    <Menu.Item {...props} as="a" href={href} onClick={handleClick}>
      {children}
    </Menu.Item>
  );
}

export default function MenuWithReactRouterLinks() {
  return (
    <Router>
      <Menu>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<ListIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/other">Other</MenuLink>
        </Menu.List>
      </Menu>
    </Router>
  );
}
