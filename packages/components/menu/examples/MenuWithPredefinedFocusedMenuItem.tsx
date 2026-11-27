import React from 'react';
import { Menu } from '@contentful/f36-components';
import { ListIcon } from '@contentful/f36-icons';

export default function MenuWithPredefinedFocusedMenuItem() {
  return (
    <Menu>
      <Menu.TriggerButton
        variant="secondary"
        icon={<ListIcon />}
        aria-label="Toggle menu"
      />
      <Menu.List>
        <Menu.Item>Create an entry</Menu.Item>
        <Menu.Item isInitiallyFocused>Remove an entry</Menu.Item>
        <Menu.Item>Embed existing entry</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
