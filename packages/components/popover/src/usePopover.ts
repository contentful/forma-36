import React from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  autoPlacement,
} from '@floating-ui/react';
import type { OffsetOptions, Placement } from '@floating-ui/react';

export interface PopoverOptions {
  placement?: Placement | 'auto';
  isAutoalignmentEnabled?: boolean;
  isOpen?: boolean;
  offset?: OffsetOptions;
  renderOnlyWhenOpen?: boolean;
  usePortal?: boolean;
  onClose?: (isOpen: boolean) => void;
}

export function usePopover({
  placement = 'bottom-start',
  isAutoalignmentEnabled = true,
  isOpen = false,
  offset: offsetOption = 0,
  onClose,
  renderOnlyWhenOpen = true,
  usePortal = true,
}: PopoverOptions = {}) {
  const [labelId, setLabelId] = React.useState<string | undefined>();
  const [descriptionId, setDescriptionId] = React.useState<
    string | undefined
  >();

  /** Configure middleware based on placement and isAutoalignmentEnabled
   * If placement is "auto" it will use autoPlacement() in the middleware and not make use of flip and switch.
   * If isAutoalignmentEnabled is false, it will also not use flip and switch but only use the placement variable.
   */

  let sanitizedPlacement: Placement = 'bottom-start';
  const middleware = [offset(offsetOption)];

  if (placement !== 'auto' && isAutoalignmentEnabled) {
    sanitizedPlacement = placement;
    middleware.push(flip({ padding: 5 }), shift({ padding: 5 }));
  } else if (placement === 'auto') {
    middleware.push(autoPlacement());
  } else {
    sanitizedPlacement = placement;
  }

  const data = useFloating({
    placement: sanitizedPlacement,
    open: isOpen,
    onOpenChange: onClose,
    whileElementsMounted: autoUpdate,
    middleware,
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: false,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      isOpen,
      onClose,
      ...interactions,
      ...data,
      renderOnlyWhenOpen,
      usePortal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [isOpen, onClose, interactions, data, labelId, descriptionId],
  );
}
