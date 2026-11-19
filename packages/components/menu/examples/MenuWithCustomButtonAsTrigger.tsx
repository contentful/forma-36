import React from 'react';
import { Menu } from '@contentful/f36-components';

export default function MenuWithCustomButtonAsTrigger() {
  return (
    <Menu>
      <Menu.Trigger>
        <button type="button">toggle menu</button>
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item>Create an entry</Menu.Item>
        <Menu.Item>Remove an entry</Menu.Item>
        <Menu.Item>Embed existing entry</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
