import { IconVariant } from '../types.js';
import type { GeneratedIconProps } from './generateIconComponent.js';

// Define a minimal "JSX component" signature (no implicit children, always returns ReactElement)
export type GeneratedIconComponent = (
  props: GeneratedIconProps,
) => React.ReactElement;

export function generateComponentWithVariants({
  variants,
}: {
  variants: Record<IconVariant, GeneratedIconComponent>;
}): GeneratedIconComponent {
  const Component: GeneratedIconComponent = ({ isActive, ...props }) => {
    // Choose the variant; pass full props including isActive if needed
    if (isActive) {
      return variants[IconVariant.Active]({ isActive, ...props });
    }
    return variants[IconVariant.Default]({ isActive, ...props });
  };

  return Component;
}
