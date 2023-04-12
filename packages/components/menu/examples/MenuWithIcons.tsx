import React from 'react';
import { Menu, IconButton } from '@contentful/f36-components';
import { MenuIcon, DoneIcon } from '@contentful/f36-icons';

export default function MenuWithIcons() {
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
        <Menu.Item startIcon={<DoneIcon />}>Item 1</Menu.Item>
        <Menu.Item endIcon={<MenuIcon />}>Item 2</Menu.Item>
        <Menu.Item startIcon={<DoneIcon />} endIcon={<MenuIcon />}>
          Item 3
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}
