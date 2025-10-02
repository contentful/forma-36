import React from 'react';

import {
  useFloating,
  autoUpdate,
  offset,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  autoPlacement,
  arrow,
  shift,
  flip,
  type Placement,
} from '@floating-ui/react';
import type { TooltipPlacement } from './Tooltip';

export interface TooltipOptions {
  placement?: TooltipPlacement;
  showDelay?: number;
  hideDelay?: number;
  usePortal?: boolean;
  isVisible?: boolean;
}

export function useTooltip({
  isVisible = false,
  placement = 'auto',
  showDelay,
  hideDelay,
  usePortal,
}: TooltipOptions = {}) {
  const arrowRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(isVisible);

  let sanitizedPlacement: Placement = 'top';
  const middleware = [
    arrow({
      element: arrowRef,
    }),
  ];

  if (placement === 'auto') {
    middleware.push(autoPlacement({ padding: 5 }));
  } else {
    sanitizedPlacement = placement;
    middleware.push(shift(), flip());
  }

  if (
    sanitizedPlacement.startsWith('right') ||
    sanitizedPlacement.toString().startsWith('left')
  ) {
    middleware.push(offset({ mainAxis: 10 }));
  } else {
    middleware.push(offset({ mainAxis: 5, crossAxis: 0 }));
  }

  const data = useFloating({
    placement: sanitizedPlacement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware,
  });

  const context = data.context;

  const hover = useHover(context, {
    delay: { open: showDelay, close: hideDelay },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      usePortal,
      arrowRef,
      ...interactions,
      ...data,
    }),
    [isOpen, setIsOpen, arrowRef, usePortal, interactions, data],
  );
}
