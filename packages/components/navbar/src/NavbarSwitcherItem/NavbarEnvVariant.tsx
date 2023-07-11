import React from 'react';
import { NavbarSwitcherItemProps } from './NavbarSwitcherItem';
import { CircleIcon } from '../icons';
import { EnvironmentAliasIcon, EnvironmentIcon } from '@contentful/f36-icons';

export type NavbarEnvVariantProps = Pick<NavbarSwitcherItemProps, 'isAlias'>;

export function NavbarEnvVariant({ isAlias }: NavbarEnvVariantProps) {
  return (
    <>
      <CircleIcon key="mobile-icon" size="tiny" />
      {isAlias ? (
        <EnvironmentAliasIcon key="full-icon" size="tiny" />
      ) : (
        <EnvironmentIcon key="full-icon" size="tiny" />
      )}
    </>
  );
}
