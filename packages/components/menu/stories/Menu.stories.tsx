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
        {[...Array(10)].map((_, index) => (
          <Menu.ListItem key={index}>Item {index}</Menu.ListItem>
        ))}
      </Menu.List>
    </Menu>
  );
};
