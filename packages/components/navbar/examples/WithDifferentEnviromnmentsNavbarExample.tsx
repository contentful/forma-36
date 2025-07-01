import React from 'react';
import { Navbar } from '@contentful/f36-navbar-alpha';

export default function WithDifferentEnviromnmentsNavbarExample() {
  return (
    <Navbar
      mainNavigation={
        <>
          <Navbar.Item title="Home" isActive />
          <Navbar.Item title="Content model" />
          <Navbar.Item title="Content" />
          <Navbar.Item title="Media" />
          <Navbar.Item title="Apps" icon={<PuzzlePieceIcon />}>
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
      }
      mobileNavigation={
        <>
          <Navbar.MenuItem title="Content model" />
          <Navbar.MenuItem title="Content" } />
          <Navbar.MenuItem title="Experiences" />
          <Navbar.MenuItem title="Media" />
          <Navbar.Submenu title="Apps" >
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
        </>
      }
      switcher={
        <Navbar.Switcher
          isAlias={false}
          envVariant="master"
          space="my-space"
          environment="master"
        />
      }
      account={
        <Navbar.Account
          username="Conny Contentful"
          avatar="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=48&h=48"
          initials="CC"
          label="Account settings"
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
      }
      aria={{
        labelMainNavigation: 'Main navigation',
        labelAccount: 'My account',
      }}
    />
  );
}
