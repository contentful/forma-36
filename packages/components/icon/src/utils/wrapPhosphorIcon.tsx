import React from 'react';
import type {
  Icon as PhosphorIcon,
  IconWeight as PhosphorIconWeight,
} from '@phosphor-icons/react';
import tokens from '@contentful/f36-tokens';
import { Icon, sizes } from '../Icon.js';
import type { GeneratedIconProps } from './generateIconComponent.js';

type IconWeight = Extract<PhosphorIconWeight, 'duotone'>;

// Unfortunately we have to pass props directly to the Phosphor icon
export function wrapPhosphorIcon(PhosphorIcon: PhosphorIcon) {
  const Component = ({
    isActive = false,
    color = isActive ? tokens.blue500 : tokens.gray900,
    size = 'medium',
    testId,
    ...props
  }: GeneratedIconProps & { weight?: IconWeight }) => {
    const commonProps = { ...props, 'data-test-id': testId };
    return (
      <Icon
        {...commonProps}
        as={() => (
          <PhosphorIcon {...commonProps} color={color} size={sizes[size]} />
        )}
      />
    );
  };

  return Component;
}
