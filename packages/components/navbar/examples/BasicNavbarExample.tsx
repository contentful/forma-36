import React from 'react';
import { Navbar } from '@contentful/f36-components';

import { EntryIcon, ImageSquareIcon } from '@contentful/f36-icons-alpha';

export default function BasicNavbarExample() {
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
          avatar="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=48&h=48"
        >
          <Navbar.MenuItem title="Account settings" />
          <Navbar.MenuItem title="Dashboard" />
          <Navbar.MenuDivider />
          <Navbar.MenuItem title="Log out" />
        </Navbar.Account>
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=32&h=32"
              alt="app 1"
            />
          }
        />
        <Navbar.MenuItem title="App 2" />
      </Navbar.Item>
    </Navbar>
  );
}
