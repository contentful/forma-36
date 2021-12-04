import React from 'react';
import { Menu, Button } from '@contentful/f36-components';

export default function MenuWithButtonAsTrigger() {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>toggle menu</Button>
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item>Create an entry</Menu.Item>
        <Menu.Item>Remove an entry</Menu.Item>
        <Menu.Item>Embed existing entry</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
