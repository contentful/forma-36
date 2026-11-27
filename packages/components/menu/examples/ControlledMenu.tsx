import React, { useState } from 'react';
import { Menu } from '@contentful/f36-components';
import { ListIcon } from '@contentful/f36-icons';

export default function ControlledMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <Menu.TriggerButton
        variant="secondary"
        icon={<ListIcon />}
        aria-label="Toggle menu"
      />
      <Menu.List>
        <Menu.Item>Create an entry</Menu.Item>
        <Menu.Item>Remove an entry</Menu.Item>
        <Menu.Item>Embed existing entry</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
