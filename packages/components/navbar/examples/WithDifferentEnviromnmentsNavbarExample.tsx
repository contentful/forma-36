import React from 'react';
import { Navbar } from '@contentful/f36-navbar';
import { EntryIcon, AssetIcon } from '@contentful/f36-icons';

export default function WithDifferentEnviromnmentsNavbarExample() {
  // master environment
  const envVariant = 'master';
  const envName = 'master';

  // Try non-master environment
  // const envVariant = 'non-master';
  // const envName = 'development'

  const isAlias = true;
  // Try both master and non-master environment with alias
  // const isAlias = true;

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
          <Navbar.SwitcherItem envVariant={envVariant} isAlias={isAlias}>
            {envName}
          </Navbar.SwitcherItem>
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
    >
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
    </Navbar>
  );
}
