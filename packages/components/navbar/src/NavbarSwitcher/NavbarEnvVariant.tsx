import React from 'react';
import { NavbarSwitcherProps } from '../NavbarSwitcher/NavbarSwitcher';
import { EnvironmentAliasIcon, EnvironmentIcon } from '@contentful/f36-icons';
import { getNavbarEnvVariantStyles } from './NavbarSwitcher.styles';

export type NavbarEnvVariantProps = Pick<
  NavbarSwitcherProps,
  'isAlias' | 'envVariant'
>;

export function NavbarEnvVariant({
  isAlias,
  envVariant,
}: NavbarEnvVariantProps) {
  const styles = getNavbarEnvVariantStyles();

  return (
    <span
      className={
        envVariant === 'master' ? styles.envItemMaster : styles.envItemNonMaster
      }
    >
      {isAlias ? (
        <EnvironmentAliasIcon size="tiny" />
      ) : (
        <EnvironmentIcon size="tiny" />
      )}
    </span>
  );
}
