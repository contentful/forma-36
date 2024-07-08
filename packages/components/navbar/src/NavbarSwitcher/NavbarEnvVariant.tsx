import React from 'react';
import { NavbarSwitcherProps } from '../NavbarSwitcher/NavbarSwitcher';
import { EnvironmentAliasIcon, EnvironmentIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

export type NavbarEnvVariantProps = Pick<
  NavbarSwitcherProps,
  'isAlias' | 'envVariant'
> & {
  className?: string;
};

export function NavbarEnvVariant({
  isAlias,
  envVariant,
  className,
}: NavbarEnvVariantProps) {
  const color = envVariant === 'master' ? tokens.green600 : tokens.orange500;

  return isAlias ? (
    <EnvironmentAliasIcon color={color} className={className} size="medium" />
  ) : (
    <EnvironmentIcon color={color} className={className} size="medium" />
  );
}
