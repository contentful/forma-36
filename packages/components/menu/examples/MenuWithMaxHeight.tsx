import React from 'react';
import { Menu, IconButton } from '@contentful/f36-components';
import { ListIcon } from '@contentful/f36-icons';

export default function MenuWithMaxHeight() {
  return (
    <Menu>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
          aria-label="toggle menu"
        />
      </Menu.Trigger>
      <Menu.List style={{ maxHeight: '200px' }}>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Item>Item 4</Menu.Item>
        <Menu.Item>Item 5</Menu.Item>
        <Menu.Item>Item 6</Menu.Item>
        <Menu.Item>Item 7</Menu.Item>
        <Menu.Item>Item 8</Menu.Item>
        <Menu.Item>Item 9</Menu.Item>
        <Menu.Item>Item 10</Menu.Item>
        <Menu.Item>Item 11</Menu.Item>
        <Menu.Item>Item 12</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
