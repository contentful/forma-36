import { IconVariant } from '../types.js';
import type { GeneratedIconProps } from './generateIconComponent.js';

export function generateComponentWithVariants({
  variants,
}: {
  variants: Record<IconVariant, React.FunctionComponent<GeneratedIconProps>>;
}) {
  const Component = function ({ isActive, ...props }: GeneratedIconProps) {
    if (isActive) {
      return variants[IconVariant.Active](props);
    }

    return variants[IconVariant.Default](props);
  };

  return Component;
}
