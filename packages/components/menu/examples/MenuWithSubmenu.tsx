import React from 'react';
import { Menu, IconButton } from '@contentful/f36-components';
import { MenuIcon } from '@contentful/f36-icons';

export default function MenuWithSubmenu() {
  return (
    <Menu>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<MenuIcon />}
          aria-label="toggle menu"
        />
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item>Create an entry</Menu.Item>
        <Menu.Submenu>
          <Menu.SubmenuTrigger>Remove an entry</Menu.SubmenuTrigger>
          <Menu.List>
            <Menu.Item>Sub item 1</Menu.Item>
            <Menu.Item>Sub item 2</Menu.Item>
            <Menu.Item>Sub item 3</Menu.Item>
          </Menu.List>
        </Menu.Submenu>
        <Menu.Item>Embed existing entry</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
