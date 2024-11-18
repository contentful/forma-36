import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Navbar, NavbarProps } from '../src';
import {
  ImageSquareIcon,
  PaintBrushIcon,
  PenNibIcon,
  PuzzlePieceIcon,
  WrenchIcon,
  MagnifyingGlassIcon,
  QuestionIcon,
  GearSixIcon,
} from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { NavbarAccountProps } from '../src/NavbarAccount/NavbarAccount';
import { NavbarSwitcherProps } from '../src/NavbarSwitcher/NavbarSwitcher';
import { TextLink } from '@contentful/f36-components';

export default {
  component: Navbar,
  title: 'Components/Navbar',
} as Meta;

const Switcher = ({
  space = 'Our super long space name',
  environment = 'master',
  isAlias = false,
  envVariant = 'master',
}: Partial<NavbarSwitcherProps>) => (
  <Navbar.Switcher
    isAlias={isAlias}
    envVariant={envVariant}
    space={space}
    environment={environment}
  />
);

const Account = ({
  avatar,
  initials,
  hasNotification,
  notificationVariant,
}: Partial<NavbarAccountProps>) => (
  <Navbar.Account
    username="Conny Contentful"
    avatar={avatar}
    initials={initials}
    hasNotification={hasNotification}
    notificationVariant={notificationVariant}
    label={'Account settings'}
  >
    <Navbar.MenuItem title="Account settings" icon={<WrenchIcon />} />
    <Navbar.MenuItem title="Dashboard" />
    <Navbar.MenuDivider />
    <Navbar.MenuItem
      title="External link"
      as="a"
      href="https://www.contentful.com"
      target="_blank"
    />
    <Navbar.MenuDivider />
    <Navbar.MenuItem title="Log out" />
  </Navbar.Account>
);

const MainItems = () => {
  const [activeItem, setActiveItem] = React.useState('Content model');

  const items = [
    {
      title: 'Content model',
      icon: <WrenchIcon />,
      isActive: activeItem === 'Content model',
      onClick: () => setActiveItem('Content model'),
    },
    {
      title: 'Content',
      icon: <PenNibIcon />,
      isActive: activeItem === 'Content',
      onClick: () => setActiveItem('Content'),
    },
    {
      title: 'Experiences',
      icon: <PaintBrushIcon />,
      isActive: activeItem === 'Experiences',
      onClick: () => setActiveItem('Experiences'),
    },
    {
      title: 'Media',
      icon: <ImageSquareIcon />,
      isActive: activeItem === 'Media',
      onClick: () => setActiveItem('Media'),
    },
  ];

  return (
    <>
      {items.map(({ title, icon, isActive, onClick }) => (
        <Navbar.Item
          key={title}
          title={title}
          icon={icon}
          isActive={isActive}
          onClick={onClick}
        />
      ))}

      <Navbar.Item title="Apps" icon={<PuzzlePieceIcon />}>
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
};

export const Basic: Story<{ initials?: string; avatar?: string }> = (args) => {
  return (
    <div style={{ minWidth: '900px' }}>
      <Navbar
        mainNavigation={<MainItems />}
        switcher={<Switcher />}
        account={<Account {...args} />}
      />
    </div>
  );
};

Basic.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};

export const BasicNoEnvironment: Story<{
  initials?: string;
  avatar?: string;
}> = (args) => {
  return (
    <div style={{ minWidth: '900px' }}>
      <Navbar
        mainNavigation={<MainItems />}
        switcher={<Navbar.Switcher space="Our super long space name" />}
        account={<Account {...args} />}
      />
    </div>
  );
};

BasicNoEnvironment.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};

export const SizeVariants: Story<NavbarProps> = () => {
  return (
    <Flex gap="spacingL" style={{ width: '97vw' }} flexDirection="column">
      <SectionHeading marginBottom="none">Fullscreen</SectionHeading>
      <Navbar
        switcher={<Switcher />}
        account={<Account />}
        variant="fullscreen"
        mainNavigation={<MainItems />}
      />

      <SectionHeading marginBottom="none">Wide (1920px)</SectionHeading>
      <Navbar
        switcher={<Switcher />}
        account={<Account />}
        mainNavigation={<MainItems />}
      />
    </Flex>
  );
};

export const WithInitialsAvatar: Story<{
  initials?: string;
  avatar?: string;
}> = (args) => {
  return (
    <div style={{ minWidth: '900px' }}>
      <Navbar
        switcher={<Switcher />}
        account={<Account {...args} />}
        mainNavigation={<MainItems />}
      />
    </div>
  );
};

WithInitialsAvatar.args = {
  initials: 'AB',
};

export const WithFallbackAvatar: Story<{}> = (args) => {
  return (
    <div style={{ minWidth: '900px' }}>
      <Navbar
        switcher={<Switcher />}
        account={<Account {...args} />}
        mainNavigation={<MainItems />}
      />
    </div>
  );
};

WithFallbackAvatar.args = {};

export const WithShortSpaceName = () => {
  return (
    <Navbar
      mainNavigation={<MainItems />}
      switcher={<Switcher space="Space" />}
      account={<Account />}
    />
  );
};

const MobileMenu = () => (
  <>
    <Navbar.MenuItem title="Content model" icon={<WrenchIcon />} />
    <Navbar.MenuItem title="Content" icon={<PenNibIcon />} />
    <Navbar.MenuItem title="Experiences" icon={<PaintBrushIcon />} />
    <Navbar.MenuItem title="Media" icon={<ImageSquareIcon />} />
    <Navbar.Submenu title="Apps" icon={<PuzzlePieceIcon />}>
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
    </Navbar.Submenu>
    <Navbar.Submenu title="Help">
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
    </Navbar.Submenu>
    <Navbar.Submenu title="Settings">
      <Navbar.MenuSectionTitle>General</Navbar.MenuSectionTitle>
      <Navbar.MenuItem title="Home" />
      <Navbar.MenuItem title="API keys" />
      <Navbar.MenuSectionTitle>Space</Navbar.MenuSectionTitle>
      <Navbar.MenuItem title="Apps" />
      <Navbar.MenuItem title="Permissions" />
    </Navbar.Submenu>
    <Navbar.Submenu title="Account">
      <Navbar.MenuItem title="Account settings" icon={<WrenchIcon />} />
      <Navbar.MenuItem title="Dashboard" />
      <Navbar.MenuDivider />
      <Navbar.MenuItem
        title="External link"
        as="a"
        href="https://www.contentful.com"
        target="_blank"
      />
      <Navbar.MenuDivider />
      <Navbar.MenuItem title="Log out" />
    </Navbar.Submenu>
  </>
);

export const Complete: Story<{ initials?: string; avatar?: string }> = (
  args,
) => {
  return (
    <Navbar
      mobileNavigation={<MobileMenu />}
      promotions={
        <>
          <TextLink>Upgrade</TextLink>
          <Navbar.Item title="Feedback"></Navbar.Item>
        </>
      }
      switcher={<Switcher />}
      mainNavigation={<MainItems />}
      account={
        <>
          <Navbar.Badge>Trial</Navbar.Badge>
          <Account {...args} />
        </>
      }
      secondaryNavigation={
        <>
          <Navbar.Item label="Quick Search" icon={<MagnifyingGlassIcon />} />
          <Navbar.Item label="Help Menu" icon={<QuestionIcon />}>
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
          </Navbar.Item>
          <Navbar.Item label="Menu Settings" icon={<GearSixIcon />}>
            <Navbar.MenuSectionTitle>General</Navbar.MenuSectionTitle>
            <Navbar.MenuItem title="Home" />
            <Navbar.MenuItem title="API keys" />
            <Navbar.MenuSectionTitle>Space</Navbar.MenuSectionTitle>
            <Navbar.MenuItem title="Apps" />
            <Navbar.MenuItem title="Permissions" />
          </Navbar.Item>
        </>
      }
    />
  );
};

Complete.args = {
  initials: 'AB',
  avatar:
    'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};

export const WithResponsiveness: Story<{
  initials?: string;
  avatar?: string;
}> = (args) => {
  return (
    <Navbar
      mobileNavigation={<MobileMenu />}
      switcher={<Switcher />}
      mainNavigation={<MainItems />}
      account={<Account {...args} />}
      secondaryNavigation={
        <>
          <Navbar.Item label="Quick Search" icon={<MagnifyingGlassIcon />} />
          <Navbar.Item label="Help Menu" icon={<QuestionIcon />}>
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
          </Navbar.Item>
          <Navbar.Item label="Menu Settings" icon={<GearSixIcon />}>
            <Navbar.MenuSectionTitle>General</Navbar.MenuSectionTitle>
            <Navbar.MenuItem title="Home" />
            <Navbar.MenuItem title="API keys" />
            <Navbar.MenuSectionTitle>Space</Navbar.MenuSectionTitle>
            <Navbar.MenuItem title="Apps" />
            <Navbar.MenuItem title="Permissions" />
          </Navbar.Item>
        </>
      }
    />
  );
};
WithResponsiveness.parameters = {
  layout: 'fullscreen',
};

export const WithDifferentEnvironments: Story<{
  initials?: string;
  avatar?: string;
}> = (args) => {
  return (
    <Flex flexDirection="column" gap="spacingL" style={{ minWidth: '900px' }}>
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Master
        </SectionHeading>

        <Navbar
          mobileNavigation={<MobileMenu />}
          mainNavigation={<MainItems />}
          switcher={<Switcher />}
          account={<Account {...args} />}
        />
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Non-master
        </SectionHeading>

        <Navbar
          mobileNavigation={<MobileMenu />}
          mainNavigation={<MainItems />}
          switcher={
            <Switcher
              envVariant="non-master"
              space="development"
              environment="development"
            />
          }
          account={<Account {...args} />}
        />
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Alias to master
        </SectionHeading>

        <Navbar
          mobileNavigation={<MobileMenu />}
          mainNavigation={<MainItems />}
          switcher={<Switcher isAlias environment="master-alias" />}
          account={<Account {...args} />}
        />
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Alias to non-master
        </SectionHeading>

        <Navbar
          mobileNavigation={<MobileMenu />}
          mainNavigation={<MainItems />}
          switcher={
            <Switcher
              isAlias
              space="development"
              environment="development-alias"
              envVariant="non-master"
            />
          }
          account={<Account {...args} />}
        />
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
    <Flex flexDirection="column" gap="spacingL" style={{ minWidth: '900px' }}>
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Warning
        </SectionHeading>

        <Navbar
          mobileNavigation={<MobileMenu />}
          switcher={<Switcher />}
          account={<Account {...args} hasNotification />}
          mainNavigation={<MainItems />}
        />
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Negative
        </SectionHeading>

        <Navbar
          mobileNavigation={<MobileMenu />}
          switcher={<Switcher />}
          account={
            <Account {...args} hasNotification notificationVariant="negative" />
          }
          mainNavigation={<MainItems />}
        />
      </Flex>

      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Info
        </SectionHeading>

        <Navbar
          mobileNavigation={<MobileMenu />}
          switcher={<Switcher />}
          account={
            <Account {...args} hasNotification notificationVariant="info" />
          }
          mainNavigation={<MainItems />}
        />
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
    <div>
      <Navbar
        mobileNavigation={<MobileMenu />}
        account={<Navbar.AccountSkeleton ariaLabel="Loading account" />}
        switcher={<Navbar.Switcher isLoading />}
        mainNavigation={
          <>
            <Navbar.ItemSkeleton estimatedWidth={100} />
            <Navbar.ItemSkeleton estimatedWidth={100} />
            <Navbar.ItemSkeleton estimatedWidth={100} />
            <Navbar.ItemSkeleton estimatedWidth={100} />
          </>
        }
      />
    </div>
  );
};

LoadingSkeleton.args = {};

export const NoSpaceContext: Story<{}> = () => {
  return (
    <div>
      <Navbar
        mobileNavigation={<MobileMenu />}
        account={<Account />}
        switcher={<Navbar.Switcher>Account Settings</Navbar.Switcher>}
        mainNavigation={<MainItems />}
      />
    </div>
  );
};
