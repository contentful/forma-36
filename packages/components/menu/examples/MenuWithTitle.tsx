import React from 'react';
import { Menu, IconButton } from '@contentful/f36-components';
import { ListIcon } from '@contentful/f36-icons';

export default function MenuWithTitle() {
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
        <Menu.SectionTitle>Entry</Menu.SectionTitle>
        <Menu.Item>Create an entry</Menu.Item>
        <Menu.Item>Remove an entry</Menu.Item>
        <Menu.Item>Embed existing entry</Menu.Item>
        <Menu.Divider />
        <Menu.Item as="a" href="https://contentful.com" target="_blank">
          About Contentful
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}
