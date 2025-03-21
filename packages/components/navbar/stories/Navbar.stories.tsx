import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Navbar } from '../src';
import { AssetIcon, EntryIcon } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { NavbarSwitcherItemProps } from '../src/NavbarSwitcherItem/NavbarSwitcherItem';
import { NavbarAccountProps } from '../src/NavbarAccount/NavbarAccount';

export default {
  component: Navbar,
  title: 'Components/Navbar',
} as Meta;

const Switcher = ({
  isAlias = false,
  envVariant = 'master',
  children = 'master',
}: Partial<NavbarSwitcherItemProps>) => (
  <Navbar.Switcher logo="">
    <Navbar.SwitcherItem isCircle>
      <span role="img" aria-label="org logo">
        ⚡️
      </span>
    </Navbar.SwitcherItem>
    <Navbar.SwitcherItem>Space</Navbar.SwitcherItem>
    <Navbar.SwitcherItem isAlias={isAlias} envVariant={envVariant}>
      {children}
    </Navbar.SwitcherItem>
  </Navbar.Switcher>
);

const Account = ({
  avatar,
  initials,
  hasNotification,
  notificationVariant,
}: Partial<NavbarAccountProps>) => (
  <Navbar.Account
    username="username"
    avatar={avatar}
    initials={initials}
    hasNotification={hasNotification}
    notificationVariant={notificationVariant}
  >
    <Navbar.MenuItem title="Account settings" />
    <Navbar.MenuItem title="Dashboard" />
    <Navbar.MenuDivider />
    <Navbar.MenuItem title="Log out" />
  </Navbar.Account>
);

const MainItems = () => (
  <>
    <Navbar.Item title="Home" isActive />
    <Navbar.Item title="Content model" />
    <Navbar.Item title="Content" icon={<EntryIcon />} />
    <Navbar.Item title="Media" icon={<AssetIcon />} />
    <Navbar.Item title="Apps">
      <Navbar.MenuItem
        title="App 1"
        icon={
          <img
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=32&h=32"
            alt="app 1"
          />
        }
      />
      <Navbar.MenuItem title="App 2" />
    </Navbar.Item>
  </>
);

export const Basic: Story<{ initials?: string; avatar?: string }> = (args) => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar switcher={<Switcher />} account={<Account {...args} />}>
        <MainItems />
      </Navbar>
    </div>
  );
};

Basic.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100',
};

export const WithInitialsAvatar: Story<{
  initials?: string;
  avatar?: string;
}> = (args) => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar switcher={<Switcher />} account={<Account {...args} />}>
        <MainItems />
      </Navbar>
    </div>
  );
};

WithInitialsAvatar.args = {
  initials: 'AB',
};

export const WithFallbackAvatar: Story<{}> = (args) => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar switcher={<Switcher />} account={<Account {...args} />}>
        <MainItems />
      </Navbar>
    </div>
  );
};

WithFallbackAvatar.args = {};

export const Complete: Story<{ initials?: string; avatar?: string }> = (
  args,
) => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar
        switcher={<Switcher />}
        account={<Account {...args} />}
        help={
          <Navbar.Help>
            <Navbar.MenuItem
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              title="Help center"
              testId="cf-ui-navbar-help-menu-help-center"
              href={'https://www.contentful.com/help/'}
            />
            <Navbar.MenuItem
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              title="Developer docs"
              testId="cf-ui-navbar-help-menu-docs"
              href="https://www.contentful.com/developers/docs/"
            />
            <Navbar.MenuItem
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              title="Training courses"
              testId="cf-ui-navbar-help-traning-center"
              href="https://training.contentful.com"
            />
            <Navbar.MenuDivider />
            <Navbar.MenuItem
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              title="Get support"
              testId="cf-ui-navbar-help-support"
              href="https://support.contentful.com"
            />
          </Navbar.Help>
        }
        search={<Navbar.Search />}
        badge={<Navbar.Badge>Trial</Navbar.Badge>}
        topRightItems={<Navbar.TopbarItem>Feedback</Navbar.TopbarItem>}
        bottomRightItems={
          <Navbar.Item title="Settings">
            <Navbar.MenuSectionTitle>General</Navbar.MenuSectionTitle>
            <Navbar.MenuItem title="Home" />
            <Navbar.MenuItem title="API keys" />
            <Navbar.MenuSectionTitle>Space</Navbar.MenuSectionTitle>
            <Navbar.MenuItem title="Apps" />
            <Navbar.MenuItem title="Permissions" />
          </Navbar.Item>
        }
      >
        <MainItems />
      </Navbar>
    </div>
  );
};

Complete.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100',
};

export const WithDifferentEnvironments: Story<{
  initials?: string;
  avatar?: string;
}> = (args) => {
  return (
    <Flex flexDirection="column" gap="spacingL" style={{ width: '900px' }}>
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Master
        </SectionHeading>

        <Navbar switcher={<Switcher />} account={<Account {...args} />}>
          <MainItems />
        </Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Non-master
        </SectionHeading>

        <Navbar
          switcher={<Switcher envVariant="non-master">development</Switcher>}
          account={<Account {...args} />}
        >
          <MainItems />
        </Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Alias to master
        </SectionHeading>

        <Navbar
          switcher={<Switcher isAlias>staging</Switcher>}
          account={<Account {...args} />}
        >
          <MainItems />
        </Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Alias to non-master
        </SectionHeading>

        <Navbar
          switcher={
            <Switcher isAlias envVariant="non-master">
              dev
            </Switcher>
          }
          account={<Account {...args} />}
        >
          <MainItems />
        </Navbar>
      </Flex>
    </Flex>
  );
};

WithDifferentEnvironments.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100',
};

export const WithAccountNotification: Story<{
  initials?: string;
  avatar?: string;
}> = (args) => {
  return (
    <Flex flexDirection="column" gap="spacingL" style={{ width: '900px' }}>
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Warning
        </SectionHeading>

        <Navbar
          switcher={<Switcher />}
          account={<Account {...args} hasNotification />}
        >
          <MainItems />
        </Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Negative
        </SectionHeading>

        <Navbar
          switcher={<Switcher />}
          account={
            <Account {...args} hasNotification notificationVariant="negative" />
          }
        >
          <MainItems />
        </Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Info
        </SectionHeading>

        <Navbar
          switcher={<Switcher />}
          account={
            <Account {...args} hasNotification notificationVariant="info" />
          }
        >
          <MainItems />
        </Navbar>
      </Flex>
    </Flex>
  );
};

WithAccountNotification.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100',
};

export const LoadingSkeleton: Story<{}> = () => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar
        account={<Navbar.AccountSkeleton ariaLabel="Loading account" />}
        switcher={
          <Navbar.Switcher>
            <Navbar.SwitcherSkeleton estimatedWidth={148} />
          </Navbar.Switcher>
        }
        bottomRightItems={<Navbar.ItemSkeleton estimatedWidth={120} />}
      >
        <Navbar.ItemSkeleton estimatedWidth={100} />
        <Navbar.ItemSkeleton estimatedWidth={100} />
        <Navbar.ItemSkeleton estimatedWidth={100} />
        <Navbar.ItemSkeleton estimatedWidth={100} />
      </Navbar>
    </div>
  );
};

LoadingSkeleton.args = {};
