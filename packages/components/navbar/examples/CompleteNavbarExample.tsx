import React from 'react';
import { Navbar } from '@contentful/f36-components';
import { EntryIcon, ImageSquareIcon } from '@contentful/f36-icons';

export default function CompleteNavbarExample() {
  return (
    <Navbar
      switcher={
        <Navbar.Switcher logo="">
          <Navbar.SwitcherItem isCircle>
            <span role="img" aria-label="org logo">
              ⚡️
            </span>
          </Navbar.SwitcherItem>
          <Navbar.SwitcherItem>Space</Navbar.SwitcherItem>
          <Navbar.SwitcherItem envVariant="master">master</Navbar.SwitcherItem>
        </Navbar.Switcher>
      }
      account={
        <Navbar.Account
          username="username"
          avatar="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=48&h=48"
        >
          <Navbar.MenuItem title="Account settings" />
          <Navbar.MenuItem title="Dashboard" />
          <Navbar.MenuDivider />
          <Navbar.MenuItem title="Log out" />
        </Navbar.Account>
      }
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
      <Navbar.Item title="Home" isActive />
      <Navbar.Item title="Content model" />
      <Navbar.Item title="Content" icon={<EntryIcon />} />
      <Navbar.Item title="Media" icon={<ImageSquareIcon />} />
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
    </Navbar>
  );
}
