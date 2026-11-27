import React from 'react';
import { Menu } from '@contentful/f36-components';

export default function MenuWithTextButtonAsTrigger() {
  return (
    <Menu>
      <Menu.TriggerButton title="Toggle menu" />
      <Menu.List>
        <Menu.Item>Create an entry</Menu.Item>
        <Menu.Item>Remove an entry</Menu.Item>
        <Menu.Item>Embed existing entry</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
