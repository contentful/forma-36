import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@contentful/f36-button';
import { MenuIcon, DoneIcon } from '@contentful/f36-icons';
import {
  BrowserRouter as Router,
  useHref,
  useLinkClickHandler,
} from 'react-router-dom';

import { Menu } from '../src';

export default {
  component: Menu,
  parameters: {
    chromatic: { delay: 300 },
  },
  title: 'Components/Menu',
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  render: (args) => {
    return (
      <Menu defaultIsOpen {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Menu.SectionTitle>Entry Title</Menu.SectionTitle>
          <Menu.Item>Embed existing entry</Menu.Item>
          <Menu.Item isActive>Create and embed existing entry</Menu.Item>
          <Menu.Divider />
          <Menu.SectionTitle>Help</Menu.SectionTitle>
          <Menu.Item as="a" href="https://contentful.com" target="_blank">
            About Contentful
          </Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
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
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Menu.SectionTitle>Entry Title</Menu.SectionTitle>
          <Menu.Item>Embed existing entry</Menu.Item>
          <Menu.Item>Create and embed existing entry</Menu.Item>
          <Menu.Divider />
          <Menu.Item as="a" href="https://contentful.com" target="_blank">
            About Contentful
          </Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};

export const WithDisabledItems: Story = {
  render: (args) => {
    return (
      <Menu defaultIsOpen {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
          <Menu.Item isDisabled>Item 4 (disabled)</Menu.Item>
          <Menu.Item>Item 5</Menu.Item>
          <Menu.Item>Item 6</Menu.Item>
          <Menu.Item isDisabled>Item 7 (disabled)</Menu.Item>
          <Menu.Item>Item 8</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};

export const WithIconsOnItems: Story = {
  render: (args) => {
    return (
      <Menu defaultIsOpen {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item icon={<DoneIcon />}>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item icon={<DoneIcon />}>Item 3</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};

export const WithMaxHeight: Story = {
  render: (args) => {
    return (
      <Menu defaultIsOpen {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
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
  },
};

export const WithStickyHeaderAndFooter: Story = {
  render: (args) => {
    return (
      <Menu defaultIsOpen {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List style={{ maxHeight: '300px' }}>
          <Menu.ListHeader>
            <Menu.Item>Item header</Menu.Item>
          </Menu.ListHeader>
          {[...Array(10)].map((_, index) => (
            <Menu.Item key={index}>Item {index}</Menu.Item>
          ))}
          <Menu.ListFooter>
            <Menu.Item>Item footer</Menu.Item>
          </Menu.ListFooter>
        </Menu.List>
      </Menu>
    );
  },
};

export const WithReactRouterLinks: Story = {
  render: (args) => {
    function MenuLink({ children, replace = false, to, ...props }) {
      const href = useHref(to);
      const handleClick = useLinkClickHandler(to, {
        replace,
      });

      return (
        <Menu.Item {...props} as="a" href={href} onClick={handleClick}>
          {children}
        </Menu.Item>
      );
    }

    return (
      <Router>
        <Menu defaultIsOpen {...args}>
          <Menu.Trigger>
            <IconButton
              variant="secondary"
              icon={<MenuIcon />}
              aria-label="toggle menu"
            />
          </Menu.Trigger>
          <Menu.List>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/about">About</MenuLink>
            <MenuLink to="/other">Other</MenuLink>
          </Menu.List>
        </Menu>
      </Router>
    );
  },
};

export const WithInitialFocusedItem: Story = {
  render: (args) => {
    return (
      <Router>
        <Menu defaultIsOpen {...args}>
          <Menu.Trigger>
            <IconButton
              variant="secondary"
              icon={<MenuIcon />}
              aria-label="toggle menu"
            />
          </Menu.Trigger>
          <Menu.List>
            <Menu.Item>Create an entry</Menu.Item>
            <Menu.Item isInitiallyFocused>Remove an entry</Menu.Item>
            <Menu.Item>Embed existing entry</Menu.Item>
          </Menu.List>
        </Menu>
      </Router>
    );
  },
};

export const WithSubmenu: Story = {
  render: (args) => {
    return (
      <Menu {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Create an entry</Menu.Item>
          <Menu.Submenu>
            <Menu.SubmenuTrigger>Remove an entry</Menu.SubmenuTrigger>
            <Menu.List>
              <Menu.Item>Sub item 1</Menu.Item>
              <Menu.Item>Sub item 2</Menu.Item>
              <Menu.Item>Sub item 3</Menu.Item>
            </Menu.List>
          </Menu.Submenu>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};

export const WithMultipleSubmenus: Story = {
  render: (args) => {
    return (
      <Menu {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<MenuIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Create an entry</Menu.Item>

          <Menu.Submenu>
            <Menu.SubmenuTrigger>Remove an entry</Menu.SubmenuTrigger>
            <Menu.List>
              <Menu.Item>Sub item 1</Menu.Item>

              <Menu.Submenu>
                <Menu.SubmenuTrigger>Submenu</Menu.SubmenuTrigger>
                <Menu.List>
                  <Menu.Item>Sub item 1</Menu.Item>
                  <Menu.Item>Sub item 2</Menu.Item>
                  <Menu.Item>Sub item 3</Menu.Item>
                </Menu.List>
              </Menu.Submenu>

              <Menu.Item>Sub item 3</Menu.Item>
            </Menu.List>
          </Menu.Submenu>

          <Menu.Item>Embed existing entry</Menu.Item>

          <Menu.Submenu>
            <Menu.SubmenuTrigger>Second submenu</Menu.SubmenuTrigger>
            <Menu.List>
              <Menu.Item>Sub item 1</Menu.Item>
              <Menu.Item>Sub item 2</Menu.Item>
              <Menu.Item>Sub item 3</Menu.Item>
            </Menu.List>
          </Menu.Submenu>
        </Menu.List>
      </Menu>
    );
  },
};
