import React from 'react';
import type {
  Icon as PhosphorIcon,
  IconWeight as PhosphorIconWeight,
  IconProps as PhosphorIconProps,
} from '@phosphor-icons/react';
import { Icon, sizes } from '../Icon.js';
import type { GeneratedIconProps } from './generateIconComponent.js';
import type { MappedOmit } from '@contentful/f36-core';

type IconWeight = Extract<PhosphorIconWeight, 'duotone'>;

// Unfortunately we have to pass props directly to the Phosphor icon
export function wrapPhosphorIcon(PhosphorIcon: PhosphorIcon) {
  const Component = ({
    color = 'currentColor',
    size = 'medium',
    ...props
  }: MappedOmit<GeneratedIconProps, 'isActive'> & { weight?: IconWeight }) => {
    return (
      <Icon
        {...props}
        size={size}
        color={color}
        // Icon renders the component on the `as` prop with its own props
        // then we pass the props to the PhosphorIcon component
        as={(phosphorProps: PhosphorIconProps) => (
          <PhosphorIcon {...phosphorProps} color={color} size={sizes[size]} />
        )}
      />
    );
  };

  return Component;
}
