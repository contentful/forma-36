import React from 'react';
import { Menu, IconButton } from '@contentful/f36-components';
import { ListIcon } from '@contentful/f36-icons';

export default function MenuWithDisabledItems() {
  return (
    <Menu>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
          aria-label="toggle menu"
        />
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item isActive>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Item isDisabled>Item 4 (disabled)</Menu.Item>
        <Menu.Item>Item 5</Menu.Item>
        <Menu.Item>Item 6</Menu.Item>
        <Menu.Item isDisabled>Item 7 (disabled)</Menu.Item>
        <Menu.Item>Item 8</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
