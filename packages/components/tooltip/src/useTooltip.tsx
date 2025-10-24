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
  safePolygon,
  type Placement,
  type Middleware,
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
  const middleware: Middleware[] = [];

  if (placement === 'auto') {
    middleware.push(autoPlacement({ padding: 5 }));
  } else {
    sanitizedPlacement = placement;
    middleware.push(shift(), flip());
  }

  if (
    sanitizedPlacement.startsWith('right') ||
    sanitizedPlacement.startsWith('left') ||
    placement === 'auto'
  ) {
    middleware.push(offset({ mainAxis: 10 }));
  } else {
    middleware.push(offset({ mainAxis: 5 }));
  }

  // add arrow last to middleware so it can pick up the placement happening before
  middleware.push(
    arrow({
      element: arrowRef,
    }),
  );

  const data = useFloating({
    placement: sanitizedPlacement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware,
  });

  const context = data.context;

  const hover = useHover(context, {
    handleClose: safePolygon({ requireIntent: false }),
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
    [isOpen, usePortal, interactions, data],
  );
}
