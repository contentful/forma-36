import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Menu } from '../src';
import type { MenuProps } from '../src';
import { Button } from '@contentful/f36-button';
import {} from '@contentful/f36-text-link';

export default {
  component: Menu,
  title: 'Components/Menu',
} as Meta;

export const Default: Story<MenuProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <Menu
      {...args}
      isOpen={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List>
        <Menu.SectionTitle>Entry Title</Menu.SectionTitle>
        <Menu.Item>Embed exising entry</Menu.Item>
        <Menu.Item>Create and embed exising entry</Menu.Item>
        <Menu.Divider />
        <Menu.Item as="a" href="https://contentful.com" target="_blank">
          About Contentful
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
};

export const WithDisabledItems: Story<MenuProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <Menu
      {...args}
      isOpen={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Item disabled>Item 4 (disabled)</Menu.Item>
        <Menu.Item>Item 5</Menu.Item>
        <Menu.Item>Item 6</Menu.Item>
        <Menu.Item disabled>Item 7 (disabled)</Menu.Item>
        <Menu.Item>Item 8</Menu.Item>
      </Menu.List>
    </Menu>
  );
};

export const WithMaxHeight: Story<MenuProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <Menu
      {...args}
      isOpen={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List
        // You can pass a classname with maxHeight style or a style object directly
        style={{ maxHeight: '200px' }}
      >
        {[...Array(20)].map((_, index) => (
          <Menu.Item key={index}>Item {index}</Menu.Item>
        ))}
      </Menu.List>
    </Menu>
  );
};

export const WithStickyHeaderAndFooter: Story<MenuProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Menu
      {...args}
      isOpen={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Menu.Trigger>
        <Button>Toggle</Button>
      </Menu.Trigger>
      <Menu.List style={{ maxHeight: '300px' }}>
        <Menu.ListHeader>
          <Menu.Item>Item header</Menu.Item>
        </Menu.ListHeader>
        {/* @ts-expert-error ignore */}
        {[...Array(10)].map((_, index) => (
          <Menu.Item key={index}>Item {index}</Menu.Item>
        ))}
        <Menu.ListFooter>
          <Menu.Item>Item footer</Menu.Item>
        </Menu.ListFooter>
      </Menu.List>
    </Menu>
  );
};

Default.parameters = {
  chromatic: { delay: 300 },
};
WithMaxHeight.parameters = {
  chromatic: { delay: 300 },
};
WithStickyHeaderAndFooter.parameters = {
  chromatic: { delay: 300 },
};
WithDisabledItems.parameters = {
  chromatic: { delay: 300 },
};
