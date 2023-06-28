import React from 'react';
import { Navbar } from '@contentful/f36-components';

export default function LoadingSkeletonNavbarExample() {
  return (
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
  );
}
