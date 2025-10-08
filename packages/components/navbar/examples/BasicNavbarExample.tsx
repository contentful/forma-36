import React from 'react';
import { Navbar } from '@contentful/f36-navbar';
import {
  ImageSquareIcon,
  PenNibIcon,
  PuzzlePieceIcon,
} from '@contentful/f36-icons';

export default function BasicNavbarExample() {
  return (
    <Navbar
      mainNavigation={
        <>
          <Navbar.Item title="Content" icon={<PenNibIcon />} />
          <Navbar.Item title="Media" icon={<ImageSquareIcon />} />
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
          <Navbar.MenuItem title="Content" icon={<PenNibIcon />} />
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
        </>
      }
      switcher={
        <Navbar.Switcher
          isAlias={true}
          envVariant="non-master"
          space="my-space"
          environment="development"
        />
      }
      account={
        <Navbar.Account
          username="Conny Contentful"
          avatar="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=48&h=48"
          initials="CC"
          label="Account settings"
        >
          <Navbar.MenuItem title="Account settings" />
          <Navbar.MenuItem title="Dashboard" />
          <Navbar.MenuDivider />
          <Navbar.MenuItem
            title="External link"
            as="a"
            href="https://www.contentful.com"
            target="_blank"
            rel="noopener noreferrer"
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
