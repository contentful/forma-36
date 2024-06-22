import React from 'react';
import { NavbarSwitcherProps } from '../NavbarSwitcher/NavbarSwitcher';
import { EnvironmentAliasIcon, EnvironmentIcon } from '@contentful/f36-icons';

export type NavbarEnvVariantProps = Pick<NavbarSwitcherProps, 'isAlias'>;

export function NavbarEnvVariant({ isAlias }: NavbarEnvVariantProps) {
  return (
    <>
      {isAlias ? (
        <EnvironmentAliasIcon size="tiny" />
      ) : (
        <EnvironmentIcon size="tiny" />
      )}
    </>
  );
}
