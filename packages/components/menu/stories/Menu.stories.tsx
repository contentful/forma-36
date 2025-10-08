import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { IconButton } from '@contentful/f36-button';
import { ListIcon, CheckIcon } from '@contentful/f36-icons';
import {
  BrowserRouter as Router,
  useHref,
  useLinkClickHandler,
} from 'react-router-dom';
import { css } from 'emotion';
import { Menu, type MenuProps } from '../src';

export default {
  component: Menu,
  title: 'Components/Menu',
} as Meta;

export const Basic: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
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
};

export const Controlled: Story<MenuProps> = (args) => {
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
          icon={<ListIcon />}
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
};

export const WithDisabledItems: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
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
};

export const WithIconsOnItems: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
          aria-label="toggle menu"
        />
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item icon={<CheckIcon />}>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item icon={<CheckIcon />}>Item 3</Menu.Item>
      </Menu.List>
    </Menu>
  );
};

export const WithMaxHeight: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
          aria-label="toggle menu"
        />
      </Menu.Trigger>
      <Menu.List
        // You can pass a classname with maxHeight style or a style object directly
        style={{ maxHeight: '200px' }}
      >
        {[...Array(20)].map((_, index) => {
          const uniqueKey = `item-${index}`;
          return <Menu.Item key={uniqueKey}>Item {index}</Menu.Item>;
        })}
      </Menu.List>
    </Menu>
  );
};

export const WithStickyHeaderAndFooter: Story<MenuProps> = (args) => {
  return (
    <Menu defaultIsOpen {...args}>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
          aria-label="toggle menu"
        />
      </Menu.Trigger>
      <Menu.List style={{ maxHeight: '300px' }}>
        <Menu.ListHeader>
          <Menu.Item>Item header</Menu.Item>
        </Menu.ListHeader>
        {[...Array(10)].map((_, index) => {
          const uniqueKey = `sticky-header-${index}`;
          return <Menu.Item key={uniqueKey}>Item {index}</Menu.Item>;
        })}
        <Menu.ListFooter>
          <Menu.Item>Item footer</Menu.Item>
        </Menu.ListFooter>
      </Menu.List>
    </Menu>
  );
};

export const WithReactRouterLinks: Story<MenuProps> = (args) => {
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
            icon={<ListIcon />}
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
};

export const WithInitialFocusedItem: Story<MenuProps> = (args) => {
  return (
    <Router>
      <Menu defaultIsOpen {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<ListIcon />}
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
};

export const WithSubmenu: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
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
};
export const WithSubmenuDifferentAlignments: Story<MenuProps> = (args) => {
  const styles = {
    container: css({
      backgroundColor: 'lightblue',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '98vw',
    }),
    wrapper: css({
      display: 'flex',
      width: '95vw',
      justifyContent: 'right',
      backgroundColor: 'pink',
      overflow: 'hidden',
    }),
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Menu {...args}>
          <Menu.Trigger>
            <IconButton
              variant="secondary"
              icon={<ListIcon />}
              aria-label="toggle menu"
            />
          </Menu.Trigger>
          <Menu.List>
            <Menu.Item>Create an entry</Menu.Item>
            <Menu.Submenu isAutoalignmentEnabled>
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
      </div>
    </div>
  );
};

export const WithMultipleSubmenus: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<ListIcon />}
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
};

Basic.parameters = {
  chromatic: { delay: 300 },
};
Controlled.parameters = {
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
WithReactRouterLinks.parameters = {
  chromatic: { delay: 300 },
};
WithInitialFocusedItem.parameters = {
  chromatic: { delay: 300 },
};
WithSubmenu.parameters = {
  chromatic: { delay: 300 },
};
WithMultipleSubmenus.parameters = {
  chromatic: { delay: 300 },
};
