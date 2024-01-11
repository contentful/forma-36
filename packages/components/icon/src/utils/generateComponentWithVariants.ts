import { IconVariant } from '../types';
import type { GeneratedIconProps } from './generateIconComponent';

export function generateComponentWithVariants({
  variants,
}: {
  variants: Record<IconVariant, React.FunctionComponent<GeneratedIconProps>>;
}) {
  const Component = function (props: GeneratedIconProps) {
    if (props.isActive) {
      return variants[IconVariant.Active](props);
    }

    return variants[IconVariant.Default](props);
  };

  return Component;
}
