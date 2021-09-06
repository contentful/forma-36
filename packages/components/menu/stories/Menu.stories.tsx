import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Menu } from '../src';
import type { MenuProps } from '../src';
import { Button } from '@contentful/f36-button';

export default {
  component: Menu,
  title: 'Components/Menu',
} as Meta;

export const Default: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List>
        {[...Array(3)].map((_, index) => (
          <Menu.Item key={index}>Item {index}</Menu.Item>
        ))}
        <Menu.Divider />
        <Menu.Subheading>Some title</Menu.Subheading>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Item>Item 4</Menu.Item>
      </Menu.List>
    </Menu>
  );
};

export const WithDisabledItems: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Item disabled>Disabled item</Menu.Item>
        <Menu.Item>Item 4</Menu.Item>
        <Menu.Item>Item 5</Menu.Item>
        <Menu.Item disabled>Disabled item</Menu.Item>
        <Menu.Item>Item 6</Menu.Item>
      </Menu.List>
    </Menu>
  );
};

export const WithMaxHeight: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List
        // You can pass a classname with maxHeight style or a style object directly
        style={{ maxHeight: '100px' }}
      >
        {[...Array(10)].map((_, index) => (
          <Menu.Item key={index}>Item {index}</Menu.Item>
        ))}
      </Menu.List>
    </Menu>
  );
};

export const WithStickyHeaderAndFooter: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List
        headerItem={<Menu.Item>Item header</Menu.Item>}
        footerItem={<Menu.Item>Item footer</Menu.Item>}
        style={{ maxHeight: '200px' }}
      >
        {[...Array(10)].map((_, index) => (
          <Menu.Item key={index}>Item {index}</Menu.Item>
        ))}
      </Menu.List>
    </Menu>
  );
};
