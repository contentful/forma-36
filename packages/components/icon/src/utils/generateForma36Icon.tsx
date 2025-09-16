import React from 'react';
import type { Icon } from '@phosphor-icons/react';
import { IconVariant } from '../types.js';
import { generateComponentWithVariants } from './generateComponentWithVariants.js';
import { wrapPhosphorIcon } from './wrapPhosphorIcon.js';
import { type GeneratedIconProps } from './generateIconComponent.js';

/**
 * Helper function to generate a Forma 36 icon component from a Phosphor icon component
 */
export function generateForma36Icon(PhosphorIcon: Icon) {
  const Icon = wrapPhosphorIcon(PhosphorIcon);

  return generateComponentWithVariants({
    variants: {
      [IconVariant.Active]: ({ isActive, ...props }: GeneratedIconProps) => (
        <Icon {...props} weight="duotone" />
      ),
      [IconVariant.Default]: ({ isActive, ...props }: GeneratedIconProps) => (
        <Icon {...props} />
      ),
    },
  });
}
