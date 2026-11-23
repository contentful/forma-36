import React from 'react';
import { Menu } from '@contentful/f36-components';
import { ListIcon, CheckIcon } from '@contentful/f36-icons';

export default function MenuWithIcons() {
  return (
    <Menu>
      <Menu.TriggerButton
        variant="secondary"
        icon={<ListIcon />}
        aria-label="toggle menu"
      />
      <Menu.List>
        <Menu.Item icon={<CheckIcon />}>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item icon={<CheckIcon />}>Item 3</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
