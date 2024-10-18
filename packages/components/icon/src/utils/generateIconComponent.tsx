import React, { type ReactElement } from 'react';
import type { MappedOmit } from '@contentful/f36-core';
import { Icon, type IconProps } from '../Icon.js';

export type GeneratedIconProps = MappedOmit<
  IconProps,
  'as' | 'children' | 'name' | 'viewBox'
> & {
  children?: never;
};

type GenerateIconComponentParameters = {
  /**
   * Icon name is used as the generated icon's component display name
   */
  name?: string;
  /**
   * The SVG path(s) to render in the icon wrapper
   */
  path: ReactElement;
  /**
   * A collection of default props to set on the generated icon
   */
  props?: GeneratedIconProps;
  /**
   * Custom SVG viewBox attribute to use for the generated icon
   */
  viewBox?: IconProps['viewBox'];
};

export function generateIconComponent({
  name,
  path,
  props: defaultProps,
  viewBox,
}: GenerateIconComponentParameters) {
  const Component = function (props: IconProps) {
    return (
      <Icon viewBox={viewBox} {...defaultProps} {...props}>
        {path}
      </Icon>
    );
  };

  if (name) {
    Component.displayName = name;
  }

  return Component;
}
