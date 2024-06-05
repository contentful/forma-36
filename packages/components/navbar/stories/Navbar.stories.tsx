import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Navbar } from '../src';
import { NavbarMenu } from '../src/NavbarMenu/NavbarMenu';
import {
  AssetIcon,
  EntryIcon,
  SettingsIcon,
  HelpCircleIcon,
} from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
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
    <Navbar.Item title="Content model" />
    <Navbar.Item title="Content" icon={<EntryIcon />} />
    <Navbar.Item title="Media" icon={<AssetIcon />} />
    <Navbar.Item title="Apps">
      <Navbar.MenuItem
        title="App 1"
        icon={
          <img
            src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=32&h=32"
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
      <Navbar
        mainNavigation={<MainItems />}
        secondaryNavigation={
          <>
            <Switcher />
            <Account {...args} />
          </>
        }
      ></Navbar>
    </div>
  );
};

Basic.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};

export const WithInitialsAvatar: Story<{
  initials?: string;
  avatar?: string;
}> = (args) => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar
        mainNavigation={<MainItems />}
        secondaryNavigation={
          <>
            <Switcher />
            <Account {...args} />
          </>
        }
      ></Navbar>
    </div>
  );
};

WithInitialsAvatar.args = {
  initials: 'AB',
};

export const WithFallbackAvatar: Story<{}> = (args) => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar
        mainNavigation={<MainItems />}
        secondaryNavigation={
          <>
            <Switcher /> <Account {...args} />
          </>
        }
      />
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
        mainNavigation={<MainItems />}
        secondaryNavigation={
          <>
            <Navbar.TopbarItem>Feedback</Navbar.TopbarItem>
            <Navbar.Badge>Trial</Navbar.Badge>
            <Switcher />
            <Navbar.Search />
            <Navbar.Menu
              trigger={
                <Navbar.MenuTrigger
                  label="Help Menu"
                  testId="cf-settings-menu"
                  startIcon={<SettingsIcon />}
                />
              }
            >
              <Navbar.MenuSectionTitle>General</Navbar.MenuSectionTitle>
              <Navbar.MenuItem title="Home" />
              <Navbar.MenuItem title="API keys" />
              <Navbar.MenuSectionTitle>Space</Navbar.MenuSectionTitle>
              <Navbar.MenuItem title="Apps" />
              <Navbar.MenuItem title="Permissions" />
            </Navbar.Menu>
            <Navbar.Menu
              trigger={
                <Navbar.MenuTrigger
                  label="Help Menu"
                  testId="cf-settings-menu"
                  startIcon={<SettingsIcon />}
                />
              }
            >
              <Navbar.MenuSectionTitle>General</Navbar.MenuSectionTitle>
              <Navbar.MenuItem title="Home" />
              <Navbar.MenuItem title="API keys" />
              <Navbar.MenuSectionTitle>Space</Navbar.MenuSectionTitle>
              <Navbar.MenuItem title="Apps" />
              <Navbar.MenuItem title="Permissions" />
            </Navbar.Menu>
            <Account {...args} />
          </>
        }
      />
    </div>
  );
};

Complete.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
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

        <Navbar
          mainNavigation={<MainItems />}
          secondaryNavigation={
            <>
              <Switcher />
              <Account {...args} />
            </>
          }
        ></Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Non-master
        </SectionHeading>

        <Navbar
          mainNavigation={<MainItems />}
          secondaryNavigation={
            <>
              <Switcher envVariant="non-master">development</Switcher>
              <Account {...args} />
            </>
          }
        ></Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Alias to master
        </SectionHeading>

        <Navbar
          mainNavigation={<MainItems />}
          secondaryNavigation={
            <>
              <Switcher isAlias>staging</Switcher>
              <Account {...args} />
            </>
          }
        ></Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Alias to non-master
        </SectionHeading>

        <Navbar
          mainNavigation={<MainItems />}
          secondaryNavigation={
            <>
              <Switcher isAlias envVariant="non-master">
                dev
              </Switcher>
              <Account {...args} />
            </>
          }
        ></Navbar>
      </Flex>
    </Flex>
  );
};

WithDifferentEnvironments.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
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
          mainNavigation={<MainItems />}
          secondaryNavigation={
            <>
              <Switcher />
              <Account {...args} hasNotification />
            </>
          }
        ></Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Negative
        </SectionHeading>

        <Navbar
          mainNavigation={<MainItems />}
          secondaryNavigation={
            <>
              <Switcher />
              <Account
                {...args}
                hasNotification
                notificationVariant="negative"
              />
            </>
          }
        ></Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Info
        </SectionHeading>

        <Navbar
          mainNavigation={<MainItems />}
          secondaryNavigation={
            <>
              <Switcher />
              <Account {...args} hasNotification notificationVariant="info" />
            </>
          }
        ></Navbar>
      </Flex>
    </Flex>
  );
};

WithAccountNotification.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
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
