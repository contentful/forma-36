import React from 'react';
import { Navbar } from '@contentful/f36-navbar';

export default function LoadingSkeletonNavbarExample() {
  return (
    <Navbar
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
  );
}
