import React from 'react';
import { Menu } from '@contentful/f36-components';
import { ListIcon } from '@contentful/f36-icons';

export default function MenuOpenByDefault() {
  return (
    <Menu defaultIsOpen>
      <Menu.TriggerButton
        variant="secondary"
        icon={<ListIcon />}
        aria-label="toggle menu"
      />
      <Menu.List>
        <Menu.Item>Create an entry</Menu.Item>
        <Menu.Item>Remove an entry</Menu.Item>
        <Menu.Item>Embed existing entry</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
