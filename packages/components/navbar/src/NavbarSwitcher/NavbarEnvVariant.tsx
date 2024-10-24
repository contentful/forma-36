import React from 'react';
import { NavbarSwitcherProps } from '../NavbarSwitcher/NavbarSwitcher';
import {
  EnvironmentAliasIcon,
  EnvironmentIcon,
  RocketLaunchIcon,
} from '@contentful/f36-icons';
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
  const isMaster = envVariant === 'master';
  const color = isMaster ? tokens.green700 : tokens.orange700;

  switch (true) {
    case isMaster && !isAlias:
      return (
        <RocketLaunchIcon color={color} className={className} size="medium" />
      );

    case isAlias:
      return (
        <EnvironmentAliasIcon
          color={color}
          className={className}
          size="medium"
        />
      );

    case !isMaster:
    default:
      return (
        <EnvironmentIcon color={color} className={className} size="medium" />
      );
  }
}
