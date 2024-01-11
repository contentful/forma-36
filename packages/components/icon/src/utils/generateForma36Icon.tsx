import React from 'react';
import { IconVariant } from '../types';
import { generateComponentWithVariants } from './generateComponentWithVariants';
import { wrapPhosphorIcon } from './wrapPhosphorIcon';

/**
 * Helper function to generate a Forma 36 icon component from a Phosphor icon component
 */
export function generateForma36Icon(PhosphorIcon) {
  const Icon = wrapPhosphorIcon(PhosphorIcon);

  return generateComponentWithVariants({
    variants: {
      [IconVariant.Active]: (props) => <Icon {...props} weight="fill" />,
      [IconVariant.Default]: Icon,
    },
  });
}
