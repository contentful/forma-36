import React, { type ReactElement } from 'react';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react';

import { Icon, type IconProps } from './Icon';

export type GeneratedIconProps = Omit<
  IconProps,
  'as' | 'children' | 'name' | 'viewBox'
> & {
  children?: never;
  isActive?: boolean;
};

type GenerateIconParameters = {
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
   * Whether or not to trim the icon width, i.e. set `width` to `auto`
   */
  trimmed?: IconProps['trimmed'];
  /**
   * Custom SVG viewBox attribute to use for the generated icon
   */
  viewBox?: IconProps['viewBox'];
};

export function generateIcon({
  name,
  path,
  props: defaultProps,
  trimmed,
  viewBox,
}: GenerateIconParameters) {
  const Component = function (props: IconProps) {
    return (
      <Icon viewBox={viewBox} {...defaultProps} {...props} trimmed={trimmed}>
        {path}
      </Icon>
    );
  };

  if (name) {
    Component.displayName = name;
  }

  return Component;
}

// @todo: Extract
const sizes = {
  tiny: '14px',
  small: '16px',
  medium: '20px',
};

// We need to pass the `size` prop directly to the Phosphor icon to render the
// right sizes
export function wrapPhosphorIcon(PhosphorIcon: PhosphorIcon) {
  const Component = ({
    size = 'medium',
    ...props
  }: GeneratedIconProps & { weight?: 'fill' }) => (
    <Icon as={() => <PhosphorIcon {...props} size={sizes[size]} />} />
  );

  return Component;
}

export enum IconVariant {
  Active = 'active',
  Default = 'default',
}

export function generateComponentWithVariants({
  variants,
}: {
  variants: Record<IconVariant, React.FunctionComponent<GeneratedIconProps>>;
}) {
  const Component = function ({
    isActive = false,
    ...props
  }: GeneratedIconProps & { isActive?: boolean }) {
    if (isActive) {
      return variants[IconVariant.Active](props);
    }

    // This can easily be extended with more variants in the future, but for now
    // we can just return the default
    return variants[IconVariant.Default](props);
  };

  return Component;
}

export function generateForma36Icon(PhosphorIcon) {
  const Icon = wrapPhosphorIcon(PhosphorIcon);

  return generateComponentWithVariants({
    variants: {
      [IconVariant.Active]: (props) => <Icon {...props} weight="fill" />,
      [IconVariant.Default]: Icon,
    },
  });
}
