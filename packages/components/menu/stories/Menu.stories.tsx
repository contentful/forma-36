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
    <Menu {...args}>
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List>
        {[...Array(5)].map((_, index) => (
          <Menu.ListItem key={index}>Item {index}</Menu.ListItem>
        ))}
        {/* <Menu.ListSeparator />
        <Menu.ListTitle >Some title</Menu.ListHeader> */}
      </Menu.List>
    </Menu>
  );
};

export const WithDisabledItems: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List>
        <Menu.ListItem>Item 1</Menu.ListItem>
        <Menu.ListItem>Item 2</Menu.ListItem>
        <Menu.ListItem>Item 3</Menu.ListItem>
        <Menu.ListItem disabled>Disabled item</Menu.ListItem>
        <Menu.ListItem>Item 4</Menu.ListItem>
        <Menu.ListItem>Item 5</Menu.ListItem>
        <Menu.ListItem disabled>Disabled item</Menu.ListItem>
        <Menu.ListItem>Item 6</Menu.ListItem>
      </Menu.List>
    </Menu>
  );
};

export const WithMaxHeight: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List
        // You can pass a classname with maxHeight style or a style object itself
        style={{ maxHeight: '100px' }}
      >
        {[...Array(10)].map((_, index) => (
          <Menu.ListItem key={index}>Item {index}</Menu.ListItem>
        ))}
      </Menu.List>
    </Menu>
  );
};

export const WithStickyHeaderAndFooter: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List
        headerItem={<Menu.ListItem>Item header</Menu.ListItem>}
        footerItem={<Menu.ListItem>Item footer</Menu.ListItem>}
        style={{ maxHeight: '200px' }}
      >
        {[...Array(10)].map((_, index) => (
          <Menu.ListItem key={index}>Item {index}</Menu.ListItem>
        ))}
      </Menu.List>
    </Menu>
  );
};
