import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Navbar, type NavbarProps } from '../src';
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
  hasNotification,
  notificationVariant,
}: Partial<NavbarAccountProps>) => (
  <Navbar.Account
    username="username"
    avatar="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=48&h=48"
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
            src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=32&h=32"
            alt="app 1"
          />
        }
      />
      <Navbar.MenuItem title="App 2" />
    </Navbar.Item>
  </>
);

export const Basic: Story<NavbarProps> = () => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar switcher={<Switcher />} account={<Account />}>
        <MainItems />
      </Navbar>
    </div>
  );
};

export const Complete: Story<NavbarProps> = () => {
  return (
    <div style={{ width: '900px' }}>
      <Navbar
        switcher={<Switcher />}
        account={<Account />}
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

export const WithDifferentEnviromnments: Story<NavbarProps> = () => {
  return (
    <Flex flexDirection="column" gap="spacingL" style={{ width: '900px' }}>
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Master
        </SectionHeading>

        <Navbar switcher={<Switcher />} account={<Account />}>
          <MainItems />
        </Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Non-master
        </SectionHeading>

        <Navbar
          switcher={<Switcher envVariant="non-master">development</Switcher>}
          account={<Account />}
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
          account={<Account />}
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
          account={<Account />}
        >
          <MainItems />
        </Navbar>
      </Flex>
    </Flex>
  );
};

export const WithAccountNotification: Story<NavbarProps> = () => {
  return (
    <Flex flexDirection="column" gap="spacingL" style={{ width: '900px' }}>
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Warning
        </SectionHeading>

        <Navbar switcher={<Switcher />} account={<Account hasNotification />}>
          <MainItems />
        </Navbar>
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Negative
        </SectionHeading>

        <Navbar
          switcher={<Switcher />}
          account={<Account hasNotification notificationVariant="negative" />}
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
          account={<Account hasNotification notificationVariant="info" />}
        >
          <MainItems />
        </Navbar>
      </Flex>
    </Flex>
  );
};

export const LoadingSkeleton: Story<NavbarProps> = () => {
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
